import Image from "next/image";

const stats = [
  {
    icon: "/images/stats/icon-users.png",
    label: "支援企業数",
    value: "300",
    unit: "+ 社以上",
  },
  {
    icon: "/images/stats/icon-growth.png",
    label: "プロジェクト実績",
    value: "1,000",
    unit: "+ 件以上",
  },
  {
    icon: "/images/stats/icon-star.png",
    label: "顧客満足度",
    value: "98",
    unit: "% 以上",
  },
  {
    icon: "/images/stats/icon-network.png",
    label: "AI活用支援",
    value: "GROWTH",
    unit: "を支援",
    word: true,
  },
];

export default function Stats() {
  return (
    <div className="stats-card card fade-up delay-2">
      {stats.map((stat) => (
        <div className="stat-item" key={stat.label}>
          <div className="stat-icon">
            <Image src={stat.icon} alt="" width={40} height={40} aria-hidden="true" />
          </div>
          <div>
            <p className="stat-label">{stat.label}</p>
            <p className={`stat-value${stat.word ? " stat-value--word" : ""}`}>
              {stat.value}
              <span className="unit">{stat.unit}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
