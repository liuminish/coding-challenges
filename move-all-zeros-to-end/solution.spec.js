import solution from './solution'

describe('#move-all-zeroes-to-end', () => {
  const arr = [1, 2, 0, 1, 0, 0, 3, 6]
  const expected = [1, 2, 1, 3, 6, 0, 0, 0]
  const arr2 = [-1, 0, 6, 0, 0, 8, -5, 0]
  const expected2 = [-1, 6, 8, -5, 0, 0, 0, 0]

  it('#should be able to move all the zeroes to the end of the array', () => {
    expect(solution(arr)).toEqual(expected)
    expect(solution(arr2)).toEqual(expected2)
  })
})
