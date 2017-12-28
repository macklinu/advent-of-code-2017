import { createProgram } from './'
import puzzleInput from './puzzleInput'

let exampleInput = 's1,x3/4,pe/b'

test('solves part 1', () => {
  let example = createProgram({ program: 'abcde' })
  expect(example(exampleInput)).toBe('baedc')

  let puzzle = createProgram()
  expect(puzzle(puzzleInput)).toBe('padheomkgjfnblic')
})

test('solves part 2', () => {
  let example = createProgram({ program: 'abcde', times: 2 })
  expect(example(exampleInput)).toBe('ceadb')

  let puzzle = createProgram({ times: 1000000000 })
  expect(puzzle(puzzleInput)).toBe('bfcdeakhijmlgopn')
})
