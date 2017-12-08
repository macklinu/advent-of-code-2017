import puzzleInput from './puzzleInput'
import { processRegisters } from './'

test('solves part 1', () => {
  let exampleInput = `
	b inc 5 if a > 1
	a inc 1 if b < 5
	c dec -10 if a >= 1
	c inc -20 if c == 10`
  expect(processRegisters(exampleInput)).toBe(1)

  expect(processRegisters(puzzleInput)).toBe(5075)
})
