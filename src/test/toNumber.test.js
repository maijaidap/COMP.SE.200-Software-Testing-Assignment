import '@testing-library/jest-dom'
import toNumber from '../toNumber'

it('toNumber with number and string formatted number', () => { 
    expect(toNumber(1.1)).toBe(1.1)
    expect(toNumber("1.1")).toBe(1.1)
    expect(toNumber('5e-324')).toBe(5e-324)
});

it('toNUmber with MIN and MAX-values', () => {
    expect(toNumber(Number.MIN_VALUE)).toBe(5e-324)
    expect(toNumber(Number.MAX_VALUE)).toBe(1.7976931348623157e+308)
    expect(toNumber('Infinity')).toBe(Infinity) 
})

it('toNumber with NaN', () => {
    expect(toNumber(NaN)).toBe(NaN)
    expect(toNumber("xxx")).toBe(NaN)
    expect(toNumber("--")).toBe(NaN)
    expect(toNumber(Symbol("xxx"))).toBe(NaN)
    expect(toNumber(0/0)).toBe(NaN)
    expect(toNumber(undefined)).toBe(NaN)
});

it('toNumber with whitespace', () => {
    expect(toNumber(" 2")).toBe(2)
    expect(toNumber("2  ")).toBe(2)
});

it('toNumber with binary string values', () => {
    expect(toNumber("0b101")).toBe(5)
});

it('toNumber with bad signed hexadecimals', () => {
    expect(toNumber("0xC")).toBe(12)
    expect(toNumber("0xG")).toBe(NaN)
});

it('toNumber with octal string values', () => {
    expect(toNumber("02")).toBe(2)
});

it('toNumber with Objects and Functions', () => {
    expect(toNumber(Function('abc'))).toBe(NaN)
    expect(toNumber(Object('abc'))).toBe(NaN)
});
