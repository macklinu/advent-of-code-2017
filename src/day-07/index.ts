interface Node {
  key: string
  weight: number
  nodes: string[]
}

export function findBottomProgram(input: string): string {
  let nodeMap = buildNodeMap(convertInputToLines(input))

  let trees = Object.values(nodeMap)
  let loneTrees = trees.filter(({ key }) =>
    trees.every(({ nodes }) => !nodes.includes(key))
  )

  return loneTrees[0].key
}

export function determineWeightToBalanceTower(input: string): number {
  let nodeMap = buildNodeMap(convertInputToLines(input))
}

function convertInputToLines(input: string): string[] {
  return input.split('\n').filter(Boolean)
}

function buildNodeMap(lines: string[]): Record<string, Node> {
  return lines.reduce<Record<string, Node>>((obj, str) => {
    let match = str.match(/(\w+) \((\d+)\)(?: -> (.+))?/)
    if (match === null) {
      throw new Error(`Unable to parse input: ${str}`)
    }

    let [, key, weight, nodes] = match
    return {
      ...obj,
      [key]: {
        key,
        weight: Number(weight),
        nodes: nodes ? nodes.split(', ') : [],
      },
    }
  }, {})
}
