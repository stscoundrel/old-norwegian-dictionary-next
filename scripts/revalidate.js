const WORDS = 42021

let start = 0

// Url for localhost: http://127.0.1:3000

const revalidatePages = async (secret, baseUrl = 'https://old-norwegian-dictionary.vercel.app/') => {
  try {
    const retrys = []
    while (start < WORDS) {
      const end = start + 250
      const url = `${baseUrl}/api/revalidate?secret=${secret}&start=${start}&end=${end}`
      console.time('Time')
      // eslint-disable-next-line no-await-in-loop
      const result = await fetch(url)

      if (result.status === 200) {
        console.log(`OK ${result.status}: Finished words ${start} - ${end}`)
      } else {
        console.log(`FAIL ${result.status}: Failed words ${start} - ${end}! Adding to retrys...`)
        retrys.push([start, end])
      }
      console.timeEnd('Time')
      start = end
    }

    if (retrys.length > 0) {
      console.log('Starting retrys:')

      // Do one round of retries. Usually enough, as timeouts are already rare-ish.
      for (let i = 0; i < retrys.length; i += 1) {
        const [retryStart, retryEnd] = retrys[i]
        const url = `${baseUrl}/api/revalidate?secret=${secret}&start=${retryStart}&end=${retryEnd}`
        console.time(`${retryStart} - ${retryEnd}`)
        // eslint-disable-next-line no-await-in-loop
        const result = await fetch(url)
        if (result.status === 200) {
          console.log('Succesfull retry :)')
        } else {
          console.log('Failed retry :(')
        }
        console.timeEnd(`${retryStart} - ${retryEnd}`)
      }
    }
  } catch (e) {
    console.log(e)
  }
}

const args = process.argv;
const secret = args[2];
const baseUrl = args[3];

revalidatePages(secret, baseUrl)
