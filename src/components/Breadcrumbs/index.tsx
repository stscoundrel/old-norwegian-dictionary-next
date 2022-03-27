import { ContentType } from 'lib/models/content-types'
import { getBreadcrumbs } from 'lib/utils/breadcrumbs'
import { getSchema } from 'lib/utils/schema'
import Link from 'next/link'
import { DictionaryEntry } from 'lib/models/dictionary'
import styles from './Breadcrumbs.module.scss'

interface BreadcrumbProps{
  type: ContentType,
  content: DictionaryEntry | DictionaryEntry[] | null
}

export default function Breadcrumbs({ type, content }: BreadcrumbProps) {
  const getBreadCrumbData = () => {
    let letter: string | null = null
    let word: string | null = null

    if (content) {
      if (type !== ContentType.Page) {
        if (type === ContentType.Letter && Array.isArray(content)) {
          letter = content[0].word.charAt(0).toLowerCase()
        }

        if (type !== ContentType.Letter && !Array.isArray(content)) {
          letter = content.word.charAt(0).toLowerCase()
        }
      }

      if (type === ContentType.Word && !Array.isArray(content)) {
        word = content.word
      }
    }

    return {
      type,
      letter,
      word,
    }
  }

  const breadcrumbs = getBreadcrumbs(getBreadCrumbData())
  const schema = getSchema(breadcrumbs, ContentType.Breadcrumbs)

  return (
    <nav className={styles.section}>
      <div className="container">
        {breadcrumbs.map(({ label, url }) => (
          <Link key={url} href={url}>
            <a className={styles.link}>{label}</a>
          </Link>
        ))}

        <script type='application/ld+json' dangerouslySetInnerHTML={ { __html: schema } }/>
      </div>
    </nav>
  )
}
