'use client'

import React, { useState, useEffect } from 'react'
import Date from './date'
// import Tags from './Tags'
import utilStyles from '../styles/utils.module.scss'
import { fetchRailsArticle } from '../lib/rails'
import { type ArticleProps } from '../types/ArticleProps'

export default function RailsArticle (): React.JSX.Element {
  const [postData, setPostData] = useState<ArticleProps | null>(null)

  useEffect(() => {
    const slug = window.location.pathname.split('/').pop()
    if (slug === undefined) {
      throw new Error('slug is undefined')
    }

    fetchRailsArticle(slug)
      .then(data => {
        setPostData(data)
      })
      .catch(error => {
        console.error('記事データを取得できませんでした:', error)
      })
  }, []) // params.slugの変更を検知

  if (postData === null) {
    return <div>Loading...</div> // データがまだない場合の処理
  }

  return (
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>投稿日：<Date dateString={postData.date} /></div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  )
}
