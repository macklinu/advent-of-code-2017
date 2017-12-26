export function calculateScore(input: string): number {
  let sanitized = input.replace(/([!])./g, '').replace(/(<.*?>)/g, '')

  let depth = 0
  let score = 0

  sanitized.split('').forEach(char => {
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
