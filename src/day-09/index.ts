export function calculateScore(input: string): number {
  let sanitized = input.replace(/([!])./g, '').replace(/(<.*?>)/g, '')

  let depth = 0
  let score = 0

  sanitized.split('').forEach((char) => {
    if (char === '{') {
      score += depth + 1
      depth++
    }
    if (char === '}') {
      depth--
    }
  })

  return score
}

export function countGarbage(input: string): number {
  function stripSurroundingCarets(string: string) {
    return string.substring(1, string.length - 1)
  }

  function sumStringLengths(sum: number, string: string): number {
    return sum + string.length
  }

  let sanitized = input.replace(/([!])./g, '')
  let match = sanitized.match(/<(.*?)>/g)

  return match
    ? match.map(stripSurroundingCarets).reduce(sumStringLengths, 0)
    : 0
}
