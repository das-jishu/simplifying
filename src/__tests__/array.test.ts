import { shuffle, removeDuplicates, countItem, countAll, pickRandom } from '../index';

test('TEST - Shuffling Array', () => {
  let arr = [2, 7, 9, 0, 1, 5];
  let shuffledarr = shuffle(arr);
  expect(arr.length).toBe(shuffledarr.length);
});

test('TEST - Removing duplicates from Array', () => {
  let arr = [2, 2, 9, 4, 4, 5, 9, 2];
  expect(removeDuplicates(arr)).toStrictEqual([2, 9, 4, 5]);
});

test('TEST:1 - Picking random from Array', () => {
  let arr = [2, 7, 9, 0, 1, 5];
  let randomArr = pickRandom(arr, 5, false);
  expect(randomArr.length).toBe(5);
});

test('TEST:2 - Picking random from Array', () => {
  let arr = [2, 7, 9, 0, 1, 5];
  let randomArr = pickRandom(arr, 6, true);
  expect(randomArr.length).toBe(6);
});

test('TEST:3 - Picking random from Array', () => {
  let arr = [2, 7, 9, 0, 1, 5];
  let randomArr = pickRandom(arr, 6);
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
