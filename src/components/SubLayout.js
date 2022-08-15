import Link from "next/link";

export default function SubLayout({ children }) {
  return (
    <div>
      <h1>
        <Link href="/">
          <a>홈으로</a>
        </Link>
      </h1>
      {children}
    </div>
  );
}
