import { howManyGroups } from './'
import puzzleInput from './puzzleInput'

let exampleInput = `0 <-> 2
1 <-> 1
2 <-> 0, 3, 4
3 <-> 2, 4
4 <-> 2, 3, 6
5 <-> 6
6 <-> 4, 5`

test('solves part 1', () => {
  expect(howManyGroups(exampleInput)).toBe(6)
  expect(howManyGroups(puzzleInput)).toBe(115)
})
