// Необходимо выполнить в отдельном js файле, подключенному к отдельной HTML странице
// 1) Создать массив week и записать в него дни недели в виде строк
// ·        Вывести на экран все дни недели
// ·        Каждый из них с новой строчки
// ·        Выходные дни - жирным шрифтом
// ·        Текущий день - курсивом (пока можно задать текущий день вручную, без работы с объектом даты)
let week = ["Понедельник","Вторник","Среда","Четверг","Пятница","<strong><em>Сyббота</em>","Воскресенье</strong>"];

for ( let i = 0; i < 7; i++){
    document.write(week[i] + "<br>" );
}
console.log(week);

// 2) Создать массив arr = []
// ·        Записать в него 7 любых многозначных чисел в виде строк
// ·        Вывести в консоль только те, что начинаются с цифры 3 или 7 (Должны присутствовать в массиве)
let arr = ['3452', '7827', '1342', '4569', '7567', '6356', '983'];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith('3') || arr[i].startsWith('7')) {
        console.log(arr[i]);
    }
} 
// 3) Добавить папку с усложненным заданием в свой репозиторий на GitHub

// let a = 10,
//     b = 10;
// console.log(--a);
// console.log(b++);

