import { shuffle } from '../index';

test('TEST - Shuffling Array', () => {
  let arr = [2, 7, 9, 0, 1, 5];
  let shuffledarr = shuffle(arr);
  expect(arr.length).toBe(shuffledarr.length);
});
