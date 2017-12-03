// @flow

function createInverseCaptchaSolver(
  nextItemPredicate: (index: number, length: number) => number
) {
  return function(input: string) {
    let numbers = input.split('').map(n => parseInt(n, 10))
    let length = numbers.length
    return numbers.reduce((prev, curr, index) => {
      let nextItem = numbers[nextItemPredicate(index, length)]
      return curr == nextItem ? prev + curr : prev
    }, 0)
  }
}

module.exports = createInverseCaptchaSolver
