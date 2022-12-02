import '@testing-library/jest-dom'
import eq from '../eq'


it('comparing two same strings into each other, should return true', () => { 
    expect(eq('abc', 'abc')).toEqual(true)
});

it('comparing two different strings into each other, should return false', () => { 
    expect(eq('abc', 'cba')).toEqual(false)
});

it('comparing two same objects into each other, should return false', () => { 
    expect(eq({ 'a': 1 }, { 'a': 1 })).toEqual(false)
});

it('comparing two different objects into each other, should return false', () => { 
    expect(eq({ 'a': 1 }, { 'a': 2 })).toEqual(false)
});

it('comparing object into a string, should return false', () => { 
    expect(eq({ 'a': 1 }, 'a')).toEqual(false)
});

it('comparing NaN into NaN, should return true', () => { 
    expect(eq(NaN, NaN)).toEqual(true)
});