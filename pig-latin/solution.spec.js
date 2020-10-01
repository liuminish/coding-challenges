import pigLatin from './solution'

describe('#pig-latin', () => {
  it('should convert the word to piglatin', () => {
    expect(pigLatin('butler')).toEqual('utlerbay')
    expect(pigLatin('jargon')).toEqual('argonjay')
    expect(pigLatin('floor')).toEqual('oorflay')
    expect(pigLatin('always')).toEqual('alwaysyay')
    expect(pigLatin('dryer')).toEqual('erdryay')
    expect(pigLatin('I')).toEqual('Iyay')
    expect(pigLatin('MAY')).toEqual('AYMay')
  })
})
