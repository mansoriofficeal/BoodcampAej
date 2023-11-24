// __tests__/foodFunctions.test.js

const { searchFood } = require('./foodFunctions'); // file direktori

const foodList = [
    { name: 'v' },
    { name: 'c' },
    { name: 's' },
];

test('pencarian makanan berdasarkan nama', () => {
    const query = 'v';
    const searchResult = searchFood(foodList, query);

    expect(searchResult).toHaveLength(1);
    expect(searchResult[0].name).toEqual(expect.stringContaining(query));
});

test('pencarian makanan berdasarkan nama', () => {
    const query = 'v';
    const searchResult = searchFood(foodList, query);

    expect(searchResult).toHaveLength(1);
    expect(searchResult[0].name).toEqual(expect.stringContaining(query));
});

test('pencarian makanan berdasarkan nama', () => {
    const query = 'c';
    const searchResult = searchFood(foodList, query);

    expect(searchResult).toHaveLength(1);
    expect(searchResult[0].name).toEqual(expect.stringContaining(query));
});

test('pencarian makanan yang tidak ada', () => {
    const query = 's';
    const searchResult = searchFood(foodList, query);

    expect(searchResult).toHaveLength(0);
});

test('pencarian makanan dengan query kosong', () => {
    const query = '';
    const searchResult = searchFood(foodList, query);

    expect(searchResult).toEqual(foodList);
});
