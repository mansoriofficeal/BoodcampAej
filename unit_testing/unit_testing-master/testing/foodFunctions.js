// src/foodFunctions.js

function searchFood(foodList, query) {
    return foodList.filter(food => food.name.toLowerCase().includes(query.toLowerCase()));
}

module.exports = {
    searchFood,
};
