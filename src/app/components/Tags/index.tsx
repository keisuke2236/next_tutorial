import styles from './Tags.module.scss'
import Link from 'next/link'

interface TagsProps {
  tags: string
}

export default function Tags ({ tags }: TagsProps): JSX.Element {
  return (
    <div className={styles.tags}>
      {tags.split(' ').map((tag) => (
        <Link href={`/tags/${tag}`} key={tag} className={styles.tag} >
          {tag}
        </Link>
      ))}
    </div>
  )
}
