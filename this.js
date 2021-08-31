//console.log(this); //output: window

const student =
{
    id: 181,
    name: 'Rashed',
    money: 7000,
    department: 'CSE',
    giveTreatArrow: () => {
        console.log(this); //output: window
    },
    giveTreatInside: function () {
        const myArrow = () => console.log(this); //output: property
        myArrow();
    },
    giveTreat: function (expense) {
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
}
const student2 =
{
    id: 182,
    name: 'Shaker',
    money: 5000,
    department: 'CSE',
}
const student3 =
{
    id: 183,
    name: 'Safia',
    money: 4000,
    department: 'CSE',
}


function add(a, b) {
    //console.log(this); //output: window
}