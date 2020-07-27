# Simplifying JS
 
 [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

A lightweight library containing multiple utility functions to make your life easier when dealing with arrays and objects.

### HOW TO USE

Open the terminal and navigate to the root directory of your project.<br/>
Install Simplifying:<br/>
```
npm i simplifying
```
If you do not have npm installed, you can download it [here](https://www.npmjs.com/get-npm).<br/><br/>
EXAMPLE CODE:

```javascript
const array = require('simplifying');
let arr = [2, 3, 4, 3, 3, 2, 4];
console.log(array.removeDuplicates(arr));

//OUTPUT: [2, 3, 4]
```


### List of all methods available: <br/>


Method | Parameters | Use
------------ | ------------- | --------------
shuffle | array: Array | Shuffles array and returns it
removeDuplicates | array: Array | Removes all duplicate elements and returns a new array
pickRandom | array: Array,<br/> n: Number,<br/> unique?: Boolean | Returns an array of n random elements from array.<br/>The returned elements will be unique if true is passed in the third parameter
countItem | array: Array,<br/> item: any | Returns the frequency of the passed item in the array
countAll | array: Array | Returns a map which holds the frequencies of all items in the array
toArray | x: (string, number) | Converts string or number to array of characters or digits
merge | array1: Array,<br /> array2: Array, <br /> type?: string | Merge two arrays.<br /><br />type == 'merge-all': Keep the duplicates<br/>type == 'common': Returns common elements<br />no type: Merge and remove common
clean | array: Array | Removes null, undefined, '', NaN
flatten | array: Array | Flattens all nested arrays inside
swapByPosition | array: Array,<br />pos1: number,<br />pos2: number | Swaps values in pos1 and pos2 in the array
swapByValues | array: Array,<br /> value1: any,<br /> value2: any | Swaps value1 and value2 in the array
perform | array: Array,<br /> operation: string | Performs the said operation on the array.<br />Allowed Operations:<br />sum, average, min, max, average
arrayToObject | array: Array | Converts an array to object
arrayOfObjectsToObject | array: Array,<br /> keyField: string | Converts an array of objects to an object where key is keyField
sortByKeyField | array: Array,<br /> keyField: string,<br /> order?: string | Sorts an array of objects based on keyField. Default sorting order is ascending. Pass 'desc' to order for reverse.
getFields | array: Array,<br /> fields: Array | Returns an array of objects containing only the required fields