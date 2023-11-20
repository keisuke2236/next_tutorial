'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Date from './date'
import Tags from './Tags'
import utilStyles from '../styles/utils.module.scss'
import { fetchRailsArticles } from '../lib/rails'
import { type ArticleProps } from '../types/ArticleProps'

export default function RailsArticles (): JSX.Element {
  const [articles, setArticles] = useState<ArticleProps[]>([])

  useEffect(() => {
    fetchRailsArticles()
      .then(data => {
        setArticles(data.articles)
      })
      .catch(error => {
        console.error('記事の取得に失敗しました。', error)
      })
  }, [])

  return (
    <ul className={utilStyles.list}>
      {articles.map((article) => (
        <li className={utilStyles.listItem} key={article.id}>
          <Link href={`/rails_articles/${article.id}`} prefetch={false}>{article.title}</Link>
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={article.date} /> by {article.author}
            <Tags tags={article.tags} />
          </small>
        </li>
      ))}
    </ul>
  )
}
