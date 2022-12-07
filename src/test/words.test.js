import '@testing-library/jest-dom'
import words from '../words'
import asciiWords from '../words'

it('split tring of words into an array', () => { 
    expect(words('potato, tomato, & cucumber')).toEqual(['potato', 'tomato', 'cucumber'])
});

it('split string of words and special characters into an array', () => { 
    expect(words("potato...tomato()cucumber??")).toEqual(['potato', 'tomato', 'cucumber'])
});

it('string of words without separators into an array of size 1', () => { 
    expect(words("Potatotomatocucumber")).toEqual(['Potatotomatocucumber'])
});

it('empty string into an empty array', () => { 
    expect(words('')).toEqual([])
});

it('string with only special characters into an empty array', () => { 
    expect(words('!!!!, ????, |||')).toEqual([])
});

it('string to match an undefined pattern', () => { 
    expect(words('potato', undefined)).toEqual(['potato'])
});

it('string matching a pattern', () => { 
    expect(words('potato, tomato, & cucumber', /[^, ]+/g)).toEqual(['potato', 'tomato', '&', 'cucumber'])
});

it('string not matching a pattern', () => { 
    expect(words('potato', /tomato/g)).toEqual([])
});
