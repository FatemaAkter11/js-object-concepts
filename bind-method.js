const student =
{
    id: 181,
    name: 'Rashed',
    money: 7000,
    department: 'CSE',
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
student.giveTreat(100);
const shakerTreat = student.giveTreat.bind(student2);
shakerTreat(1000);
shakerTreat(200);
student.giveTreat(500);
const safiaTreat = student.giveTreat.bind(student3);
safiaTreat(2000);