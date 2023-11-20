import Head from 'next/head'
import Image from 'next/image'
import styles from './components/layout.module.scss'
import utilStyles from './styles/utils.module.scss'
import Link from 'next/link'

// ReactNode は <> HTMLタグ </> で囲まれたものを指す、ものすごく柔軟な型
import { type ReactNode } from 'react'

const siteName = 'Qiita Articles from Next.js'
export const siteTitle = 'ろれんすさんのQiita記事 Next.js'

interface LayoutProps {
  children: ReactNode
  home?: boolean
}

export default function Layout ({ children, home }: LayoutProps): JSX.Element {
  return (
    <html lang='ja'>
      <body>
        <div className={styles.container}>
          <Head>
            <link rel='icon' href='/favicon.ico' />
            <meta name='description' content='Next.jsを用いてQiitaの記事を表示するよ' />
            <meta property='og:image' content='https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/69647/24835c6d-a9b6-7d6d-9a85-d4ea9988b1b5.png' />
            <meta name='og:title' content={siteTitle} />
            <meta name='twitter:card' content='summary_large_image' />
          </Head>
          <header className={styles.header}>
            {home === true
              ? (
              <>
                <Image priority src='/images/profile.jpg' className={utilStyles.borderCircle} height={144} width={144} alt='' />
                <h1 className={utilStyles.heading2Xl}>{siteName}</h1>
              </>
                )
              : (
              <>
                <Link href='/'>
                  <Image priority src='/images/profile.jpg' className={utilStyles.borderCircle} height={108} width={108} alt='' />
                </Link>
                <h2 className={utilStyles.headingLg}>
                  <Link href='./' className={utilStyles.colorInherit}>一覧へ戻る</Link>
                </h2>
              </>
                )}
          </header>
          <main>{children}</main>
          {home === false && (
            <div className={styles.backToHome}>
              <Link href='/'>← TOPへ戻る</Link>
            </div>
          )}
        </div>
      </body>
    </html>
  )
}
