import findCharOccurence from './solutions'

describe.only('#find-character-occurence', () => {
  it('should get the number of times the character appeared in the string', () => {
    expect(findCharOccurence('oh heavens', 'h')).toEqual(2)
    expect(findCharOccurence('really don\'t want to gear up and eat a bear', 'r')).toEqual(3)
    expect(findCharOccurence('yowwww', 'a')).toEqual(0)
    expect(findCharOccurence('yowwww', 'a')).toEqual(0)
  })
})
