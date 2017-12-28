import { createProgram } from './'
import puzzleInput from './puzzleInput'

let exampleInput = 's1,x3/4,pe/b'

test('solves part 1', () => {
  let example = createProgram('abcde')
  expect(example(exampleInput)).toBe('baedc')

  let puzzle = createProgram()
  expect(puzzle(puzzleInput)).toBe('padheomkgjfnblic')
})
