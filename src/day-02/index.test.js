// @flow

const fs = require('fs')
const path = require('path')
const util = require('util')

const createChecksumCalculator = require('./')

async function getInput(filename: string): Promise<string> {
  const readFile = util.promisify(fs.readFile)
  return await readFile(path.join(__dirname, filename), 'utf8')
}

describe('calculateChecksum()', () => {
  test('solves part 1', async () => {
    let calculateChecksum = createChecksumCalculator(
      (sum: number, array: Array<number>): number => {
        let max = Math.max.apply(null, array)
        let min = Math.min.apply(null, array)
        return sum + (max - min)
      }
    )

    let exampleInput = await getInput('part-one-example-input.txt')
    let puzzleInput = await getInput('puzzle-input.txt')
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

    let exampleInput = await getInput('part-two-example-input.txt')
    let puzzleInput = await getInput('puzzle-input.txt')
    expect(calculateChecksum(exampleInput)).toBe(9)
    expect(calculateChecksum(puzzleInput)).toBe(250)
  })
})
