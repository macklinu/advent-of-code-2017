import * as path from 'path'
import { readFile } from '../utils/test'
import { createChecksumCalculator } from './'

const here = (p: string) => path.join(__dirname, p)

describe('calculateChecksum()', () => {
  test('solves part 1', async () => {
    let calculateChecksum = createChecksumCalculator(
      (sum: number, array: Array<number>): number => {
        let max = Math.max.apply(null, array)
        let min = Math.min.apply(null, array)
        return sum + (max - min)
      }
    )

    let exampleInput = await readFile(here('part-one-example-input.txt'))
    let puzzleInput = await readFile(here('puzzle-input.txt'))
    expect(calculateChecksum(exampleInput)).toBe(18)
    expect(calculateChecksum(puzzleInput)).toBe(47136)
  })

  test('solves part 2', async () => {
    let calculateChecksum = createChecksumCalculator(
      (sum: number, array: Array<number>): number => {
        return (
          sum +
          array.reduce((prev, curr, i, arr) => {
            let divisor = arr.filter(v => v !== curr).find(v => curr % v === 0)
            return divisor ? prev + curr / divisor : prev
          }, 0)
        )
      }
    )

    let exampleInput = await readFile(here('part-two-example-input.txt'))
    let puzzleInput = await readFile(here('puzzle-input.txt'))
    expect(calculateChecksum(exampleInput)).toBe(9)
    expect(calculateChecksum(puzzleInput)).toBe(250)
  })
})
