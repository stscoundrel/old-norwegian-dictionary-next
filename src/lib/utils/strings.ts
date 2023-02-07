export const capitalize = (
  content: string,
): string => (
  content.charAt(0).toUpperCase() + content.slice(1).toLowerCase()
)

const transformWithMap = (content: string, dictionary: Map<string, string>): string => {
  let result = '';
  const parts: string[] = content.split('');

  parts.forEach((part) => {
    const partKey = part.toLocaleLowerCase();

    if (dictionary.has(partKey)) {
      result += dictionary.get(partKey);
    } else {
      result += part;
    }
  });

  return result;
};

export const getOlderSpelling = (headword: string): string => {
  const NEW_TO_OLD = new Map([
    ['ö', 'ǫ'],
  ])

  return transformWithMap(headword, NEW_TO_OLD);
};
