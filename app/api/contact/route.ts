import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactRequestBody = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const company = body.company?.trim() || "未入力";
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "必須項目が入力されていません。" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set.");
      return NextResponse.json(
        { success: false, message: "メール送信設定が未完了です。" },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ||
        "TSUNAG Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "info@tsunag-inc.jp",
      replyTo: email,
      subject: `【TSUNAG】お問い合わせ：${name} 様`,
      text: [
        "TSUNAG公式サイトからお問い合わせがありました。",
        "",
        `お名前：${name}`,
        `メールアドレス：${email}`,
        `会社名：${company}`,
        "",
        "お問い合わせ内容：",
        message,
      ].join("\n"),
    });

    return NextResponse.json(
      { success: true, message: "お問い合わせを送信しました。" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      { success: false, message: "送信中にエラーが発生しました。" },
      { status: 500 }
    );
  }
}