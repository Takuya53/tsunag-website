import Image from "next/image";
import Link from "next/link";

const linkGroups = [
  [
    { href: "/about", label: "About Us" },
    { href: "/about#mission", label: "Mission" },
    { href: "/about#values", label: "Value" },
  ],
  [
    { href: "/services", label: "Services" },
    { href: "/services#list", label: "サービス一覧" },
  ],
  [
    { href: "/works", label: "Works" },
    { href: "/works#list", label: "実績一覧" },
  ],
  [
    { href: "/company", label: "Company" },
    { href: "/company#profile", label: "会社概要" },
    { href: "/company#message", label: "代表メッセージ" },
    { href: "/company#profile", label: "アクセス" },
  ],
  [
    { href: "/news", label: "News" },
    { href: "/news", label: "お知らせ" },
    { href: "/news", label: "ブログ" },
  ],
];

const socialLinks = [
  { icon: "/images/footer/icon-instagram.png", label: "Instagram" },
  { icon: "/images/footer/icon-x.png", label: "X" },
  { icon: "/images/footer/icon-line.png", label: "LINE" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <Image src="/logo/logo-full-gold.png" alt="TSUNAG" width={170} height={54} />

          <p>
            AIとテクノロジーで中小企業の未来を共に創る
            <br />
            Growth Partnerとして、価値あるサービスを提供し続けます。
          </p>

          <div className="site-footer-social">
            {socialLinks.map((social) => (
              <span
                key={social.label}
                className="site-footer-social-item"
                role="img"
                aria-label={`${social.label}（準備中）`}
                title={`${social.label}（準備中）`}
              >
                <Image src={social.icon} alt="" width={16} height={16} aria-hidden="true" />
              </span>
            ))}
            <span className="site-footer-social-note">SNS準備中</span>
          </div>
        </div>

        <nav className="site-footer-nav" aria-label="フッターナビゲーション">
          {linkGroups.map((group, index) => (
            <ul key={index}>
              {group.map((item, itemIndex) => (
                <li key={`${item.href}-${itemIndex}`}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          ))}
        </nav>
      </div>

      <div className="site-footer-bottom-bar">
        <p className="site-footer-bottom">© 2025 TSUNAG Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
