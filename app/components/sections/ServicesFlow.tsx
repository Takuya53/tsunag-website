import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    icon: "/images/services/process-01.png",
    title: "ヒアリング・分析",
    text: "現状の課題や目標を整理し、最適な戦略の方向性を明確にします。",
  },
  {
    icon: "/images/services/process-02.png",
    title: "戦略設計・ご提案",
    text: "データと課題をもとに、成果につながる戦略と施策をご提案します。",
  },
  {
    icon: "/images/services/process-03.png",
    title: "制作・実行",
    text: "戦略に基づき、デザイン・開発・運用まで高品質に実行します。",
  },
  {
    icon: "/images/services/process-04.png",
    title: "運用・改善",
    text: "効果測定と改善を繰り返し、継続的に成果を最大化します。",
  },
];

export default function ServicesFlow() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="process-layout">
          <div className="fade-up">
            <p className="section-label">OUR PROCESS</p>
            <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
              成果創出までの流れ
            </h2>
            <p className="section-lead">
              お客様の課題と未来を深く理解し、
              戦略から実行・改善まで一貫して伴走します。
            </p>

            <div className="button-row">
              <Link href="/contact" className="button-primary">
                ご相談・お問い合わせ <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="process-grid fade-up delay-1">
            {steps.map((step, index) => (
              <div className="process-step" key={step.title}>
                <div className="process-icon-circle">
                  <Image src={step.icon} alt="" width={40} height={40} aria-hidden="true" />
                </div>
                <p className="process-number">{`0${index + 1}`}</p>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
