const student =
{
    id: 181,
    name: 'Rashed',
    money: 7000,
    department: 'CSE',
    isRich: true,
    subjects: ['physics1', 'C', 'Java', 'C++', 'Economics', 'Robotics'],
    bestFriend: {
        name: 'Kobutor',
        department: 'Rahesd home',
        zone: 'comfort'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam.');
    },
    giveTreat: function (expense, tips) {
        this.money = this.money - expense - tips;
        return this.money;
    }
}
student.takeExam();

const treat = student.giveTreat(1000, 100);
console.log(treat);