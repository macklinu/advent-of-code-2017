import puzzleInput from './puzzleInput'
import { findBottomProgram, determineWeightToBalanceTower } from './'

let exampleInput = `pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)`

test('solves part 1', () => {
  expect(findBottomProgram(exampleInput)).toBe('tknk')
  expect(findBottomProgram(puzzleInput)).toBe('svugo')
})

test.skip('solves part 2', () => {
  expect(determineWeightToBalanceTower(exampleInput)).toBe(60)
})
