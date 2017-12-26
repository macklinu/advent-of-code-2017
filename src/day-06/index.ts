export function calculateRedistributionCycles(input: string): number {
  let set = new Set()
  let count = 0
  let arr = input.split('\t').map(Number)

  while (!set.has(stringify(arr))) {
    set.add(stringify(arr))
    arr = redistribute(arr)
    count++
  }

  return count
}

function stringify(arr: number[]): string {
  return arr.join(',')
}

function redistribute(arr: number[]): number[] {
  function next(n: number): number {
    return (n + 1) % arr.length
  }
  let maxIndex = arr.indexOf(Math.max.apply(Math, arr))
  let steps = arr[maxIndex]
  arr[maxIndex] = 0
  let cur = next(maxIndex)
  while (steps > 0) {
    arr[cur]++
    cur = next(cur)
    steps--
  }
  return arr
}
