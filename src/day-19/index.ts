export function puzzleSolver(input: string): {
  characters: string
  steps: number
} {
  let maze = input
    .split('\n')
    .filter(Boolean)
    .map((str) => str.split(''))

  let steps = 0
  let found: string[] = []
  let char = '|'
  let position = new Vector(
    maze[0].findIndex((c) => c === '|'),
    0
  )
  let direction = Direction.Down

  while (char !== ' ') {
    function getCharAtPosition(maze: string[][], { x, y }: Vector): string {
      return (maze[y] !== undefined && maze[y][x]) || ''
    }

    position = position.add(direction)
    char = getCharAtPosition(maze, position)

    if (char === '+') {
      if (direction.equals(Direction.Down) || direction.equals(Direction.Up)) {
        let peekLeft = getCharAtPosition(maze, position.add(Direction.Left))
        direction = peekLeft === ' ' ? Direction.Right : Direction.Left
      } else if (
        direction.equals(Direction.Left) ||
        direction.equals(Direction.Right)
      ) {
        let peekUp = getCharAtPosition(maze, position.add(Direction.Up))
        direction = peekUp === ' ' ? Direction.Down : Direction.Up
      }
    }
    if (char.match(/[A-Z]/)) {
      found.push(char)
    }

    steps++
  }

  return { characters: found.join(''), steps }
}

class Vector {
  constructor(public readonly x: number, public readonly y: number) {}

  public add({ x, y }: Vector): Vector {
    return new Vector(this.x + x, this.y + y)
  }

  public equals({ x, y }: Vector): boolean {
    return this.x === x && this.y === y
  }
}

let Direction = {
  Up: new Vector(0, -1),
  Down: new Vector(0, 1),
  Left: new Vector(-1, 0),
  Right: new Vector(1, 0),
}
