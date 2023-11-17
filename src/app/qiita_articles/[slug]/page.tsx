import React from 'react'
import Head from 'next/head'
import QiitaArticle from '../../components/QiitaArticle.client'

export default function Home (): JSX.Element {
  return (
    <>
      <Head>
        <title>記事ページ</title>
      </Head>
      <section>
        <h2>Qiita記事</h2>
        <QiitaArticle /> {/* Next.js 14 クライアントコンポーネントを使用 */}
      </section>
    </>
  )
}
