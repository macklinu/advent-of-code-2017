import { numSteps, maxDistance } from './'
import puzzleInput from './puzzleInput'

test('solves part 1', () => {
  expect(numSteps('ne,ne,ne')).toBe(3)
  expect(numSteps('ne,ne,sw,sw')).toBe(0)
  expect(numSteps('ne,ne,s,s')).toBe(2)
  expect(numSteps('se,sw,se,sw,sw')).toBe(3)

  expect(numSteps(puzzleInput)).toBe(682)
})

test('solves part 2', () => {
  expect(maxDistance(puzzleInput)).toBe(1406)
})
