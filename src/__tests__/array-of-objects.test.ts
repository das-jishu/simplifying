const ao = require('./../index.ts');

test('TEST - Converting array of objects to an object', () => {
    expect(ao.arrayOfObjectsToObject([
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
    expect(ao.sortByKeyField([
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
  
    expect(ao.sortByKeyField([
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
  
    expect(ao.sortByKeyField([
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
    expect(ao.getFields([
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
  
    expect(ao.getFields([
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
    expect(ao.getOneField([
      { id: 123, name: "dave", age: 23 },
      { id: 456, name: "chris", age: 23 },
      { id: 789, name: "bob", age: 23 },
      { id: 101, name: "tom", age: 23 },
      { id: 102, name: "tim", age: 23 }
    ], 'name')).toStrictEqual(['dave', 'chris', 'bob', 'tom', 'tim']);
  });
  
  test('TEST - Search by key field in array of objects', () => {
    expect(ao.searchByKeyField([
      { id: 123, name: "dave", age: 23 },
      { id: 456, name: "chris", age: 23 },
      { id: 789, name: "bob", age: 23 },
      { id: 101, name: "tom", age: 23 },
      { id: 102, name: "tim", age: 23 }
    ], 'id', 123)).toStrictEqual([{ id: 123, name: "dave", age: 23 }]);
  
    expect(ao.searchByKeyField([
      { id: 123, name: "dave", age: 23 },
      { id: 456, name: "chris", age: 23 },
      { id: 789, name: "bob", age: 23 },
      { id: 101, name: "tom", age: 23 },
      { id: 102, name: "tim", age: 23 }
    ], 'name', 'bob', ['id', 'age'])).toStrictEqual([{ id: 789, age: 23 }]);
  });
  
  test('TEST - Delete multiple instances by keyField', () => {
    expect(ao.deleteByKeyField([
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
    expect(ao.getKeys([
      { id: 123, name: "dave", age: 23 },
      { id: 456, name: "chris", age: 23 },
      { id: 789, name: "bob", age: 23 },
      { id: 101, name: "tom", age: 23 },
      { id: 102, name: "tim", age: 23 }
    ])).toStrictEqual(['id', 'name', 'age']);
  });

  test('TEST - Finding objects from an array', () => {
    expect(ao.findObjects([
      { id: 123, name: "dave", age: 23 },
      { id: 456, name: "chris", age: 23 },
      { id: 789, name: "bob", age: 23 },
      { id: 101, name: "tom", age: 23 },
      { id: 102, name: "tim", age: 23 }
    ], (item) => !(item.id < 105) )).toStrictEqual([
      { id: 123, name: "dave", age: 23 },
      { id: 456, name: "chris", age: 23 },
      { id: 789, name: "bob", age: 23 }
    ]);
  });