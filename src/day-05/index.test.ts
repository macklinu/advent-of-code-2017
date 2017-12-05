import * as path from 'path'
import { readFile } from '../utils/test'
import { createStepCalculator } from './'

const here = (p: string) => path.join(__dirname, p)

describe('calculateSteps()', () => {
  test('solves part 1', async () => {
    let calculateSteps = createStepCalculator(instructions => {
      let steps = 0
      let offset = 0

      while (offset >= 0 && offset < instructions.length) {
        offset += instructions[offset]++
        steps++
      }

      return steps
    })

    let exampleInput = await readFile(here('part-one-example-input.txt'))
    expect(calculateSteps(exampleInput)).toBe(5)

    let puzzleInput = await readFile(here('puzzle-input.txt'))
    expect(calculateSteps(puzzleInput)).toBe(351282)
  })

  test('solves part 2', async () => {
    let calculateSteps = createStepCalculator(instructions => {
      let steps = 0
      let offset = 0

      while (offset >= 0 && offset < instructions.length) {
        let offsetCopy = offset
        offset += instructions[offset]
        instructions[offsetCopy] += instructions[offsetCopy] >= 3 ? -1 : 1
        steps++
      }

      return steps
    })

    let exampleInput = await readFile(here('part-one-example-input.txt'))
    expect(calculateSteps(exampleInput)).toBe(10)

    let puzzleInput = await readFile(here('puzzle-input.txt'))
    expect(calculateSteps(puzzleInput)).toBe(24568703)
  })
})
