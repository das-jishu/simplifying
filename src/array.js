var a = require('./array.js');
module.exports.range = function (array, start, end) {
    var result = [];
    for (var i = start; i < end; i++)
        result.push(array[i]);
    return result;
};
module.exports.shuffle = function (arr) {
    var array = arr;
    var currentIndex = array.length, temp, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
};
module.exports.removeDuplicates = function (array) {
    var arr = [];
    array.forEach(function (item) {
        if (!arr.includes(item))
            arr.push(item);
    });
    return arr;
};
module.exports.pickRandom = function (array, n, unique) {
    var arr = a.shuffle(array);
    if (unique && unique === true) {
        arr = a.removeDuplicates(arr);
    }
    var rand = [];
    var i = 0, k = 0;
    while (n > k) {
        if (i >= arr.length) {
            arr = a.shuffle(arr);
            i = 0;
        }
        rand.push(arr[i]);
        i++;
        k++;
    }
    return rand;
};
module.exports.countItem = function (array, item) {
    var c = 0;
    array.forEach(function (x) {
        if (x === item)
            c++;
    });
    return c;
};
module.exports.countAll = function (array) {
    var result = new Map();
    var arr = a.removeDuplicates(array);
    arr.forEach(function (item) {
        result.set(item, a.countItem(array, item));
    });
    return result;
};
module.exports.searchItems = function (array, item) {
    var positions = [];
    if (!array.includes(item))
        return [-1];
    array.forEach(function (value, index) {
        if (value === item)
            positions.push(index);
    });
    return positions;
};
module.exports.removeItems = function (array, item) {
    var result = [];
    result = array.filter(function (i) { return i != item; });
    return result;
};
module.exports.toArray = function (x) {
    var y = x.toString();
    var arr = [];
    for (var i = 0; i < y.length; i++) {
        var c = y.charAt(i);
        if (typeof (x) === 'number' && c != '.')
            arr.push(parseInt(c));
        else
            arr.push(c);
    }
    return arr;
};
module.exports.merge = function (array1, array2, type) {
    var arr = [];
    if (type && type === 'merge-all')
        arr = array1.concat(array2);
    else if (type && type === 'common') {
        array1.forEach(function (item) {
            if (array2.includes(item))
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
module.exports.clean = function (array) {
    var arr = array.filter(function (item) { return !['', null, undefined, NaN].includes(item); });
    return arr;
};
var flatten = function (a, shallow, r) {
    if (!r) {
        r = [];
    }
    if (shallow) {
        return r.concat.apply(r, a);
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i].constructor == Array) {
            flatten(a[i], shallow, r);
        }
        else {
            r.push(a[i]);
        }
    }
    return r;
};
module.exports.flatten = flatten;
module.exports.swapByPosition = function (array, pos1, pos2) {
    var temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
    return array;
};
module.exports.swapByValues = function (array, value1, value2) {
    if (!array.includes(value1) || !array.includes(value2))
        return array;
    array = a.swapByPosition(array, array.indexOf(value1), array.indexOf(value2));
    return array;
};
module.exports.perform = function (array, operation) {
    var result = 0;
    switch (operation) {
        case 'sum':
            array.forEach(function (item) { return result += item; });
            break;
        case 'product':
            result = 1;
            array.forEach(function (item) { return result *= item; });
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
            array.forEach(function (item) { return result += item; });
            result /= array.length;
            break;
        default:
            array = array.sort();
            result = array[array.length - 1];
    }
    return result;
};
module.exports.arrayToObject = function (array) {
    var obj = {};
    obj = Object.assign({}, array);
    return obj;
};
module.exports.slide = function (array, steps, direction) {
    var times = steps > array.length ? steps % array.length : steps;
    return array.concat(array.splice(0, (direction && direction === 'right' ? array.length - times : times)));
};
module.exports.jump = function (array, steps) {
    var arr = [];
    for (var i = 0; i < array.length; i += steps) {
        arr.push(array[i]);
    }
    return arr;
};
