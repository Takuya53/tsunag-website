import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tsunag-inc.jp"),
  title: {
    default: "TSUNAG｜AIで中小企業の未来を共に創るGrowth Partner",
    template: "%s｜TSUNAG",
  },
  description:
    "TSUNAGは、AIを活用して中小企業の事業成長を支援するGrowth Partnerです。ホームページ制作、LP制作、SEO、SNS戦略、画像・動画・バナー制作などを通じて、お客様の未来を共に創ります。",
  openGraph: {
    title: "TSUNAG｜AIで中小企業の未来を共に創るGrowth Partner",
    description:
      "AIを活用して中小企業の事業成長を支援するGrowth Partner。未来は、共に創る。",
    url: "https://tsunag-inc.jp",
    siteName: "TSUNAG",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TSUNAG｜AIで中小企業の未来を共に創るGrowth Partner",
    description:
      "AIを活用して中小企業の事業成長を支援するGrowth Partner。未来は、共に創る。",
  },
  alternates: {
    canonical: "https://tsunag-inc.jp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}