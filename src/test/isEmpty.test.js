import '@testing-library/jest-dom'
import isEmpty from '../isEmpty'


test("should return as is if already a string", () => {
    expect(isEmpty(null)).not.toBeFalsy;
 });

 test("check array, string, Buffer, TypedArray & arguments",() => {
    expect(isEmpty([1, 2, 3])).toBeFalsy();
    expect(isEmpty('abc')).toBeFalsy();
    expect(isEmpty(Buffer.from('abc'))).toBeFalsy();
    expect(isEmpty(new Int8Array(5))).toBeFalsy();
    expect(isEmpty(function() { return arguments }())).not.toBeFalsy();
 });

 test("check empty Maps and Sets", () => {
    expect(isEmpty(new Map())).not.toBeFalsy();
    expect(isEmpty(new Set())).not.toBeFalsy();
 })

 const object = {a:1};
 const prototype = Object.create(object);
 prototype.a = 2;

 test("check JQuery objects & object prototypes", () => {
    expect(isEmpty(object)).toBeFalsy();
    expect(isEmpty(prototype)).toBeFalsy();
 })

 test("check boolean & imteger values", () => {
    expect(isEmpty(true)).not.toBeFalsy();
    expect(isEmpty(1)).not.toBeFalsy();
 })