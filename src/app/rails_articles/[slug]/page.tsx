import React from 'react'
import Head from 'next/head'
import RailsArticle from '../../components/RailsArticle.client'

export default function Home (): JSX.Element {
  return (
    <>
      <Head>
        <title>記事ページ</title>
      </Head>
      <section>
        <h2>Rails記事</h2>
        <RailsArticle /> {/* Next.js 14 クライアントコンポーネントを使用 */}
      </section>
    </>
  )
}
