import Link from 'next/link'

export default function SampleText() {
  return (
    <>
      <p className="h4">
        A sample of Old Norwegian:
      </p>
      <p>
        <em>
            Magnus <Link href="/word/med">með</Link> <Link href="/word/gud">guðs</Link> <Link href="/word/miskunn">miskun</Link> <Link href="/word/noregr">noregs</Link> <Link href="/word/konungr">konungr</Link> <Link href="/word/son">son</Link> Hakonar <Link href="/word/konungr">konungs</Link> <Link href="/word/sonarsonr">sonar son</Link> Suerris <Link href="/word/konungr">konungs</Link> <Link href="/word/senda">sender</Link> ollum gudes vínum ok sínum j frosto <Link href="/word/thing">þings</Link> <Link href="/word/log">logum</Link>.
            <Link href="/word/kvedja">Qveðju</Link> <Link href="/word/gud">Guðs</Link> <Link href="/word/ok">ok</Link> <Link href="/word/sina">sina</Link> Þer <Link href="/word/vita">vitið</Link> at hínír skynsamozsto menn af frosto <Link href="/word/thing">þings</Link> <Link href="/word/log">logum</Link> <Link href="/word/hafa">hafa</Link> iðurlega
            getet <Link href="/word/firir">firir</Link> <Link href="/word/oss-2">oss</Link> at þer hafet <Link href="/word/spyrja">spurt</Link> at ver
            hofum lut i at t bøta nokot um flæstar <Link href="/word/logbok">logbøkr</Link>.
        </em>
      </p>

      <p>
        - Excerpt from Landslova, written between 1300 and 1320.
      </p>
      <hr />
    </>
  )
}
