import ExternalLink from 'components/ExternalLink'
import LetterLink from 'components/LetterLink'
import ContentArea from 'components/ContentArea'
import { AlphabetLetter } from 'lib/services/dictionary'
import styles from './Footer.module.scss'

interface FooterProps{
  letters: AlphabetLetter[]
}

export default function Footer({ letters }: FooterProps) {
  return (
    <footer className={styles.section}>
      <div className="container">

        <ContentArea>
          <h2>About</h2>
          <p>Based on &quot;Dictionary of the Old Norwegian Language.&quot;</p>
          <p>Its is the largest Old Norse to Norwegian dictionary,
            containing over 40 000 word definitions.
            While the original dictionary is called dictionary of &quot;Old Norwegian&quot;,
            it is practically a dictionary of western Old Norse.
            Technically &quot;Old Norwegian&quot; would be a later stage in the language.</p>
          <p>It was published in 1800s,
          which leads to there being public domain versions of the book available.</p>
        </ContentArea>

        <ContentArea>
          <h4>Old Norwegian language</h4>
          <p>Old Norwegian is a early form of Norwegian language
            that was used from 11th to 14th century. It developed from
            Old West Norse.
          </p>

          <p>Also known as &quot;Norwegian Norse&quot;,
            or &quot;gammelnorsk&quot; in modern Norwegian
          </p>
        </ContentArea>

        <ContentArea>
          <h4>Old Norse language</h4>
          <p>Old Norse was a North Germanic language that was spoken by inhabitants of
          Scandinavia and their overseas settlements from about the 7th to the 15th centuries.</p>

          <p>Also known as &quot;the viking language&quot;,
          &quot;Old Nordic&quot;, or
          &quot;Old Scandinavian&quot;</p>
        </ContentArea>

        <div className={styles.navs}>
          <nav className={styles.nav}>
            <h4 className={styles.navTitle}>Dictionary project</h4>
            <ul>
              <li>
                <ExternalLink
                  title="Source code"
                  href="https://github.com/stscoundrel/old-norwegian-dictionary-next"
                />
              </li>
              <li>
                <ExternalLink
                  title="Data source"
                  href="https://github.com/stscoundrel/old-norwegian-dictionary"
                />
              </li>
              <li>
                <ExternalLink
                  title="Abbreviations"
                  href="https://github.com/stscoundrel/old-norwegian-dictionary-abbreviations"
                />
              </li>
            </ul>
          </nav>

          <nav className={styles.nav}>
            <h4 className={styles.navTitle}>Related dictionary projects</h4>
            <ul>
              <li>
                <ExternalLink
                  title="Cleasby and Vigfusson Old Norse Dictionary"
                  href="https://cleasby-vigfusson-dictionary.vercel.app/"
                />
              </li>
              <li>
                <ExternalLink
                  title="A Concise Dictionary of Old Icelandic"
                  href="old-icelandic.vercel.app/"
                />
              </li>
              <li>
                <ExternalLink
                  title="Old Norse Alphabet"
                  href="https://github.com/stscoundrel/old-norse-alphabet"
                />
              </li>
            </ul>
          </nav>

          <nav className={styles.nav}>
            <h4 className={styles.navTitle}>Quick links</h4>
            <ul className={styles.navColumns}>
              {letters.map((entry) => (
                <li className={styles.navColumnItem} key={entry.slug}>
                  <LetterLink letter={entry} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <small className={styles.copyright}>{`Copyright © 2022 - ${new Date().getFullYear()}`}
          <br />
          <ExternalLink
            title="Sampo Silvennoinen / StScoundrel"
            href="https://github.com/stscoundrel"
          />
        </small>
      </div>
    </footer>
  )
}
