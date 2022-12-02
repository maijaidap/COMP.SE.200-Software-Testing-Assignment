import '@testing-library/jest-dom'
import words from '../words'

it('split tring of words into an array', () => { 
    expect(words('potato, tomato, & cucumber')).toEqual(['potato', 'tomato', 'cucumber'])
});

it('split string of words and special characters into an array', () => { 
    expect(words("potato...tomato()cucumber??")).toEqual(['potato', 'tomato', 'cucumber'])
});

it('string of words without separators into an array of size 1', () => { 
    expect(words("Potatotomatocucumber")).toEqual(['Potatotomatocucumber'])
});

it('word to match an undefined pattern', () => { 
    expect(words('potato', undefined)).toEqual(['potato'])
});

/* TO-DO pattern handling tests */