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
    <main>
      <section className="section">
        <div className="section-inner grid-2">
          <div className="fade-up">
            <p className="section-label">CONTACT</p>

            <h1 className="section-title">
              事業の未来を、
              <br />
              <span className="gold-text">共に創りましょう。</span>
            </h1>

            <p className="section-lead">
              AI活用、Web制作、LP制作、SEO、SNS戦略、画像・動画制作、
              バナー制作、業務改善まで。まずは現在の課題や目指したい未来をお聞かせください。
            </p>
          </div>

          <div className="card fade-up delay-1" style={{ padding: "48px" }}>
            {status === "success" ? (
              <div>
                <p className="section-label">THANK YOU</p>
                <h2
                  style={{
                    fontSize: "32px",
                    lineHeight: 1.35,
                    marginBottom: "24px",
                  }}
                >
                  送信が完了しました。
                </h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.9 }}>
                  お問い合わせありがとうございます。
                  内容を確認のうえ、担当者よりご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "grid", gap: "22px" }}>
                <div>
                  <label htmlFor="name" style={{ fontWeight: 700 }}>
                    お名前 *
                  </label>
                  <input id="name" name="name" type="text" required placeholder="山田 太郎" />
                </div>

                <div>
                  <label htmlFor="email" style={{ fontWeight: 700 }}>
                    メールアドレス *
                  </label>
                  <input id="email" name="email" type="email" required placeholder="example@company.jp" />
                </div>

                <div>
                  <label htmlFor="company" style={{ fontWeight: 700 }}>
                    会社名
                  </label>
                  <input id="company" name="company" type="text" placeholder="株式会社〇〇" />
                </div>

                <div>
                  <label htmlFor="message" style={{ fontWeight: 700 }}>
                    お問い合わせ内容 *
                  </label>
                  <textarea id="message" name="message" required rows={7} placeholder="ご相談内容を入力してください。" />
                </div>

                {status === "error" && (
                  <p style={{ color: "#b91c1c", fontWeight: 700 }}>
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="button-primary"
                  style={{ border: "none", cursor: "pointer" }}
                >
                  {status === "sending" ? "送信中..." : "送信する"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="card fade-up" style={{ padding: "56px" }}>
            <p className="section-label">TRUST</p>

            <h2
              className="section-title"
              style={{ marginBottom: "32px" }}
            >
              小さな相談から、
              <br />
              <span className="gold-text">未来は動き出します。</span>
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                gap: "20px",
              }}
            >
              <div>✓ 初回相談無料</div>
              <div>✓ AI活用から制作まで対応</div>
              <div>✓ 中小企業の成長支援</div>
              <div>✓ 継続改善まで伴走</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}