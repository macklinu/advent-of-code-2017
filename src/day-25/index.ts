type State = [value: number, move: number, newState: string]

interface Input {
  initialState: string
  steps: number
  states: Record<string, [State, State]>
}

export function calculateDiagnosticChecksum({
  initialState,
  steps,
  states,
}: Input): number {
  let tape: Record<string, number> = {}
  let cursor = 0
  let state = initialState

  for (let i = 0; i < steps; i++) {
    let [val, move, newState] = states[state][tape[cursor] || 0]
    tape[cursor] = val
    cursor += move
    state = newState
  }

  return Object.values(tape).filter((n) => n === 1).length
}
