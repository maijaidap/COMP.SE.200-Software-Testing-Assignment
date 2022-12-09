import '@testing-library/jest-dom'
import toString from '../toString'


test("should return as is if already a string", () => {
   expect(toString("abc")).toEqual('abc');
});

test("should convert array to a string", () => {
    expect(toString(['a', 'b', 'c'])).toEqual('a,b,c');
    expect(toString([null])).toEqual('');
 });

 test("should return symbol as string", () => {
   expect(toString(Symbol('abc'))).toEqual("Symbol(abc)");
 });

 test("should return null and integers as string", () => {
   expect(toString(null)).toEqual('null');
   expect(toString(-0)).toEqual('-0');
   expect(toString(2)).toEqual('2');
 });


