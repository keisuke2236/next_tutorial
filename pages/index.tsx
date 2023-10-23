import { GetStaticProps } from 'next';
import { BlogPostsProps } from '../types/BlogPostsProps';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Tags from '../components/Tags';


// 非同期でデータをローカルのファイル参照で取得（ビルド時に実行）
// export async function getStaticProps(context) { }

// リクエスト毎にデータをロード
export const getStaticProps: GetStaticProps = async (context) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// 引数は BlogPostsProps のグローバル変数を参照するので、利用したい変数を直接利用できる。
export default function Home({ allPostsData }: BlogPostsProps) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>記事一覧</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, tags, author }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} /> by {author}
                <Tags tags={tags} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}