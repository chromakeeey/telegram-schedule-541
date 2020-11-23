const lessonsSunday = [];

const lessonsSaturday = [];

const lessonsMonday = [
    //{ timeStart: [8, 30], timeEnd: [9, 50], name: [names.mobile] },
    { timeStart: [10, 5], timeEnd: [11, 25], name: [names.met] },
    { timeStart: [12, 0], timeEnd: [13, 20], name: [groupLesson(names.web, 1), groupLesson(names.pract, 2)] },
    { timeStart: [13, 35], timeEnd: [14, 55], name: [groupLesson(names.pract, 1), groupLesson(names.web, 2)] },
    //{ timeStart: [15, 10], timeEnd: [16, 30], name: [groupLesson(names.met, 1), groupLesson(names.engsoft, 2)] }
]

const lessonsTuesday = [
    { timeStart: [8, 30], timeEnd: [9, 50], name: [groupLesson(names.mobile, 1)] },
    { timeStart: [10, 5], timeEnd: [11, 25], name: [names.engsoft] },
    { timeStart: [12, 0], timeEnd: [13, 20], name: [names.db] },
    { timeStart: [13, 35], timeEnd: [14, 55], name: [groupLesson(names.mobile, 2)] },
    //{ timeStart: [15, 10], timeEnd: [16, 30], name: [names.mobile] },
]

const lessonsWednesday = [
    { timeStart: [8, 30], timeEnd: [9, 50], name: [groupLesson(names.net, 1), groupLesson(names.web, 2)] },
    { timeStart: [10, 5], timeEnd: [11, 25], name: [names.lan] },
    { timeStart: [12, 0], timeEnd: [13, 20], name: [groupLesson(names.web, 1), groupLesson(names.net, 2)] },
    //{ timeStart: [13, 35], timeEnd: [14, 55], name: [names.lan] },
    //{ timeStart: [15, 10], timeEnd: [16, 30], name: [groupLesson(names.web, 2)] },
];

const lessonsThursday = [
    { timeStart: [8, 30], timeEnd: [9, 50], name: [names.psyc] },
    { timeStart: [10, 5], timeEnd: [11, 25], name: [names.mobile] },
    { timeStart: [12, 0], timeEnd: [13, 20], name: [names.economic] },
    { timeStart: [13, 35], timeEnd: [14, 55], name: [names.mov] },
    { timeStart: [15, 10], timeEnd: [16, 10], name: [names.vih] },
]

const lessonsFriday = [
    { timeStart: [8, 30], timeEnd: [9, 50], name: [groupLesson(names.web, 1), groupLesson(names.db, 2)] },
    { timeStart: [10, 5], timeEnd: [11, 25], name: [names.lan] },
    { timeStart: [12, 0], timeEnd: [13, 20], name: [groupLesson(names.db, 1), groupLesson(names.web, 2)] },
    //{ timeStart: [13, 35], timeEnd: [14, 55], name: [groupLesson(names.mobile, 2)] },
]

const schedule = [
    lessonsSunday, lessonsMonday, lessonsTuesday, 
    lessonsWednesday, lessonsThursday, lessonsFriday, 
    lessonsSaturday
]

const lessonsType = [ 'Відсутньо', 'Дистанційно', 'Дистанційно', 'Дистанційно', 'Дистанційно', 'Дистанційно', 'Відсутньо' ]
const daysName = [ 'Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четверг', 'П\'ятниця', 'Суббота' ]
const daysNameParams = [ 'Неділю', 'Понеділок', 'Вівторок', 'Середу', 'Четверг', 'П\'ятницю', 'Субботу' ]

module.exports = [
    schedule
]