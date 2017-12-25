import { calculateDiagnosticChecksum } from './'

test('solves part 1', () => {
  expect(
    calculateDiagnosticChecksum({
      initialState: 'a',
      steps: 6,
      states: {
        a: [[1, 1, 'b'], [0, -1, 'b']],
        b: [[1, -1, 'a'], [1, 1, 'a']],
      },
    })
  ).toBe(3)

  expect(
    calculateDiagnosticChecksum({
      initialState: 'a',
      steps: 12302209,
      states: {
        a: [[1, 1, 'b'], [0, -1, 'd']],
        b: [[1, 1, 'c'], [0, 1, 'f']],
        c: [[1, -1, 'c'], [1, -1, 'a']],
        d: [[0, -1, 'e'], [1, 1, 'a']],
        e: [[1, -1, 'a'], [0, 1, 'b']],
        f: [[0, 1, 'c'], [0, 1, 'e']],
      },
    })
  ).toBe(633)
})
