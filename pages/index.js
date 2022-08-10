import Head from "next/head";
import Link from "next/link";

export default function Home({ time }) {
  return (
    <>
      <h1 className="title">{time}</h1>
      <h2>
        <Link href="/ssr">ssr로</Link>
      </h2>
      <h2>
        <Link href="/ssg">ssg로</Link>
      </h2>
      <h2>
        <Link href="/isr">isr로</Link>
      </h2>
    </>
  );
}
