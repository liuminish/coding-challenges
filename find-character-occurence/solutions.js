const findCharacterOccurence = (string, char) => {
  const arr = string.split('')
  let count = 0
  arr.reduce((acc, curr) => {
    if (curr === char) {
        count = count + 1
    }
  }, 0)

  return count;
}


export default findCharacterOccurence
