/**
 * Created by RFreeman on 1/11/2017.
 */

// link to the fileSystem module
var fs = require('fs');

// print food
console.log('FOOD:');

var food = fs.readFileSync('food.txt', 'utf8');
console.log(food);

// drinks
console.log('\nDRINKS:');

var drinks = fs.readFileSync('drinks.txt', 'utf8');
console.log(drinks);