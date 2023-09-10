// Metaデータなど
import Head from 'next/head';
// CSSデザインファイル
import Layout from '/components/layout';
import utilStyles from '/styles/utils.module.css';
// 作成ライブラリから利用する関数のみをimport (これは利用可能なAPIデータ取得系のHelper)
import { getAllPostIds, getPostData } from '/lib/posts';
// 自作のコンポーネント（コンポーネントはUIパーツの事でDecoratorの様なもの）
import Date from '/components/date';

// Step1: ここから実行されていく。
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>投稿日：<Date dateString={postData.date} /></div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

// getStaticPaths と getStaticProps はデフォルト定義の関数であり、自動的に呼ばれる
// 用途がそもそも決まっているメソッドなので、いい感じに動いてくれるのである、フレームワークの機能なので覚えよう。

// Step2: 非同期でアクセス可能なID一覧を取得し、なかった時は fallback で 404 がレンダリングされる
// ビルドした時に静的なファイルとしてページ分のマークダウン記事を用意しておく必要がある。
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return { paths, fallback: false };
}

// Step3: 実際の記事データの取得を行い default function で バインドされている props へと値を return させて再レンダリングさせている
// 実際に記事の内容 非同期で 取得（awaitを利用しているので非同期にしないと表示が遅くなる
export async function getStaticProps({ params }) {
  // データを取得して return する, await を利用して取得されるのを待つ
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

// note: async で取得したデータの読み込みが終わると、自動的に return props と指定することで default function の引数に渡されて再レンダリングされる。

// getAllPostIds や getStaticProps は実はサーバサイドで実行されているので、APIをあえて利用する必要はあまりない？
// これらのメソッドのjsはフロントエンドに配信されることはなく、DBへのアクセスコードなどを記載しても全く問題がない。
