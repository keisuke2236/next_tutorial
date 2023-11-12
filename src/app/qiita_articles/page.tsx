import React from 'react';
import Head from 'next/head';
import QiitaArticles from '../components/QiitaArticles.client';

export default function Home() {
  return (
    <>
      <Head>
        <title>Qiita記事一覧</title>
      </Head>
      <section>
        <h2>Qiita記事一覧</h2>
        <QiitaArticles /> {/* Next.js 14 クライアントコンポーネントを使用 */}
      </section>
    </>
  );
}
