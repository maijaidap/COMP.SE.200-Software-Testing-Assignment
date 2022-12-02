import '@testing-library/jest-dom'
import capitalize from '../capitalize'

it('string in lower case capitalized', () => { 
    expect(capitalize('abc')).toEqual('Abc')
});

it('string in upper case capitalized', () => { 
    expect(capitalize('ABC')).toEqual('Abc')
});

it('string in camelCase capitalized', () => { 
    expect(capitalize('aBc')).toEqual('Abc')
});

it('array of words capitalized', () => { 
    expect(capitalize('array of words')).toEqual('Array of words')
});
