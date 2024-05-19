import Link from 'next/link'

export default function SampleText() {
  return (
    <>
      <p className="h4">
        A sample of Old Norwegian:
      </p>
      <p>
        <em>
            Magnus <Link href="/word/med" prefetch={false}>með</Link> <Link href="/word/gud" prefetch={false}>guðs</Link> <Link href="/word/miskunn" prefetch={false}>miskun</Link> <Link href="/word/noregr" prefetch={false}>noregs</Link> <Link href="/word/konungr" prefetch={false}>konungr</Link> <Link href="/word/son" prefetch={false}>son</Link> Hakonar <Link href="/word/konungr" prefetch={false}>konungs</Link> <Link href="/word/sonarsonr" prefetch={false}>sonar son</Link> Suerris <Link href="/word/konungr" prefetch={false}>konungs</Link> <Link href="/word/senda" prefetch={false}>sender</Link> ollum gudes vínum ok sínum j frosto <Link href="/word/thing" prefetch={false}>þings</Link> <Link href="/word/log" prefetch={false}>logum</Link>.
            <Link href="/word/kvedja" prefetch={false}>Qveðju</Link> <Link href="/word/gud" prefetch={false}>Guðs</Link> <Link href="/word/ok" prefetch={false}>ok</Link> <Link href="/word/sina" prefetch={false}>sina</Link> Þer <Link href="/word/vita" prefetch={false}>vitið</Link> at hínír skynsamozsto menn af frosto <Link href="/word/thing" prefetch={false}>þings</Link> <Link href="/word/log" prefetch={false}>logum</Link> <Link href="/word/hafa" prefetch={false}>hafa</Link> iðurlega
            getet <Link href="/word/firir" prefetch={false}>firir</Link> <Link href="/word/oss-2" prefetch={false}>oss</Link> at þer hafet <Link href="/word/spyrja" prefetch={false}>spurt</Link> at ver
            hofum lut i at t bøta nokot um flæstar <Link href="/word/logbok" prefetch={false}>logbøkr</Link>.
        </em>
      </p>

      <p>
        - Excerpt from Landslova, written between 1300 and 1320.
      </p>
      <hr />
    </>
  )
}
