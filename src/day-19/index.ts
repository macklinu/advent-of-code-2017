import { watch } from 'fs'

type Maze = string[][]
type Char = ' ' | '+' | '-' | '|' | string

const STARTING_CHAR = '|'

export function puzzleSolver(input: string): string {
  let maze = input
    .split('\n')
    .filter(Boolean)
    .map(str => str.split(''))

  let found: string[] = []
  let char = STARTING_CHAR
  let position = new Vector(maze[0].findIndex(c => c === STARTING_CHAR), 0)
  let direction = Direction.Down

  while (char !== ' ') {
    function getCharAtPosition(maze: Maze, { x, y }: Vector): Char {
      return (maze[y] !== undefined && (maze[y][x] as Char)) || ''
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
  }

  return found.join('')
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
