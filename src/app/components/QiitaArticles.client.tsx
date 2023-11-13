'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Date from './date';
import Tags from './Tags';
import utilStyles from '../styles/utils.module.scss';
import { fetchQiitaArticles } from '../lib/qiita';
import { ArticleProps } from '../types/ArticleProps';

export default function QiitaArticles() {
  const [articles, setArticles] = useState<ArticleProps[]>([]);

  useEffect(() => {
    fetchQiitaArticles().then(data => setArticles(data.articles));
  }, []);

  return (
    <ul className={utilStyles.list}>
      {articles.map((article) => (
        <li className={utilStyles.listItem} key={article.id}>
          <Link href={`/qiita_articles/${article.id}`}>{article.title}</Link>
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={article.date} /> by {article.author}
            <Tags tags={article.tags} />
          </small>
        </li>
      ))}
    </ul>
  );
}
