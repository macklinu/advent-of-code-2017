import * as path from 'path'
import { puzzleSolver } from './'
import { readFile } from '../utils/test'

test('solves part 1 example', async () => {
  let exampleInput = await readFile(path.join(__dirname, 'example-input.txt'))
  expect(puzzleSolver(exampleInput).characters).toBe('ABCDEF')

  let puzzleInput = await readFile(path.join(__dirname, 'puzzle-input.txt'))
  expect(puzzleSolver(puzzleInput).characters).toBe('BPDKCZWHGT')
})

test('solves part 2', async () => {
  let exampleInput = await readFile(path.join(__dirname, 'example-input.txt'))
  expect(puzzleSolver(exampleInput).steps).toBe(38)

  let puzzleInput = await readFile(path.join(__dirname, 'puzzle-input.txt'))
  expect(puzzleSolver(puzzleInput).steps).toBe(17728)
})
