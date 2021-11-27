export function calculateSeverity(input: string): number {
  let map = input
    .split('\n')
    .filter(Boolean)
    .map((str) => str.split(': '))
    .reduce((obj, [depth, range]) => {
      obj[depth] = Number(range)
      return obj
    }, {} as { [depth: string]: number })

  let maxKey = Math.max.apply(Math, Object.keys(map).map(Number))
  let range = [...Array(maxKey + 1).keys()]
  return range.reduce((sum, depth) => {
    let range = map[depth]
    // Ignore layers in which you do not get caught.
    if (map[depth] === undefined) {
      return sum
    }
    let scannerPosition = depth % (2 * (range - 1))
    return scannerPosition === 0 ? sum + range * depth : sum
  }, 0)
}
