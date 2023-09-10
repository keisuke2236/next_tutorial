import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}


// 動的なページの種類をこれで取得
// ビルドした時に静的なファイルとして用意しておく必要がある。

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// 実際に記事の内容を取得
export async function getStaticProps({ params }) {
  // データを取得して return する。
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}