import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

// 記事データ一覧の読み込み
export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  // 全てのpostデータを変数に格納(即時関数でやるんだ...)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  // 日付順にソートして return
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
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
export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // gray-matter でメタデータを解析
  const matterResult = matter(fileContents);

  // ... はスプレット構文、オブジェクト形を展開することができる。
  return {
    id,
    ...matterResult.data,
  };
}

// getAllPostIdsで入手できる値
// [
//   {
//     params: {
//       id: 'ssg-ssr'
//     }
//   },
//   {
//     params: {
//       id: 'pre-rendering'
//     }
//   }
// ]
