import { clean, flatten, swapByPosition, swapByValues, perform, arrayToObject, arrayOfObjectsToObject, sortByKeyField, getFields, searchByKeyField, getOneField, deleteByKeyField, removeItems, getKeys, searchItems } from './../index';
import { shuffle, removeDuplicates, countItem, countAll, pickRandom, toArray, merge } from '../index';

test('TEST - Shuffling Array', () => {
  let arr = [2, 7, 9, 0, 1, 5];
  let shuffledarr = shuffle(arr);
  expect(arr.length).toBe(shuffledarr.length);
});

test('TEST - Removing duplicates from Array', () => {
  let arr = [2, 2, 9, 4, 4, 5, 9, 2];
  expect(removeDuplicates(arr)).toStrictEqual([2, 9, 4, 5]);
});

test('TEST - Picking random from Array', () => {
  let arr = [2, 7, 9, 0, 1, 5];
  let randomArr = pickRandom(arr, 5, false);
  expect(randomArr.length).toBe(5);
  randomArr = pickRandom(arr, 6, true);
  expect(randomArr.length).toBe(6);
  randomArr = pickRandom(arr, 6);
  expect(randomArr.length).toBe(6);
});

test('TEST - Count item in an Array', () => {
  let arr = [2, 7, 9, 7, 1, 5];
  expect(countItem(arr, 7)).toBe(2);
});

test('TEST - Count all items in an Array', () => {
  let arr = [2, 7, 9, 7, 7, 2];
  let result = new Map();
  result.set(2, 2);
  result.set(7, 3);
  result.set(9, 1);
  expect(countAll(arr)).toStrictEqual(result);
});

test('TEST - Search for multiple occurances of an item', () => {
  expect(searchItems([2, 3, 4, 3, 2, 3, 5, 6, 7], 3)).toStrictEqual([1, 3, 5]);
  expect(searchItems([2, 3, 4, 3, 2, 3, 5, 6, 7], 9)).toStrictEqual([-1]);
});

test('TEST - Remove all occurances of an item', () => {
  expect(removeItems([2, 3, 4, 4, 3, 5], 3)).toStrictEqual([2, 4, 4, 5]);
});

test('TEST - Convert a string to an array of characters', () => {
  let str = "Hello!";
  expect(toArray(str)).toStrictEqual(['H', 'e', 'l', 'l', 'o', '!']);
  let n = 23456;
  expect(toArray(n)).toStrictEqual([2, 3, 4, 5, 6]);
  let n2 = 234.56;
  expect(toArray(n2)).toStrictEqual([2, 3, 4, '.', 5, 6]);
});

test('TEST - Merge arrays', () => {
  let arr1 = [2, 3, 4];
  let arr2 = [3, 4, 5, 6];
  expect(merge(arr1, arr2)).toStrictEqual([2, 3, 4, 5, 6]);
  expect(merge(arr1, arr2, 'merge-all')).toStrictEqual([2, 3, 4, 3, 4, 5, 6]);
  expect(merge(arr1, arr2, 'common')).toStrictEqual([3, 4]);
});

test('TEST - Cleaning array', () => {
  expect(clean([null, null, undefined, 2, '', 78, NaN, 'NaN', 'Hello', ' ', ''])).toStrictEqual([2, 78, 'NaN', 'Hello', ' ']);
});

test('TEST - Flatten an array', () => {
  expect(flatten([1, [2], [3, [[4]]],[5,6]])).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

test('TEST - Swapping by position in an array', () => {
  expect(swapByPosition([1, 2, 3, 4, 5, 6], 0, 5)).toStrictEqual([6, 2, 3, 4, 5, 1]);
});

test('TEST - Swapping by values in an array', () => {
  expect(swapByValues([1, 2, 3, 4, 5, 6], 2, 5)).toStrictEqual([1, 5, 3, 4, 2, 6]);
});

test('TEST - Performing numerical computations on an array', () => {
  expect(perform([1,2,5,4,3], 'sum')).toBe(15);
  expect(perform([1,2,5,4,3], 'product')).toBe(120);
  expect(perform([1,2,5,4,3], 'max')).toBe(5);
  expect(perform([1,2,5,4,3], 'min')).toBe(1);
  expect(perform([1,2,5,4,3], 'average')).toBe(3);
});

test('TEST - Array to Object', () => {
  expect(arrayToObject([1,2,3,4])).toStrictEqual({0: 1, 1: 2, 2: 3, 3: 4});
});

test('TEST - Converting array of objects to an object', () => {
  expect(arrayOfObjectsToObject([
    { id: 123, name: "dave", age: 23 },
    { id: 456, name: "chris", age: 23 },
    { id: 789, name: "bob", age: 23 },
    { id: 101, name: "tom", age: 23 },
    { id: 102, name: "tim", age: 23 }
  ], 'id')).toStrictEqual({
    "123": { id: 123, name: "dave", age: 23 },
    "456": { id: 456, name: "chris", age: 23 },
    "789": { id: 789, name: "bob", age: 23 },
    "101": { id: 101, name: "tom", age: 23 },
    "102": { id: 102, name: "tim", age: 23 }
  });
});

test('TEST - Sorting an array of objects based on keyfield', () => {
  expect(sortByKeyField([
    { id: 123, name: "dave", age: 23 },
    { id: 456, name: "chris", age: 23 },
    { id: 789, name: "bob", age: 23 },
    { id: 101, name: "tom", age: 23 },
    { id: 102, name: "tim", age: 23 }
  ], 'id')).toStrictEqual([
    { id: 101, name: "tom", age: 23 },
    { id: 102, name: "tim", age: 23 },
    { id: 123, name: "dave", age: 23 },
    { id: 456, name: "chris", age: 23 },
    { id: 789, name: "bob", age: 23 },
  ]);

  expect(sortByKeyField([
    { id: 123, name: "dave", age: 23 },
    { id: 456, name: "chris", age: 23 },
    { id: 789, name: "bob", age: 23 },
    { id: 101, name: "tom", age: 23 },
    { id: 102, name: "tim", age: 23 }
  ], 'name')).toStrictEqual([
    { id: 789, name: "bob", age: 23 },
    { id: 456, name: "chris", age: 23 },
    { id: 123, name: "dave", age: 23 },
    { id: 102, name: "tim", age: 23 },
    { id: 101, name: "tom", age: 23 }    
  ]);

  expect(sortByKeyField([
    { id: 123, name: "dave", age: 23 },
    { id: 456, name: "chris", age: 23 },
    { id: 789, name: "bob", age: 23 },
    { id: 101, name: "tom", age: 23 },
    { id: 102, name: "tim", age: 23 }
  ], 'name', 'desc')).toStrictEqual([
    { id: 101, name: "tom", age: 23 },
    { id: 102, name: "tim", age: 23 },
    { id: 123, name: "dave", age: 23 },
    { id: 456, name: "chris", age: 23 },
    { id: 789, name: "bob", age: 23 },
  ]);
});

test('TEST - Get particular fields', () => {
  expect(getFields([
    { id: 123, name: "dave", age: 23 },
    { id: 456, name: "chris", age: 23 },
    { id: 789, name: "bob", age: 23 },
    { id: 101, name: "tom", age: 23 },
    { id: 102, name: "tim", age: 23 }
  ], ['id', 'name'])).toStrictEqual([
    { id: 123, name: "dave" },
    { id: 456, name: "chris", },
    { id: 789, name: "bob", },
    { id: 101, name: "tom", },
    { id: 102, name: "tim", }
  ]);

  expect(getFields([
    { id: 123, name: "dave", age: 23 },
    { id: 456, name: "chris", age: 23 },
    { id: 789, name: "bob", age: 23 },
    { id: 101, name: "tom", age: 23 },
    { id: 102, name: "tim", age: 23 }
  ], ['id', 'age'])).toStrictEqual([
    { id: 123, age: 23 },
    { id: 456, age: 23 },
    { id: 789, age: 23 },
    { id: 101, age: 23 },
    { id: 102, age: 23 }
  ]);
});

test('TEST - Get one field in an array', () => {
  expect(getOneField([
    { id: 123, name: "dave", age: 23 },
    { id: 456, name: "chris", age: 23 },
    { id: 789, name: "bob", age: 23 },
    { id: 101, name: "tom", age: 23 },
    { id: 102, name: "tim", age: 23 }
  ], 'name')).toStrictEqual(['dave', 'chris', 'bob', 'tom', 'tim']);
});

test('TEST - Search by key field in array of objects', () => {
  expect(searchByKeyField([
    { id: 123, name: "dave", age: 23 },
    { id: 456, name: "chris", age: 23 },
    { id: 789, name: "bob", age: 23 },
    { id: 101, name: "tom", age: 23 },
    { id: 102, name: "tim", age: 23 }
  ], 'id', 123)).toStrictEqual([{ id: 123, name: "dave", age: 23 }]);

  expect(searchByKeyField([
    { id: 123, name: "dave", age: 23 },
    { id: 456, name: "chris", age: 23 },
    { id: 789, name: "bob", age: 23 },
    { id: 101, name: "tom", age: 23 },
    { id: 102, name: "tim", age: 23 }
  ], 'name', 'bob', ['id', 'age'])).toStrictEqual([{ id: 789, age: 23 }]);
});

test('TEST - Delete multiple instances by keyField', () => {
  expect(deleteByKeyField([
    { id: 123, name: "dave", age: 23 },
    { id: 456, name: "chris", age: 23 },
    { id: 789, name: "bob", age: 23 },
    { id: 101, name: "chris", age: 23 },
    { id: 102, name: "tim", age: 23 }
  ], 'name', 'chris')).toStrictEqual([
    { id: 123, name: "dave", age: 23 },
    { id: 789, name: "bob", age: 23 },
    { id: 102, name: "tim", age: 23 }
  ]);
});

test('TEST - Get keys of objects in the array', ()=> {
  expect(getKeys([
    { id: 123, name: "dave", age: 23 },
    { id: 456, name: "chris", age: 23 },
    { id: 789, name: "bob", age: 23 },
    { id: 101, name: "tom", age: 23 },
    { id: 102, name: "tim", age: 23 }
  ])).toStrictEqual(['id', 'name', 'age']);
});