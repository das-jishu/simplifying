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

