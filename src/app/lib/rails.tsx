import { type ArticleListProps } from '../types/ArticleListProps'
import { type ArticleProps } from '../types/ArticleProps'

// Rails APIからのレスポンスデータ型
interface RailsArticle {
  id: string
  contentHtml: string
  created_at: string
  likes_count: number
  tags: string
  title: string
  url: string
  page_views_count: number
  slide?: boolean
}

// Railsの記事データをArticleProps型に変換する関数
function convertToArticleProps (railsArticle: RailsArticle): ArticleProps {
  return {
    id: railsArticle.id,
    title: railsArticle.title,
    date: railsArticle.created_at,
    tags: railsArticle.tags,
    author: 'rorensu2236',
    slide: railsArticle.slide === true ? 'true' : 'false',
    contentHtml: railsArticle.contentHtml
  }
}

// Railsの記事を取得してArticleListProps型に変換する関数
export async function fetchRailsArticles (): Promise<ArticleListProps> {
  const url = 'http://localhost:8080/articles'
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Railsから記事一覧を取得できませんでした。')
  }
  const railsArticles: RailsArticle[] = await response.json()
  return {
    articles: railsArticles.map(convertToArticleProps)
  }
}

// Railsの記事を取得してArticleProps型に変換する関数
export async function fetchRailsArticle (id: string): Promise<ArticleProps> {
  const url = `http://localhost:8080/articles/${id}`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Railsから記事データを取得できませんでした。')
  }
  const railsArticle: RailsArticle = await response.json()
  return convertToArticleProps(railsArticle)
}
