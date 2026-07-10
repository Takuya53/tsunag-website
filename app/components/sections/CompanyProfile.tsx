import Image from "next/image";

const profile = [
  ["会社名", "株式会社TSUNAG"],
  ["代表者", "辻 拓也（Takuya Tsuji）"],
  ["設立", "2025年2月"],
  [
    "所在地",
    "〒103-0007 東京都中央区日本橋浜町2-55-2 Bespoke Apartments 日本橋浜町 3F",
  ],
  ["電話番号", "080-4008-6706"],
  [
    "事業内容",
    "Webサイト制作 / LP制作 / SEO対策 / SNS運用 / 画像・動画制作 / AIソリューション / Webマーケティング",
  ],
];

export default function CompanyProfile() {
  return (
    <section id="profile" className="section section--tight-bottom">
      <div className="section-inner">
        <div className="fade-up">
          <p className="section-label">COMPANY PROFILE</p>
          <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
            会社概要
          </h2>
        </div>

        <div
          className="grid-2 fade-up delay-1"
          style={{ marginTop: "48px", alignItems: "start" }}
        >
          <div className="card" style={{ padding: "8px 24px" }}>
            <table className="profile-table">
              <tbody>
                {profile.map(([label, value]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card rep-card">
            <div className="rep-photo">
              <Image
                src="/images/company/ceo-portrait.png"
                alt="代表取締役 CEO 辻 拓也"
                fill
                sizes="240px"
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <p className="rep-signature">Takuya Tsuji</p>
            <p className="rep-title">代表取締役 CEO</p>
            <p className="rep-name">辻 拓也</p>
          </div>
        </div>
      </div>
    </section>
  );
}
