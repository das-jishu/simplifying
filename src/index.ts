
//ARRAY UTILITIES

//Shuffling array
export const shuffle = (array: Array<any>): Array<any> => {
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
export const removeDuplicates = (array: Array<any>): Array<any> => {
  let arr: Array<any> = [];
  array.forEach(item => {
    if(!arr.includes(item))
    arr.push(item);
  });
  return arr;
};

//Picking random elements
export const pickRandom = (array: Array<any>, n: Number, unique?: Boolean): Array<any> => {
  let arr: Array<any> = shuffle(array);
  if (unique && unique === true) {
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
export const countItem = (array: Array<any>, item: any): number => {
  let c = 0;
  array.forEach(x => {
    if(x === item)
    c++;
  });
  return c;
};

//Frequency of each item in the array
export const countAll = (array: Array<any>): Map<any, number> => {
  let result = new Map();
  let arr = removeDuplicates(array);
  arr.forEach(item => {
    result.set(item, countItem(array, item));
  });
  return result;
};

//Converts string or numbers into an array of characters or digits 
export const toArray = (x: (string | number)): Array<any> => {
  let y = x.toString();
  let arr = [];
  for(let i = 0; i < y.length; i++) {
    let c = y.charAt(i);
    if(typeof(x) === 'number' && c != '.')
    arr.push(parseInt(c));
    else
    arr.push(c);
  }
  return arr;
};

//Join all elements of an array
export const merge = (array1: Array<any>, array2: Array<any>, type?: string): Array<any> => {
  let arr: Array<any> = [];
  if(type && type === 'merge-all') arr = array1.concat(array2);
  else if(type && type === 'common') {
    array1.forEach(item => {
      if(array2.includes(item))
      arr.push(item);
    });
    arr = removeDuplicates(arr);
  }
  else {
    arr = array1.concat(array2);
    arr = removeDuplicates(arr);
  }
  return arr;
};

//Remove blanks, null, undefined or NaN from array
export const clean = (array: Array<any>): Array<any> => {
  let arr = array.filter(item => !['', null, undefined, NaN].includes(item));
  return arr;
};

//Flatten out an array
export const flatten = (a: any, shallow?: any, r?: Array<any>): Array<any> => {
  if(!r){ r = []}
  if(shallow) {
    return r.concat(...a);
  }
        
  for(let i=0; i<a.length; i++){
    if(a[i].constructor == Array){
        flatten(a[i], shallow, r);
    }else{
        r.push(a[i]);
    }
  }
  return r;
};


//Swap values by position
export const swapByPosition = (array: Array<any>, pos1: number, pos2: number): Array<any> => {
  let temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
  return array;
};

//Swap values by the actual values
export const swapByValues = (array: Array<any>, value1: any, value2: any): Array<any> => {
  if(!array.includes(value1) || !array.includes(value2))
  return array;
  array = swapByPosition(array, array.indexOf(value1), array.indexOf(value2));
  return array;
};

//Perform numerical computations on array
export const perform = (array: Array<number>, operation: string): number => {
  let result = 0;
  switch (operation) {
    case 'sum': 
      array.forEach(item => result += item);
      break;
    case 'product':
      result =  1;
      array.forEach(item => result *= item);
      break;
    case 'max':
      array = array.sort();
      result = array[array.length - 1];
      break;
    case 'min':
      array = array.sort();
      result = array[0];
      break;
    case 'average':
      array.forEach(item => result += item);
      result /= array.length;
      break;
    default:
      array = array.sort();
      result = array[array.length - 1];
  }
  return result;
};

//Convert an array to an object
export const arrayToObject = (array: Array<any>): Object => {
  let obj = {}; 
  obj = Object.assign({}, array); 
  return obj; 
};


//////// ARRAY OF OBJECTS UTILITIES ////////

//Convert array of objects to an object
export const arrayOfObjectsToObject = (array: Array<any>, keyField: string): Object =>
  Object.assign({}, ...array.map(item => ({[item[keyField]]: item})));

//Sort based on a keyfield
export const sortByKeyField = (array: Array<Object>, keyField: string, order?: string): Array<Object> => {
  if(array.length === 0)
  return [];

  return array.sort(function(a, b) {
    let x = a[keyField as keyof typeof array[0]]; 
    let y = b[keyField as keyof typeof array[0]];
    if(order && order === 'desc')
    return ((x < y) ? 1 : ((x > y) ? -1 : 0));
    else
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
};

//Get some particular fields of all the objects in the array
export const getFields = (array: Array<Object>, fields: Array<any>): Array<Object> => {
  if(array.length === 0 || fields.length === 0)
  return array;

  let result = array.map( item => {
    let obj = {};
    fields.forEach( field => {
      Object.assign(obj, { [field]: item[field as keyof typeof item]});
    });
    return obj;
  });
  return result;
};
