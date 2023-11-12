import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// マークダウンパーサ
import { remark } from 'remark';
import html from 'remark-html';

import { ArticleListProps } from '../types/ArticleListProps'
import { ArticleProps } from '../types/ArticleProps';

const postsDirectory = path.join(process.cwd(), 'posts');

// 特定ディレクトリの内容を map 形式で返している
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

// 記事データ（一覧）取得
export function getSortedPostsData(): ArticleListProps {
  const fileNames = fs.readdirSync(postsDirectory);
  const articles = fileNames.map(parseMarkdownFile);

  const sortedPostsData: ArticleListProps = {
    articles: articles.sort((a, b) => (a.date < b.date ? 1 : -1)),
  };

  return sortedPostsData;
}

// 記事データ（単体）の取得
export function getPostData(id: string): ArticleProps {
  return parseMarkdownFile(`${id}.md`);
}

// マークダウンファイルのパース
function parseMarkdownFile(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const article = matter(fileContents);
  const contentHtml = remark().use(html).processSync(article.content).toString();

  return {
    id: fileName.replace(/\.md$/, ''),
    contentHtml: contentHtml,
    title: article.data.title,
    date: article.data.date,
    tags: article.data.tags,
    author: article.data.author,
    slide: article.data.slide,
  };
}