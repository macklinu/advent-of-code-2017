import * as path from 'path'
import { puzzleSolver } from './'
import { readFile } from '../utils/test'

test('solves part 1 example', async () => {
  let exampleInput = await readFile(path.join(__dirname, 'example-input.txt'))
  expect(puzzleSolver(exampleInput)).toBe('ABCDEF')
})

test('solves part 1 puzzle', async () => {
  let puzzleInput = await readFile(path.join(__dirname, 'puzzle-input.txt'))
  expect(puzzleSolver(puzzleInput)).toBe('BPDKCZWHGT')
})
