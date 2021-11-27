class Vector {
  constructor(public readonly x: number, public readonly y: number) {}

  add({ x, y }: Vector) {
    return new Vector(this.x + x, this.y + y)
  }
}

let directionToCoordinate: { [key: string]: Vector } = {
  n: new Vector(0, -1),
  s: new Vector(0, 1),
  ne: new Vector(1, -1),
  nw: new Vector(-1, 0),
  se: new Vector(1, 0),
  sw: new Vector(-1, 1),
}

function manhattanDistance({ x, y }: Vector): number {
  return (Math.abs(x) + Math.abs(y) + Math.abs(x + y)) / 2
}

export function numSteps(input: string): number {
  let directions = input.split(',').filter(Boolean)

  let vector = directions.reduce(
    (vector, direction) => vector.add(directionToCoordinate[direction]),
    new Vector(0, 0)
  )

  return manhattanDistance(vector)
}

export function maxDistance(input: string): number {
  let directions = input.split(',').filter(Boolean)
  let vector = new Vector(0, 0)
  let distances: number[] = []

  directions.forEach((direction) => {
    vector = vector.add(directionToCoordinate[direction])
    distances.push(manhattanDistance(vector))
  })

  return Math.max.apply(Math, distances)
}
