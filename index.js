/* 
    Задание 1:

    Вывести в консоль с помощью цикла FOR все четные числа от 10 до 50
*/

for (let x = 10; x <= 50; x++){
    if (x % 2 === 0) {
    console.log(x);
    }
}

/* 
    Задание 2:

    Необходимо создать объект в котором вы опишите самого себя в формате : "свойство: значение"

    Список свойств:

    - Имя(string)
    - Фамилия(string)
    - Возраст(number)
    - Есть ли домашние животные(boolean)
*/

const myself = {
    firstName : 'Tatyana',
    lastName : 'Smolnykova', 
    age : 27,
    pets : true
}
console.log(myself);


/* 
    Задание 3:

    Отрывок из текста А.С Пушкин, Капитанская дочка был разбит на небольшие кусочки и помещен в массив. 
    Необходимо собрать этот текст из массива и придать ему первоначальный вид.

    Текст до разбивки на части:

    "В ту же ночь приехал я в Симбирск, где должен был пробыть сутки для закупки нужных вещей,
    что и было поручено Савельичу. Я остановился в трактире. Савельич с утра отправился по лавкам"

    Массив: 
    const array = [
        'я в Симбирск,',
        'в трактире.',
        'с утра',
        'В ту же ночь',
        'Я остановился',
        'для закупки',
        'что и было поручено Савельичу.',
        'приехал,',
        'где должен был',
        'нужных вещей',
        'отправился по лавкам',
        'пробыть сутки',
        'Савельич'
    ];

    const order = [3, 7, 0, 8, 11, 5, 9, 6, 4, 1, 12, 2, 10];

   итоговый текст должен быть собран из массива array и результат записать в переменную result
*/

const order = [3, 7, 0, 8, 11, 5, 9, 6, 4, 1, 12, 2, 10];
const array = [
    ' я в Симбирск,',
    'в трактире. ',
    'с утра ',
    'В ту же ночь ',
    'Я остановился ',
    'для закупки ',
    'что и было поручено Савельичу. ',
    'приехал,',
    'где должен был ',
    'нужных вещей ',
    'отправился по лавкам ',
    'пробыть сутки ',
    'Савельич '
];

let result = '';
for (index = 0; index < array.length; index++ ) {
    result += array[order[index]];
}
console.log(result);



/* 
    Задание 4:

    Напишите функцию, в теле которой будет находится следующий код:

    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);

    firstName и lastName - это параметры функции

    При вызове функции передайте ей, в качестве аргумента, свое имя и фамилию.
*/


// Function expression: starts with "var"

const fullName = function(firstName, lastName) {
    return `${firstName} ${lastName}`;
   }

   console.log(fullName("Tatyana", "Smolnykova"));
   console.log(fullName);






/* 
    Задание 5:

    Вывести в консоль с помощью цикла WHILE все нечетные числа от 21 до 67
    
*/

let x = 21; 
while (x <= 67) {
    if (x % 2 === 1){
        console.log(x);
    }
    x++;
}
