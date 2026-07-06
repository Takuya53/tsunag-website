"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

type ContactApiResponse = {
  success?: boolean;
  message?: string;
};

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let result: ContactApiResponse = {};

      try {
        result = (await response.json()) as ContactApiResponse;
      } catch {
        result = {};
      }

      if (!response.ok || !result.success) {
        setStatus("error");
        setErrorMessage(result.message || "送信に失敗しました。");
        return;
      }

      form.reset();
      setStatus("success");

      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "contact_submit", {
          event_category: "contact",
          event_label: "contact_page",
        });
      }
    } catch {
      setStatus("error");
      setErrorMessage("通信エラーが発生しました。時間をおいて再度お試しください。");
    }
  }

  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#1E2A32]">
      <section className="mx-auto max-w-5xl px-6 py-24 md:px-10">
        <div className="mb-12">
          <p className="mb-4 text-sm font-semibold tracking-[0.24em] text-[#B58A4A]">
            CONTACT
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            お問い合わせ
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#4B5563]">
            AI活用、Web制作、LP制作、SEO、SNS戦略、クリエイティブ制作など、
            事業成長に関するご相談をお気軽にお聞かせください。
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm md:p-10">
          {status === "success" ? (
            <div className="rounded-2xl border border-[#D8C7A3] bg-[#FBF7EF] p-8">
              <h2 className="text-2xl font-bold">送信が完了しました</h2>
              <p className="mt-4 leading-8 text-[#4B5563]">
                お問い合わせありがとうございます。
                内容を確認のうえ、担当者よりご連絡いたします。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                  お名前 <span className="text-[#B58A4A]">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-[#D8D2C4] bg-white px-4 py-3 outline-none transition focus:border-[#B58A4A]"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                  メールアドレス <span className="text-[#B58A4A]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-[#D8D2C4] bg-white px-4 py-3 outline-none transition focus:border-[#B58A4A]"
                  placeholder="example@company.jp"
                />
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-semibold">
                  会社名
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full rounded-xl border border-[#D8D2C4] bg-white px-4 py-3 outline-none transition focus:border-[#B58A4A]"
                  placeholder="株式会社〇〇"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                  お問い合わせ内容 <span className="text-[#B58A4A]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={8}
                  className="w-full rounded-xl border border-[#D8D2C4] bg-white px-4 py-3 outline-none transition focus:border-[#B58A4A]"
                  placeholder="ご相談内容を入力してください。"
                />
              </div>

              {status === "error" && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-full bg-[#1E2A32] px-8 py-4 text-sm font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
              >
                {status === "sending" ? "送信中..." : "送信する"}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}