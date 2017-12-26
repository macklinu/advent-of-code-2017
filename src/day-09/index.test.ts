import { calculateScore, countGarbage } from './'
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

test('solves part 2', () => {
  expect(countGarbage('<>')).toBe(0)
  expect(countGarbage('<random characters>')).toBe(17)
  expect(countGarbage('<<<<>')).toBe(3)
  expect(countGarbage('<{!>}>')).toBe(2)
  expect(countGarbage('<!!>')).toBe(0)
  expect(countGarbage('<!!!>>')).toBe(0)
  expect(countGarbage('<{o"i!a,<{i<a>')).toBe(10)

  expect(countGarbage(puzzleInput)).toBe(5101)
})
