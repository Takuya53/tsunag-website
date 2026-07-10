import Link from "next/link";

type BreadcrumbProps = {
  current: string;
};

export default function Breadcrumb({ current }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb" aria-label="パンくずリスト">
      <Link href="/">TOP</Link>
      <span aria-hidden="true">&gt;</span>
      <span className="current">{current}</span>
    </nav>
  );
}
