import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "./structured-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://tsunag-inc.jp"),
  title: {
    default: "TSUNAG｜AIで中小企業の未来を共に創るGrowth Partner",
    template: "%s｜TSUNAG",
  },
  description:
    "TSUNAGは、AIを活用して中小企業の事業成長を支援するGrowth Partnerです。ホームページ制作、LP制作、SEO、SNS戦略、画像・動画・バナー制作などを通じて、お客様の未来を共に創ります。",
  alternates: {
    canonical: "https://tsunag-inc.jp",
  },
  openGraph: {
    title: "TSUNAG｜AIで中小企業の未来を共に創るGrowth Partner",
    description:
      "AIを活用して中小企業の事業成長を支援するGrowth Partner。未来は、共に創る。",
    url: "https://tsunag-inc.jp",
    siteName: "TSUNAG",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "TSUNAG｜AIで中小企業の未来を共に創るGrowth Partner",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TSUNAG｜AIで中小企業の未来を共に創るGrowth Partner",
    description:
      "AIを活用して中小企業の事業成長を支援するGrowth Partner。未来は、共に創る。",
    images: ["/ogp.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}