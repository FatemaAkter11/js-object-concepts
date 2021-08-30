const first = { x: 1 };
const second = { x: 1 };
const third = first;
//if (first === second)
if (first === third) {
    // console.log('Objects are equal');
}
else {
    // console.log('Objects are different');
}

const first1 = { a: 1, b: 2 };
const second1 = { b: 2, a: 1 };
// console.log(JSON.stringify(first1));
// console.log(JSON.stringify(second1));
if (JSON.stringify(first1) === JSON.stringify(second1)) {
    // console.log('objects are equal');
}
else {
    // console.log('Objects are different');
}


const first2 = { a: 1, b: 2 };
const second2 = { b: 2, a: 1, c: 9 };
function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}

const isEqual = compareObjects(first2, second2);
console.log(isEqual);

