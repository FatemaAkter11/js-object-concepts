/* 
for(let i = 0; i<10;i++){}
for(const num of numbers){} // array
for(const prop in bottle){} // object
*/

const bottle = {
    color: 'yellow',
    price: '50',
    hold: 'water',
    isCleaned: true
};
//for in using by object
for (const prop in bottle) {
    // console.log(prop, bottle[prop]);
}

//for of using by keys because this is array
const keys = Object.keys(bottle);
// console.log(keys);
for (const prop of keys) {
    // console.log(prop, bottle[prop]);
}

//advanced(entries) using by for of
const entries = Object.entries(bottle);
// console.log(entries);
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}