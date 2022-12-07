import '@testing-library/jest-dom'
import filter from '../filter'

const vegetables = [
    { 'vegetable': 'potato', 'isRed': false },
    { 'vegetable': 'tomato',   'isRed': true },
    { 'vegetable': 'cucumber', 'isRed': false} ]

it('filter array of string that has a certain value, should return array of filtered items', () => { 
    expect(filter(vegetables, ({ isRed }) => isRed)).toEqual( [{"isRed": true, "vegetable": "tomato"}])
});

it('filter array of string that is empty, should return an empty array', () => { 
    expect(filter([])).toEqual([[]])
});

it('filter array of string that is null, should return an empty array', () => { 
    expect(filter(null)).toEqual([[]])
});