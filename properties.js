const bottle = {
    color: 'yellow',
    price: '50',
    hold: 'water',
    isCleaned: true
};
//1.getting all properties name(keys)
const keys = Object.keys(bottle);
// console.log(keys);

//2.getting all properties value
const values = Object.values(bottle);
// console.log(values);

//3.getting all pairs
const pairs = Object.entries(bottle);
// console.log(pairs);

//5. seal
/* Object.seal(bottle);
 bottle.price = 188;
 console.log(bottle); */

//6. seal
Object.freeze(bottle);
bottle.price = 188;
console.log(bottle);

//4.delete property
delete bottle.isCleaned;
// console.log(bottle);

