import '@testing-library/jest-dom'
import castArray from '../castArray'



test("casted array should match expected array", () => {
    expect(castArray("item1")).toEqual(["item1"]);
    expect(castArray({'item': 'item1'})).toEqual([{'item': 'item1'}])
    expect(castArray(1)).toEqual([1]);
    expect(castArray()).toEqual([]);
});

test("should return array as-is if already array", () => {
    expect(castArray(["item1"])).toEqual(["item1"]);
 });


 test("should cast undefined item as array", () => {
    expect(castArray(undefined)).toEqual([undefined]);
    expect(castArray(null)).toEqual([null]);
 })

