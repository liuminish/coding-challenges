const pigLatin = (word) => {
    let vowels = ['a','e','i','o','u','A','E','I','O','U']
    let end = 'ay'
    let mid = []
    let indexes = []

    const arr = word.split('')

    for (let i = 0; i < arr.length; i++) {
        let char = arr[i]
        let found = vowels.find(vowel => vowel === char)

        if (found && i === 0) {
            mid.push('y')
            break;
        } else if (!found) {
            indexes.push(i)
            mid.push(char)
        } else {
            break;
        }
        
    }

    indexes.reverse().forEach(index => {
        arr.splice(index, 1)
    })

    return arr.join('').concat(mid.join(''),end)
}

export default pigLatin
