# Simplifying JS

![Image of simplifying](https://github.com/das-jishu/simplifying/blob/master/images/simplifying.png?raw=true)
 
 [![Build Status](https://travis-ci.org/das-jishu/simplifying.svg?branch=master)](https://travis-ci.org/github/das-jishu/simplifying)
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT "MIT License")
 [![npm version](http://img.shields.io/npm/v/simplifying.svg?style=flat)](https://npmjs.org/package/simplifying "View this project on npm")
 [![npm](https://img.shields.io/npm/dt/simplifying)](https://npmjs.org/package/simplifying "View project on npm")
 ![GitHub repo size](https://img.shields.io/github/repo-size/das-jishu/simplifying)
 [![npm bundle size](https://img.shields.io/bundlephobia/min/simplifying)](https://npmjs.org/package/simplifying "View project on npm")
 [![Active](http://img.shields.io/badge/Status-Active-green.svg)](https://github.com/das-jishu/simplifying)
 [![GitHub tag](https://img.shields.io/github/tag/das-jishu/simplifying.svg)](https://GitHub.com/das-jishu/simplifying/tags/)
 [![Generic badge](https://img.shields.io/badge/lang-typescript-yellow.svg)](https://www.typescriptlang.org/)
 
A lightweight library containing multiple utility functions to make your life easier when dealing with arrays and objects.

### HOW TO USE

Open the terminal and navigate to the root directory of your project.<br/>
Install Simplifying:<br/>
```
npm i simplifying
```
If you do not have npm installed, you can download it [here](https://www.npmjs.com/get-npm).<br/><br/>
##### EXAMPLE CODE:

```javascript
const array = require('simplifying');
let arr = [2, 3, 4, 3, 3, 2, 4];
console.log(array.removeDuplicates(arr));

//OUTPUT: [2, 3, 4]
```
<br />

![Image of example code](https://github.com/das-jishu/simplifying/blob/master/images/example.png?raw=true)

<br />

### List of all methods on array: <br/>


Method | Parameters | Use
------------ | ------------- | --------------
shuffle | array: Array | Shuffles array and returns it
removeDuplicates | array: Array | Removes all duplicate elements and returns a new array
pickRandom | array: Array,<br/> n: Number,<br/> unique?: Boolean | Returns an array of n random elements from array.<br/>The returned elements will be unique if true is passed in the third parameter
countItem | array: Array,<br/> item: any | Returns the frequency of the passed item in the array
countAll | array: Array | Returns a map which holds the frequencies of all items in the array
searchItems | array: Array,<br /> item: any | Returns all positions where the given item is found
removeItems | array: Array,<br /> item: any | Deletes multiple occurances of the given item
toArray | x: (string, number) | Converts string or number to array of characters or digits
merge | array1: Array,<br /> array2: Array, <br /> type?: string | Merge two arrays.<br /><br />type == 'merge-all': Keep the duplicates<br/>type == 'common': Returns common elements<br />no type: Merge and remove common
clean | array: Array | Removes null, undefined, '', NaN
flatten | array: Array | Flattens all nested arrays inside
swapByPosition | array: Array,<br />pos1: number,<br />pos2: number | Swaps values in pos1 and pos2 in the array
swapByValues | array: Array,<br /> value1: any,<br /> value2: any | Swaps value1 and value2 in the array
perform | array: Array,<br /> operation: string | Performs the said operation on the array.<br />Allowed Operations:<br />sum, product, min, max, average
arrayToObject | array: Array | Converts an array to object
slide | array: Array,<br /> steps: number,<br /> direction?: string | Shifts array by n steps in the given direction. The default direction is left.
range | array: Array,<br /> start: number,<br /> end: number | Returns a subarray from start to end - 1

<br />

### List of all methods on array of objects: <br />

Method | Parameters | Use
------------ | ------------- | --------------
arrayOfObjectsToObject | array: Array,<br /> keyField: string | Converts an array of objects to an object where key is keyField
sortByKeyField | array: Array,<br /> keyField: string,<br /> order?: string | Sorts an array of objects based on keyField. Default sorting order is ascending. Pass 'desc' to order for reverse.
getFields | array: Array,<br /> fields: Array | Returns an array of objects containing only the required fields
getOneField | array: Array,<br /> field: string | Returns an array of all the values of the particular field
searchByKeyField | array: Array,<br /> searchField: string,<br /> searchValue: string,<br /> reqFields?: Array | Searches the array for the given (key, value) pair and returns only the reqFields. If nothing is passed, the whole object is returned.
deleteByKeyField | array: Array,<br /> field: string,<br /> value: string | Deletes an item based on the (key, value) pair
getKeys | array: Array | Returns an array of all the keys inside the object. Assumes that all objects have the same keys
findObjects | array: Array,<br /> func: Function | Executes the function on all objects and returns the satisfied objects

<br />

### LICENSE

[MIT](https://opensource.org/licenses/MIT)
<br />

### Author

Subham Das

##### Open an issue if you feel the need for a change or want to report any bugs.

