import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1>hello</h1>
      <p>返せる要素は単一の要素だけです。</p>
      <div>1 + 2 = {1+2}</div>
      <div><Link href='/about'>アバウトページ</Link></div>
    </>
  );
}