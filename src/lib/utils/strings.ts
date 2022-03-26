export const capitalize = (
  content: string,
): string => (
  content.charAt(0).toUpperCase() + content.slice(1).toLowerCase()
)

export const removeHTML = (content: string): string => {
  let filteredContent = content
  if (filteredContent) {
    const removes = ['<strong>', '</strong>', '<i>', '</i>']

    removes.forEach((remove) => {
      filteredContent = filteredContent.replace(new RegExp(remove, 'g'), '')
    })
  }

  return filteredContent
}
