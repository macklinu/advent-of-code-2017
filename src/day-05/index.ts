export function createStepCalculator(
  calculate: (instructions: number[]) => number
) {
  return function(input: string): number {
    let instructions = input
      .split('\n')
      .filter(Boolean)
      .map(Number)

    return calculate(instructions)
  }
}
