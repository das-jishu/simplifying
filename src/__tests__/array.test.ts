import { clean, flatten, swapByPosition, swapByValues } from './../index';
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