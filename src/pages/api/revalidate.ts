import { getAllWords } from 'lib/services/dictionary'
import { getWordPath } from 'lib/utils/links'

export default async function handler(req, res) {
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    const { start, end } = req.query
    const revalidates = getAllWords()
      .sort((a, b) => a.slug.localeCompare(b.slug))
      .map((word) => getWordPath(word))
      .slice(start, end)
      .map((path) => res.revalidate(path))

    await Promise.all(revalidates)

    return res.json({ revalidated: true })
  } catch (err) {
    console.log(err)
    return res.status(500).send('Error revalidating')
  }
}
