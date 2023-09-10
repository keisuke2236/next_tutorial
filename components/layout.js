import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'return TOP';
const siteName = 'Qiita Articles from Next.js';
export const siteTitle = 'ろれんすさんのQiita記事 Next.js';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Next.jsを用いてQiitaの記事を表示するよ" />
        <meta property="og:image" content="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/69647/24835c6d-a9b6-7d6d-9a85-d4ea9988b1b5.png" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image priority src="/images/profile.jpg" className={utilStyles.borderCircle} height={144} width={144} alt="" />
            <h1 className={utilStyles.heading2Xl}>{siteName}</h1>
          </>
        ) : (
          <>
          <Link href="/">
            <a>
              <Image priority src="/images/profile.jpg" className={utilStyles.borderCircle} height={108} width={108} alt="" />
            </a>
          </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← TOPへ戻る</Link>
        </div>
      )}
    </div>
  );
}