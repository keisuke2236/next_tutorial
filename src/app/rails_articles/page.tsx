import React from 'react'
import Head from 'next/head'
import RailsArticles from '../components/RailsArticles.client'

export default function Home (): JSX.Element {
  return (
    <>
      <Head>
        <title>Rails記事一覧</title>
      </Head>
      <section>
        <h2>Rails記事一覧</h2>
        <RailsArticles /> {/* Next.js 14 クライアントコンポーネントを使用 */}
      </section>
    </>
  )
}
