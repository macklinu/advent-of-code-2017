import { spinlock } from './'

test('solves part 1', () => {
  expect(spinlock(3)).toBe(638)
  expect(spinlock(343)).toBe(1914)
})
