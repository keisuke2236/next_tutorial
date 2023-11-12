import Head from 'next/head';
import utilStyles from './styles/utils.module.css';
import { getSortedPostsData } from './lib/posts';

import Link from 'next/link';
import Date from './components/date';
import Tags from './components/Tags';

import { ArticleListProps  } from './types/ArticleListProps';
import { ArticleProps } from './types/ArticleProps';

export default function Home() {
  const articleList: ArticleListProps = getSortedPostsData();
  return (
    <>
      <Head>
        <title>サイトタイトル</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>記事一覧</h2>
        <ul className={utilStyles.list}>
          {articleList.articles.map((article: ArticleProps) => (
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
    </>
  );
}