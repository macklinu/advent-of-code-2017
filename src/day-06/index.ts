export function calculateRedistributionCycles(input: string): number {
  let { count } = calculate(toNumberArray(input))
  return count
}

export function cyclesInInfiniteLoop(input: string): number {
  let { arr } = calculate(toNumberArray(input))
  let { count } = calculate(arr)
  return count
}

function toNumberArray(input: string): number[] {
  return input.split('\t').map(Number)
}

function calculate(arr: number[]): { count: number; arr: number[] } {
  let set = new Set()
  let count = 0

  while (!set.has(stringify(arr))) {
    set.add(stringify(arr))
    arr = redistribute(arr)
    count++
  }

  return { count, arr }
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
