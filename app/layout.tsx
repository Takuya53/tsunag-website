import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tsunag.jp"),
  title: {
    default: "TSUNAG｜AIで中小企業の未来を共に創るGrowth Partner",
    template: "%s｜TSUNAG",
  },
  description:
    "TSUNAGは、AIを活用して中小企業の事業成長を支援するGrowth Partnerです。ホームページ制作、LP制作、SEO対策、SNS戦略、画像・動画・バナー制作まで、未来につながる成長を共に創ります。",
  keywords: [
    "TSUNAG",
    "AI活用",
    "中小企業支援",
    "Growth Partner",
    "ホームページ制作",
    "LP制作",
    "SEO対策",
    "SNS戦略",
    "動画制作",
    "画像制作",
    "バナー制作",
  ],
  authors: [{ name: "TSUNAG" }],
  creator: "TSUNAG",
  publisher: "TSUNAG",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://tsunag.jp",
    siteName: "TSUNAG",
    title: "TSUNAG｜AIで中小企業の未来を共に創るGrowth Partner",
    description:
      "TSUNAGは、AIを活用して中小企業の事業成長を支援するGrowth Partnerです。",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "TSUNAG｜未来は、共に創る。",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TSUNAG｜AIで中小企業の未来を共に創るGrowth Partner",
    description:
      "TSUNAGは、AIを活用して中小企業の事業成長を支援するGrowth Partnerです。",
    images: ["/ogp.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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