'use client'

import React, { useState, useEffect } from 'react';
import Date from './date';
import Tags from './Tags';
import utilStyles from '../styles/utils.module.scss';
import { fetchQiitaArticle } from '../lib/qiita';
import { ArticleProps } from '../types/ArticleProps';

export default function QiitaArticle() {
  const [postData, setPostData] = useState<ArticleProps | null>(null);
  const slug = window.location.pathname.split('/').pop();

  if (slug === undefined) {
    throw new Error('slug is undefined');
  }

  useEffect(() => {
    fetchQiitaArticle(slug)
      .then(data => {
        // ここで返されたデータをpostDataにセット
        setPostData(data);
      })
      .catch(error => {
        console.error("Error fetching article:", error);
      });
  }, [slug]); // params.slugの変更を検知

  if (!postData) {
    return <div>Loading...</div>; // データがまだない場合の処理
  }

  return (
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>投稿日：<Date dateString={postData.date} /></div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
