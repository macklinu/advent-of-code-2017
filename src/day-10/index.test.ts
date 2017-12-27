import { knot } from './'
import puzzleInput from './puzzleInput'

let exampleLengths = `3,4,1,5`

test('solves part 1', () => {
  function productOfFirstTwo(input: string, size: number): number {
    let [first, second] = knot(input, size)
    return first * second
  }
  expect(productOfFirstTwo(exampleLengths, 5)).toBe(12)
  expect(productOfFirstTwo(puzzleInput, 256)).toBe(6909)
})
