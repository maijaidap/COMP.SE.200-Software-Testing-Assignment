import '@testing-library/jest-dom'
import isEmpty from '../isEmpty'

const addedItem = {
    name: 'item1',
    price: [10],
    description: null,
    discounts: 0
    };

const category = new Map();
category.set(addedItem, 'fruit');

const mandatoryFields = { 
    allFilled: 'yes',
    isTrue(){
        return this.allFilled;
    },
};

const checkFields = Object.create(mandatoryFields);

test("item exists  should not be empty -> return false", () => {
    expect(isEmpty(addedItem)).toBeFalsy();
    expect(isEmpty(mandatoryFields)).toBeFalsy();
})

test("name, price inserted correctly, should not be empty --> return false", () => {
    expect(isEmpty(addedItem.name)).toBeFalsy();
    expect(isEmpty(addedItem.price)).toBeFalsy();
})

test("discounts & description dont exist, should be emtpy -> return true", () => {
    expect(isEmpty(addedItem.discounts)).not.toBeFalsy();
    expect(isEmpty(addedItem.description)).not.toBeFalsy();
})

test("existing item is mapped to a category, should not be empty --> return false", () => {
    expect(isEmpty(category)).toBeFalsy();
})

test("all mandatory fields are filled, should return yes and not be empty --> return true", () => {   
    expect(isEmpty(checkFields)).not.toBeFalsy();
})
