import '@testing-library/jest-dom'
import toNumber from '../toNumber'


it('string and number input should be converted to number', () => { 
    expect(toNumber(1.1)).toBe(1.1)
    expect(toNumber("1.1")).toBe(1.1)
    expect(toNumber('5e-324')).toBe(5e-324)
});

it('MIN-values should be 5e-324, MAX values 1.7976931348623157e+308 and Ininifty Infinity', () => {
    expect(toNumber(Number.MIN_VALUE)).toBe(5e-324)
    expect(toNumber(Number.MAX_VALUE)).toBe(1.7976931348623157e+308)
    expect(toNumber('Infinity')).toBe(Infinity) 
})

it('unaccepted values should result NaN', () => {
    expect(toNumber(NaN)).toBe(NaN)
    expect(toNumber("abc")).toBe(NaN)
    expect(toNumber("--")).toBe(NaN)
    expect(toNumber(0/0)).toBe(NaN)
    expect(toNumber(undefined)).toBe(NaN)
});

it('whitespace before or after in a string with number should result a number', () => {
    expect(toNumber(" 2")).toBe(2)
    expect(toNumber("2  ")).toBe(2)
});

it('binary values should be converted into a number', () => {
    expect(toNumber("0b101")).toBe(5)
    expect(toNumber("0b102")).toBe(NaN)
});

it('signed hexadecimals should be converted into a number', () => {
    expect(toNumber("0xC")).toBe(12)
    expect(toNumber("-0xC")).toBe(NaN)
    expect(toNumber("0xFF")).toBe(255)
    expect(toNumber("0xG")).toBe(NaN)
    expect(toNumber("0xQQ")).toBe(NaN)
});

it('octal string values should be converted into a number', () => {
    expect(toNumber("0o2")).toBe(2)
    expect(toNumber("0o9")).toBe(NaN)
});

it('Objects, Functions and Symbols should return NaN', () => {
    expect(toNumber(Function('abc'))).toBe(NaN)
    expect(toNumber(Object('abc'))).toBe(NaN)
    expect(toNumber(Symbol("abc"))).toBe(NaN)
    
});
