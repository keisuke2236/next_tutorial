import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// マークダウンパーサ
import { remark } from 'remark';
import html from 'remark-html';

import { ArticleListProps } from '../types/ArticleListProps'
import { ArticleProps } from '../types/ArticleProps';

const postsDirectory = path.join(process.cwd(), 'posts');

function convertToArticle(article: ArticleProps): ArticleProps {
  return {
    id: article.id,
    title: article.title,
    date: article.date,
    tags: article.tags,
    author: article.author,
    slide: article.slide,
  };
}

export function getSortedPostsData(): ArticleListProps {
  const fileNames = fs.readdirSync(postsDirectory);
  const articleList = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
    } as ArticleProps;
  });

  const sortedPostsData: ArticleListProps = {
    articleList: articleList
      .map((article) => convertToArticle(article))
      .sort((a, b) => (a.date < b.date ? 1 : -1)),
  };

  return sortedPostsData;
}

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

// 受け取ったIDに基づいて、posts/以下のデータを見て読み込んで取得する関数
export function getPostData(id: string): ArticleProps {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  // html を SSR
  const processedContent = remark()
    .use(html)
    .processSync(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id: id,
    contentHtml: contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
    tags: matterResult.data.tags,
    author: matterResult.data.author,
    slide: matterResult.data.slide,
  };
}