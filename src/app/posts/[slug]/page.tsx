import Head from 'next/head'
import utilStyles from '../../styles/utils.module.scss'
import Date from '../../components/date'

import { getPostData } from '../../lib/posts'

export default function Article ({ params }: { params: { slug: string } }): JSX.Element {
  const postData = getPostData(params.slug)
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>投稿日：<Date dateString={postData.date} /></div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  )
}
