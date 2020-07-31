var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var b = require('./array-of-objects.js');
module.exports.arrayOfObjectsToObject = function (array, keyField) {
    return Object.assign.apply(Object, __spreadArrays([{}], array.map(function (item) {
        var _a;
        return (_a = {}, _a[item[keyField]] = item, _a);
    })));
};
module.exports.sortByKeyField = function (array, keyField, order) {
    if (array.length === 0)
        return [];
    return array.sort(function (a, b) {
        var x = a[keyField];
        var y = b[keyField];
        if (order && order === 'desc')
            return ((x < y) ? 1 : ((x > y) ? -1 : 0));
        else
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
};
module.exports.getFields = function (array, fields) {
    if (array.length === 0 || fields.length === 0)
        return array;
    var result = array.map(function (item) {
        var obj = {};
        fields.forEach(function (field) {
            var _a;
            Object.assign(obj, (_a = {}, _a[field] = item[field], _a));
        });
        return obj;
    });
    return result;
};
module.exports.getOneField = function (array, field) {
    var result = [];
    array.forEach(function (item) {
        result.push(item[field]);
    });
    return result;
};
module.exports.searchByKeyField = function (array, searchField, searchValue, reqFields) {
    if (array.length === 0)
        return array;
    var result = [];
    var fields = (reqFields) ? reqFields : Object.keys(array[0]);
    array.forEach(function (item) {
        if (item.hasOwnProperty(searchField) && item[searchField] === searchValue)
            result.push(item);
    });
    result = b.getFields(result, fields);
    return result;
};
module.exports.deleteByKeyField = function (array, field, value) {
    var result = [];
    array.forEach(function (item) {
        if (item[field] !== value)
            result.push(item);
    });
    return result;
};
module.exports.getKeys = function (array) {
    return (!array) ? [] : Object.keys(array[0]);
};
module.exports.findObjects = function (array, func) {
    var result = [];
    result = array.filter(func);
    return result;
};
