const array = require('./../index.ts');

test('TEST - Shuffling Array', () => {
  let arr = [2, 7, 9, 0, 1, 5];
  let shuffledarr = array.shuffle(arr);
  expect(arr.length).toBe(shuffledarr.length);
});

test('TEST - Removing duplicates from Array', () => {
  let arr = [2, 2, 9, 4, 4, 5, 9, 2];
  expect(array.removeDuplicates(arr)).toStrictEqual([2, 9, 4, 5]);
});

test('TEST - Picking random from Array', () => {
  let arr = [2, 7, 9, 0, 1, 5];
  let randomArr = array.pickRandom(arr, 5, false);
  expect(randomArr.length).toBe(5);
  randomArr = array.pickRandom(arr, 6, true);
  expect(randomArr.length).toBe(6);
  randomArr = array.pickRandom(arr, 6);
  expect(randomArr.length).toBe(6);
});

test('TEST - Count item in an Array', () => {
  let arr = [2, 7, 9, 7, 1, 5];
  expect(array.countItem(arr, 7)).toBe(2);
});

test('TEST - Count all items in an Array', () => {
  let arr = [2, 7, 9, 7, 7, 2];
  let result = new Map();
  result.set(2, 2);
  result.set(7, 3);
  result.set(9, 1);
  expect(array.countAll(arr)).toStrictEqual(result);
});

test('TEST - Search for multiple occurances of an item', () => {
  expect(array.searchItems([2, 3, 4, 3, 2, 3, 5, 6, 7], 3)).toStrictEqual([1, 3, 5]);
  expect(array.searchItems([2, 3, 4, 3, 2, 3, 5, 6, 7], 9)).toStrictEqual([-1]);
});

test('TEST - Remove all occurances of an item', () => {
  expect(array.removeItems([2, 3, 4, 4, 3, 5], 3)).toStrictEqual([2, 4, 4, 5]);
});

test('TEST - Convert a string to an array of characters', () => {
  let str = "Hello!";
  expect(array.toArray(str)).toStrictEqual(['H', 'e', 'l', 'l', 'o', '!']);
  let n = 23456;
  expect(array.toArray(n)).toStrictEqual([2, 3, 4, 5, 6]);
  let n2 = 234.56;
  expect(array.toArray(n2)).toStrictEqual([2, 3, 4, '.', 5, 6]);
});

test('TEST - Merge arrays', () => {
  let arr1 = [2, 3, 4];
  let arr2 = [3, 4, 5, 6];
  expect(array.merge(arr1, arr2)).toStrictEqual([2, 3, 4, 5, 6]);
  expect(array.merge(arr1, arr2, 'merge-all')).toStrictEqual([2, 3, 4, 3, 4, 5, 6]);
  expect(array.merge(arr1, arr2, 'common')).toStrictEqual([3, 4]);
});

test('TEST - Cleaning array', () => {
  expect(array.clean([null, null, undefined, 2, '', 78, NaN, 'NaN', 'Hello', ' ', ''])).toStrictEqual([2, 78, 'NaN', 'Hello', ' ']);
});

test('TEST - Flatten an array', () => {
  expect(array.flatten([1, [2], [3, [[4]]],[5,6]])).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

test('TEST - Swapping by position in an array', () => {
  expect(array.swapByPosition([1, 2, 3, 4, 5, 6], 0, 5)).toStrictEqual([6, 2, 3, 4, 5, 1]);
});

test('TEST - Swapping by values in an array', () => {
  expect(array.swapByValues([1, 2, 3, 4, 5, 6], 2, 5)).toStrictEqual([1, 5, 3, 4, 2, 6]);
});

test('TEST - Performing numerical computations on an array', () => {
  expect(array.perform([1,2,5,4,3], 'sum')).toBe(15);
  expect(array.perform([1,2,5,4,3], 'product')).toBe(120);
  expect(array.perform([1,2,5,4,3], 'max')).toBe(5);
  expect(array.perform([1,2,5,4,3], 'min')).toBe(1);
  expect(array.perform([1,2,5,4,3], 'average')).toBe(3);
});

test('TEST - Array to Object', () => {
  expect(array.arrayToObject([1,2,3,4])).toStrictEqual({0: 1, 1: 2, 2: 3, 3: 4});
});

test('TEST - Shifting an array by n steps', () => {
  expect(array.slide([2, 3, 4, 5, 6], 4, 'left')).toStrictEqual([6, 2, 3, 4, 5]);
  expect(array.slide([2, 3, 4, 5, 6], 4)).toStrictEqual([6, 2, 3, 4, 5]);
  expect(array.slide([2, 3, 4, 5, 6], 2, 'right')).toStrictEqual([5, 6, 2, 3, 4]);
});

test('TEST - Returning a subarray', () => {
  expect(array.range([2, 4, 5, 7, 9], 2, 5)).toStrictEqual([5, 7, 9]);
});

test('TEST - Jumping steps in an array', () => {
  expect(array.jump([1, 2, 3, 4, 5, 6], 2)).toStrictEqual([1, 3, 5]);
});

test('TEST - Check if array contains all unique values', () => {
  expect(array.isUnique([1, 2, 3, 4, 5])).toBe(true);
  expect(array.isUnique([1, 2, 3, 3, 4])).toBe(false);
});
