import '@testing-library/jest-dom'
import get from '../get'

//selected item that has price of 10. 

const expectedPrice = 10;
const priceTable = [10];

test("a price should be fetched", () => {
    expect(get(priceTable,0, "price invalid")).toBeDefined();
 });

test("price should match the expected price", () => {
    expect(get(priceTable, 0, "price invalid")).toBe(expectedPrice);
})

test("undefined priceTable should return undefined", () => {
    expect(get(undefined, 0)).toBeUndefined();
})

test("false price location should return undefined", () => {
    expect(get(priceTable, undefined)).toBeUndefined();
})


