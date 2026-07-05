export default function ServicesList() {
  const services = [
    {
      title: "Web・LP制作",
      description: "戦略設計から制作・改善まで一貫して支援します。",
    },
    {
      title: "AI活用支援",
      description: "AI導入・業務効率化・自動化をサポートします。",
    },
    {
      title: "SEO・SNS運用",
      description: "集客導線を設計し、認知拡大から成果につなげます。",
    },
    {
      title: "動画・画像制作",
      description: "ブランド価値を高めるクリエイティブを制作します。",
    },
    {
      title: "業務改善",
      description: "AIを活用し、社内業務の効率化を支援します。",
    },
    {
      title: "Growth Partner",
      description: "制作だけで終わらず、成果が出るまで伴走します。",
    },
  ];

  return (
    <section className="bg-neutral-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-semibold">
          提供サービス
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-neutral-200 bg-white p-8"
            >
              <h3 className="mb-4 text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="leading-8 text-neutral-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}