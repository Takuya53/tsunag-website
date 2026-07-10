import Image from "next/image";

const values = [
  {
    icon: "/images/about/value-01.png",
    title: "共に考え、伴走する",
    text: "お客様の課題や目標に寄り添い、共に考え、最適策で伴走します。",
  },
  {
    icon: "/images/about/value-02.png",
    title: "成果にこだわる",
    text: "見た目の美しさだけでなく、事業成長につながる成果を重視します。",
  },
  {
    icon: "/images/about/value-03.png",
    title: "最新の力を活かす",
    text: "AIなど最新のテクノロジーを積極的に取り入れ、最適なソリューションを提供します。",
  },
  {
    icon: "/images/about/value-04.png",
    title: "誠実であること",
    text: "誠実なコミュニケーションと透明性のある価値提供を心がけます。",
  },
  {
    icon: "/images/about/value-05.png",
    title: "長期的な信頼関係",
    text: "一時的な成果ではなく、長期的に信頼されるパートナーであり続けます。",
  },
];

export default function AboutValue() {
  return (
    <section id="values" className="section section--tight-top section--tight-bottom">
      <div className="section-inner">
        <div className="fade-up">
          <p className="section-label">OUR VALUES</p>
          <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
            大切にしている価値観
          </h2>
        </div>

        <div className="values-grid fade-up delay-1">
          {values.map((value) => (
            <div className="value-item" key={value.title}>
              <div className="value-icon">
                <Image src={value.icon} alt="" width={40} height={40} aria-hidden="true" />
              </div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
