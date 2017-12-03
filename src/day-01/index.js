function inverseCaptcha(input) {
  let numbers = input.split('').map(n => parseInt(n, 10))
  let length = numbers.length
  return numbers.reduce((prev, curr, index) => {
    let nextItem = numbers[(index + 1) % length]
    if (curr == nextItem) {
      return prev + curr
    }
    return prev
  }, 0)
}

module.exports = inverseCaptcha
