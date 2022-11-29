import '@testing-library/jest-dom'
import add from '../add'

test("returns 3 for 1 and 2", () => {
   expect(add(1,2)).toBe(3);
});