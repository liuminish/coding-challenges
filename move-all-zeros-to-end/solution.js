const moveZeroes = (arr) => {
  // Write solution here
  let indexes = []
  let allZeros = []
  arr.reduce((acc, curr, currIndex) => {
    if (curr === 0) {
      indexes.push(currIndex)
      allZeros.push(0)
    }
  }, 0)

  indexes.reverse().reduce((acc, curr) => {
    arr.splice(curr, 1)
  }, 0)

  return arr.concat(allZeros)
}


export default moveZeroes
