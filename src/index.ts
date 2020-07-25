
//ARRAY UTILITIES

//Shuffling array
export const shuffle = (array: Array<any>) => {
  let currentIndex = array.length, temp, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
};

//Remove duplicates
export const removeDuplicates = (array: Array<any>) => {
  let arr: Array<any> = [];
  array.forEach(item => {
    if(!arr.includes(item))
    arr.push(item);
  });
  return arr;
};

//Picking random elements
export const pickRandom = (array: Array<any>, n: Number, unique: Boolean) => {
  let arr: Array<any> = shuffle(array);
  if (unique === true) {
    arr = removeDuplicates(arr);
  }

  let rand: Array<any> = [];
  let i = 0, k = 0;
  while (n > k) {
    if(i >= arr.length) {
      arr = shuffle(arr);
      i = 0;
    }
    rand.push(arr[i]);
    i++;
    k++;
  }
  return rand;
};

//Count an element in the array
export const countItem = (array: Array<any>, item: any) => {
  let c = 0;
  array.forEach(x => {
    if(x === item)
    c++;
  });
  return c;
};

//Frequency of each item in the array
export const countAll = (array: Array<any>) => {
  let result = new Map();
  let arr = removeDuplicates(array);
  arr.forEach(item => {
    result.set(item, countItem(array, item));
  });
  return result;
};
