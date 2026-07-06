export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://tsunag-inc.jp/#organization",
        name: "TSUNAG",
        url: "https://tsunag-inc.jp",
        logo: "https://tsunag-inc.jp/ogp.png",
        description:
          "TSUNAGはAIを活用して中小企業の事業成長を支援するGrowth Partnerです。",
        email: "info@tsunag-inc.jp",
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": "https://tsunag-inc.jp/#website",
        url: "https://tsunag-inc.jp",
        name: "TSUNAG",
        publisher: {
          "@id": "https://tsunag-inc.jp/#organization",
        },
        inLanguage: "ja-JP",
      },
      {
        "@type": "WebPage",
        "@id": "https://tsunag-inc.jp/#webpage",
        url: "https://tsunag-inc.jp",
        name: "TSUNAG｜AIで中小企業の未来を共に創るGrowth Partner",
        isPartOf: {
          "@id": "https://tsunag-inc.jp/#website",
        },
        about: {
          "@id": "https://tsunag-inc.jp/#organization",
        },
        description:
          "AIを活用して中小企業の事業成長を支援するGrowth Partner。",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}