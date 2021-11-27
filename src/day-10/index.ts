export function knot(input: string, size: number): number[] {
  let array = [...Array(size).keys()]
  let lengths = input.split(',').map(Number)

  let index = 0
  let skip = 0
  for (let length of lengths) {
    let rotateRight = rotate(index)
    let rotateLeft = rotate(-index)
    let rotatedArray = rotateRight(array)
    array = rotateLeft([
      ...rotatedArray.slice(0, length).reverse(),
      ...rotatedArray.slice(length),
    ])
    index = (index + length + skip) % array.length
    skip++
  }

  return array
}

function rotate(n: number) {
  return function (array: number[]) {
    return array.slice(n, array.length).concat(array.slice(0, n))
  }
}
