import { ArticleListProps } from '../types/ArticleListProps';
import { ArticleProps } from '../types/ArticleProps';

// Qiita APIからのレスポンスデータ型
type QiitaArticle = {
  rendered_body: string;
  created_at: string;
  likes_count: number;
  tags: { name: string; versions: string[] }[];
  title: string;
  url: string;
  page_views_count: number;
  slide?: boolean;
};

// Qiitaの記事データをArticleProps型に変換する関数
function convertToArticleProps(qiitaArticle: QiitaArticle): ArticleProps {
  const match = qiitaArticle.url.match(/items\/([a-zA-Z0-9]+)/);
  const id = match ? match[1] : 'not-found';

  return {
    id: id,
    title: qiitaArticle.title,
    date: qiitaArticle.created_at,
    tags: qiitaArticle.tags.map(tag => tag.name).join(', '),
    author: "rorensu2236",
    slide: qiitaArticle.slide ? "true" : undefined,
    contentHtml: qiitaArticle.rendered_body
  };
}

// Qiitaの記事を取得してArticleListProps型に変換する関数
export async function fetchQiitaArticles(): Promise<ArticleListProps> {
  const url = 'https://qiita.com/api/v2/users/rorensu2236/items?page=1&per_page=30';
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Qiitaから記事一覧を取得できませんでした。');
  }
  const qiitaArticles: QiitaArticle[] = await response.json();
  return {
    articles: qiitaArticles.map(convertToArticleProps)
  };
}

// Qiitaの記事を取得してArticleProps型に変換する関数
export async function fetchQiitaArticle(id: string): Promise<ArticleProps> {
  const url = `https://qiita.com/api/v2/items/${id}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Qiitaから記事データを取得できませんでした。');
  }
  const qiitaArticle: QiitaArticle = await response.json();
  return convertToArticleProps(qiitaArticle);
}