//1.Using object literal
const student = { name: 'Rashedul Islam', job: 'businessman' };
// console.log(student.name);

//2.object constructor
const person = new Object();
// console.log(person);


//3.object inheritance
// const human = Object.create(null);
const human = Object.create(student);
// console.log(human.job);

//4.object using by class(syntactic suger)
class people {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const man = new people('Akkas', 12);
// console.log(man);

//5.function
function member(name) {
    this.name = name;
}
const women = new member('Aisha');
console.log(women);

