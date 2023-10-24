import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

import Link from 'next/link';
import Date from '../components/date';
import Tags from '../components/Tags';

import { GetStaticProps } from 'next';
import { ArticleListProps  } from '../types/ArticleListProps';
import { ArticleProps } from '../types/ArticleProps';

export const getStaticProps: GetStaticProps = async (context) => {
  const allData = getSortedPostsData();
  return {
    props: {
      articleList: allData.articleList,
    },
  };
}

export default function Home({ articleList }: ArticleListProps) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>記事一覧</h2>
        <ul className={utilStyles.list}>
          {articleList.map((article: ArticleProps) => (
            <li className={utilStyles.listItem} key={article.id}>
              <Link href={`/posts/${article.id}`}>{article.title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={article.date} /> by {article.author}
                <Tags tags={article.tags} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}