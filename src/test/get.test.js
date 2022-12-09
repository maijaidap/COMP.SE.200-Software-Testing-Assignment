import '@testing-library/jest-dom'
import get from '../get'

//selected item that has price of 10. 

const priceTable = {'item':[{
                            'price': 10}
                        ]};

test("a price should be fetched", () => {
    expect(get(priceTable,'item[0].price')).toBeDefined();
    expect(get(priceTable, ['item', '0', 'price'])).toBeDefined();
 });

test("price should match the expected price", () => {
    expect(get(priceTable,'item[0].price')).toEqual(10);
    expect(get(priceTable, ['item', '0', 'price'])).toEqual(10);
})

test("undefined priceTable should return undefined", () => {
    expect(get(undefined, 0)).toBeUndefined();
})

test("false price location should return undefined", () => {
    expect(get(priceTable, undefined)).toBeUndefined();
})


