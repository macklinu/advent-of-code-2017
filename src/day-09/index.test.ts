import { calculateScore } from './'
import puzzleInput from './puzzleInput'

test('solves part 1', () => {
  expect(calculateScore('{}')).toBe(1)
  expect(calculateScore('{{{}}}')).toBe(6)
  expect(calculateScore('{{},{}}')).toBe(5)
  expect(calculateScore('{{{},{},{{}}}}')).toBe(16)
  expect(calculateScore('{<a>,<a>,<a>,<a>}')).toBe(1)
  expect(calculateScore('{{<ab>},{<ab>},{<ab>},{<ab>}}')).toBe(9)
  expect(calculateScore('{{<!!>},{<!!>},{<!!>},{<!!>}}')).toBe(9)
  expect(calculateScore('{{<a!>},{<a!>},{<a!>},{<ab>}}')).toBe(3)

  expect(calculateScore(puzzleInput)).toBe(10616)
})
