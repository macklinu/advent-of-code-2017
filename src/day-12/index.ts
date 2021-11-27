export function howManyGroups(input: string): number {
  let program: Record<string, string[]> = input
    .split('\n')
    .filter(Boolean)
    .reduce((obj, str) => {
      let [id, programs] = str.split(' <-> ')
      return Object.assign(obj, { [id]: programs.split(', ') })
    }, {})

  function traverse(nodes: string[], set: Set<string>): Set<string> {
    return nodes.reduce((set, node) => {
      let programNodes = program[node]
      let notInTheSet = programNodes.filter((n) => !set.has(n))
      notInTheSet.forEach((n) => {
        set.add(n)
      })
      return traverse(notInTheSet, set)
    }, set)
  }

  let set = traverse(program['0'], new Set('0'))

  return set.size
}
