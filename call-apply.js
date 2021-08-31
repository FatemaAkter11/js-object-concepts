const student =
{
    id: 181,
    name: 'Rashed',
    money: 7000,
    department: 'CSE',
    giveTreat: function (expense, tips, tax) {
        this.money = this.money - expense - tips - tax;
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
//call
student.giveTreat.call(student2, 500, 100, 50);

//apply
student.giveTreat.apply(student3, [1000, 100, 100]);