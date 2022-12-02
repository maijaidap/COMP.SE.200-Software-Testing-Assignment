import '@testing-library/jest-dom'
import castArray from '../castArray'

const expectedArray = ["item1"];

test("added item should be casted as array", () => {
   expect(castArray("item1")).toContain("item1");   
});

test("casted array should match expected array", () => {
    expect(castArray("item1")).toEqual(expect.arrayContaining(expectedArray));
});

test("should return array as-is if already array", () => {
    expect(castArray(["item1"])).toContain("item1");
 });

 test("should cast undefined item as array", () => {
    expect(castArray(undefined)).toEqual(expect.arrayContaining([undefined]));
 })

