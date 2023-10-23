// Qiita記事のデータ型
type BlogPostProps = {
  allPostsData: {
    id: string;
    title: string;
    date: string;
    tags: string[];
    author: string;
    slide: boolean;
  }[];
}
