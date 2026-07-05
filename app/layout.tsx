import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";

export const metadata: Metadata = {
  title: "TSUNAG",
  description: "未来は、共に創る。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}