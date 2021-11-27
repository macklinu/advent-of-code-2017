export function createProgram({
  program = 'abcdefghijklmnop',
  times = 1,
} = {}) {
  return function (input: string): string {
    let instructions = input.split(',').filter(Boolean)
    let seed = program
    let memo: string[] = []
    let iterations = 0
    while (iterations < times) {
      seed = instructions.reduce((s, instruction) => {
        return parseInstruction(instruction)(s)
      }, seed)
      if (memo.includes(seed)) {
        return memo[(times % memo.length) - 1]
      }
      memo.push(seed)
      iterations++
    }
    return seed
  }
}

let parseInstruction = (instruction: string) => {
  let firstChar = instruction.charAt(0)
  let rest = instruction.slice(1)
  if (firstChar === 's') {
    return spin(Number(rest))
  }
  if (firstChar === 'x') {
    let [a, b] = rest.split('/').map(Number)
    return exchange(a, b)
  }
  if (firstChar === 'p') {
    let [a, b] = rest.split('/')
    return partner(a, b)
  }
  throw new Error(`Unsupported instruction for char '${firstChar}'`)
}

let spin =
  (x: number) =>
  (s: string): string => {
    return s.slice(s.length - x).concat(s.slice(0, s.length - x))
  }

let exchange =
  (a: number, b: number) =>
  (s: string): string => {
    let chars = s.split('')
    let sa = chars[a]
    let sb = chars[b]
    chars[a] = sb
    chars[b] = sa
    return chars.join('')
  }

let partner =
  (a: string, b: string) =>
  (s: string): string => {
    let chars = s.split('')
    let ia = chars.indexOf(a)
    let ib = chars.indexOf(b)
    chars[ia] = b
    chars[ib] = a
    return chars.join('')
  }
