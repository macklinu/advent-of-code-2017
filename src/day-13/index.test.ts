import puzzleInput from './puzzleInput'
import { calculateSeverity } from './'

let exampleInput = `0: 3
1: 2
4: 4
6: 4`

test('solves part 1', () => {
  expect(calculateSeverity(exampleInput)).toBe(24)
  expect(calculateSeverity(puzzleInput)).toBe(2604)
})
