const b = require('./array-of-objects.ts');

module.exports.arrayOfObjectsToObject = (array: Array<any>, keyField: string): Object =>
Object.assign({}, ...array.map(item => ({[item[keyField]]: item})));

module.exports.sortByKeyField = (array: Array<Object>, keyField: string, order?: string): Array<Object> => {
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

module.exports.getFields = (array: Array<Object>, fields: Array<any>): Array<Object> => {
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

module.exports.getOneField = (array: Array<Object>, field: string): Array<any> => {
    let result: Array<any> = [];
    array.forEach( item => {
      result.push(item[field as keyof typeof item]);
    });
    return result;
};

module.exports.searchByKeyField = (array: Array<Object>, searchField: string, searchValue: any, reqFields?: Array<any>): Array<Object> => {
    if(array.length === 0) return array;
  
    let result: Array<Object> = [];
    let fields = (reqFields) ? reqFields : Object.keys(array[0]);
    array.forEach( item => {
      if(item.hasOwnProperty(searchField) && item[searchField as keyof typeof item] === searchValue)
      result.push(item);
    });
    result = b.getFields(result, fields);
    return result;
};

module.exports.deleteByKeyField = (array: Array<Object>, field: string, value: any): Array<Object> => {
    let result: Array<Object> = [];
    array.forEach( item => {
      if(item[field as keyof typeof item] !== value)
      result.push(item);
    });
    return result;
};

module.exports.getKeys = (array: Array<Object>): Array<string> => {
    return (!array) ? [] : Object.keys(array[0]);
};