import { calculateRedistributionCycles } from './'
import puzzleInput from './puzzleInput'

let exampleInput = `0\t2\t7\t0`

test('solves part 1', () => {
  expect(calculateRedistributionCycles(exampleInput)).toBe(5)
  expect(calculateRedistributionCycles(puzzleInput)).toBe(6681)
})
