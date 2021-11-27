export function countMultiplyInstructions(input: string): number {
  let instructions = input.split('\n').filter(Boolean)

  let map: Record<string, number> = {}
  let index = 0
  let multiplyCount = 0
  let instruction: string

  while ((instruction = instructions[index]) !== undefined) {
    let [type, x, y] = instruction.split(' ')
    switch (type) {
      case 'set':
        set(map, x, y)
        index++
        break
      case 'sub':
        sub(map, x, y)
        index++
        break
      case 'mul':
        mul(map, x, y)
        index++
        multiplyCount++
        break
      case 'jnz':
        index += jnz(map, x, y)
        break
    }
  }

  return multiplyCount
}

function get(map: Record<string, number>, register: string): number {
  let v = Number(register)
  return Number.isNaN(v) ? map[register] || 0 : v
}

function set(map: Record<string, number>, x: string, y: string): void {
  map[x] = get(map, y)
}

function sub(map: Record<string, number>, x: string, y: string): void {
  map[x] = (map[x] || 0) - get(map, y)
}

function mul(map: Record<string, number>, x: string, y: string): void {
  map[x] = (map[x] || 0) * get(map, y)
}

function jnz(map: Record<string, number>, x: string, y: string): number {
  let val = get(map, x)
  return val === 0 ? 1 : get(map, y)
}
