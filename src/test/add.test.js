import '@testing-library/jest-dom'
import add from '../add'

const expectedValue = 3;

test("should add two integers correctly", () => {
   expect(add(1,2)).toBe(expectedValue);
});

test("should return 0 if numbers undefined", () => {
   expect(add(undefined, undefined)).toBe(0)
});

test("should return correct format if one is undefined", () => {
   expect(add(undefined, 3)).toBe(expectedValue);
   expect(add(3, undefined)).toBe(expectedValue);
})

test("should convert strings to integers and return value", () => {
   expect(add("1", "2")).toBe(expectedValue);
   expect(add("1", 2)).toBe(expectedValue);
})
