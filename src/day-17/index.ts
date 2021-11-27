export function spinlock(stepSize: number): number {
  let position = 0
  let arr = [0]
  for (let i = 1; i <= 2017; i++) {
    position = ((position + stepSize) % i) + 1
    arr.splice(position, 0, i)
  }
  return arr[position + 1]
}
