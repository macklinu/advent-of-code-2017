import { countMultiplyInstructions } from './'
import puzzleInput from './puzzleInput'

test('solves part 1', () => {
  expect(countMultiplyInstructions(puzzleInput)).toBe(3969)
})
