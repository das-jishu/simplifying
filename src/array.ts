const a = require('./array.js');

module.exports.range = (array: Array<any>, start: number, end: number): Array<any> => {
    let result: Array<any> = [];
    for(let i = start; i < end; i++)
    result.push(array[i]);
    return result;
};

module.exports.shuffle = (arr: Array<any>): Array<any> => {
    let array = arr;
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

module.exports.removeDuplicates = (array: Array<any>): Array<any> => {
    let arr: Array<any> = [];
    array.forEach(item => {
      if(!arr.includes(item))
      arr.push(item);
    });
    return arr;
};

module.exports.pickRandom = (array: Array<any>, n: Number, unique?: Boolean): Array<any> => {
    let arr: Array<any> = a.shuffle(array);
    if (unique && unique === true) {
      arr = a.removeDuplicates(arr);
    }
  
    let rand: Array<any> = [];
    let i = 0, k = 0;
    while (n > k) {
      if(i >= arr.length) {
        arr = a.shuffle(arr);
        i = 0;
      }
      rand.push(arr[i]);
      i++;
      k++;
    }
    return rand;
};

module.exports.countItem = (array: Array<any>, item: any): number => {
    let c = 0;
    array.forEach(x => {
      if(x === item)
      c++;
    });
    return c;
};

module.exports.countAll = (array: Array<any>): Map<any, number> => {
    let result = new Map();
    let arr = a.removeDuplicates(array);
    arr.forEach( (item: any) => {
      result.set(item, a.countItem(array, item));
    });
    return result;
};

module.exports.searchItems = (array: Array<any>, item: any): Array<number> => {
    let positions: Array<number> = [];
    if(!array.includes(item)) return [-1];
  
    array.forEach( (value, index) => {
      if(value === item)
      positions.push(index);
    });
    return positions;
};

module.exports.removeItems = (array: Array<any>, item: any): Array<any> => {
    let result: Array<any> = [];
    result = array.filter( i => i != item );
    return result;
};

module.exports.toArray = (x: (string | number)): Array<any> => {
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

module.exports.merge = (array1: Array<any>, array2: Array<any>, type?: string): Array<any> => {
    let arr: Array<any> = [];
    if(type && type === 'merge-all') arr = array1.concat(array2);
    else if(type && type === 'common') {
      array1.forEach(item => {
        if(array2.includes(item))
        arr.push(item);
      });
      arr = a.removeDuplicates(arr);
    }
    else {
      arr = array1.concat(array2);
      arr = a.removeDuplicates(arr);
    }
    return arr;
};

module.exports.clean = (array: Array<any>): Array<any> => {
    let arr = array.filter(item => !['', null, undefined, NaN].includes(item));
    return arr;
};

const flatten = (a: any, shallow?: any, r?: Array<any>): Array<any> => {
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

module.exports.flatten = flatten;

module.exports.swapByPosition = (array: Array<any>, pos1: number, pos2: number): Array<any> => {
    let temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
    return array;
};

module.exports.swapByValues = (array: Array<any>, value1: any, value2: any): Array<any> => {
    if(!array.includes(value1) || !array.includes(value2))
    return array;
    array = a.swapByPosition(array, array.indexOf(value1), array.indexOf(value2));
    return array;
};

module.exports.perform = (array: Array<number>, operation: string): number => {
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

module.exports.arrayToObject = (array: Array<any>): Object => {
    let obj = {}; 
    obj = Object.assign({}, array); 
    return obj; 
};

module.exports.slide = (array: Array<any>, steps: number, direction?: string): Array<any> => {
    let times = steps > array.length ? steps % array.length : steps;
    return array.concat(array.splice(0, (direction && direction === 'right' ? array.length - times : times)));
};
