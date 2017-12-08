interface Node {
  key: string
  n: number
  nodes: string[]
}

type MapOf<T> = { [key: string]: T }

export function parseTrees(input: string): string {
  let inputArray = input.split('\n').filter(Boolean)

  let treeMap = inputArray.reduce(
    (obj, str) => {
      let match = str.match(/(\w+) \((\d+)\)(?: -> (.+))?/)
      if (match === null) {
        throw new Error(`Unable to parse input: ${str}`)
      }

      let [, key, n, nodes] = match
      return Object.assign(obj, {
        [key]: {
          key,
          n: Number(n),
          nodes: nodes ? nodes.split(', ') : [],
        },
      })
    },
    {} as MapOf<Node>
  )

  let trees = Object.values(treeMap)

  let loneTrees = trees.filter(({ key }) =>
    trees.every(({ nodes }) => !nodes.includes(key))
  )

  return loneTrees[0].key
}
