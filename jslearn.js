//let num = 3;
//alert(num);

/* let a = 10;
let b = 2;

alert (a+b);
alert (a-b);
alert (a*b);
alert (a/b); */

// let c = 15;
// let d = 2;

// let result = c+d;
// alert(result);

// let age = 20;
// alert('Мне '+age+' лет!');

// let name = prompt('Как вас зовут?', 'Your name');
// alert('Ваше имя '+name);

/* let number = prompt('Введите число','число');
alert('Квадрат вашего числа = '+number*number); */

/* let str = 'abcde';
alert(str[0]);
alert(str[2]);
alert(str[4]); */

/* let num = '12345';
alert(num[0]*num[1]*num[2]*num[3]*num[4]); */

/* let minute = 60;
let hour = 60 * 60;
let day = 60 * 60 * 24;
let month = 60 * 60 * 24 * 30;

alert('В часе = '+hour+' секунд');
alert('В сутках = '+day+' секунд');
alert('В месяце = '+month+' секунд'); */

/* let hour = 21;
let minute = 54;
let second = 30;

alert('Время сейчас = '+hour+':'+minute+':'+second); */

/* let number = 8;
alert(number*number); */

/* let num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
alert(num); */

/* var num = 10;
num++;
++num;
num--;
alert(num); */

/* let arr = ['a','b','c'];
alert(arr);
alert(arr[0]);
alert(arr[1]);
alert(arr[2]); */

/* let a = 11;
let b = 14;

if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
  alert('Верно');
} 
else {
  alert('Неверно');
} */

/* let num = prompt('Введите значение от 1 до 4', '0');
let result = '';

switch (num) {
  case '1':
    result = 'зима';
   break;
    
    case '2':
    result = 'весна';
   break;
    
    case '3':
    result = 'лето';
   break;
    
    case '4':
    result = 'осень';
   break;
    
}

alert(result); */


/* let day = prompt('Введите числом какой сегодня день','0');

if (day >= 1 && day <= 10) {
  alert('Первая декада месяца');
}

if (day > 10 && day <= 20) {
  alert('Вторая декада месяца');
}

if (day > 20 && day <= 31) {
  alert('Третья декада месяца');
} */

// let month = prompt('Введите месяц','1');

// if (month <= 2 || month == 12) {
//   alert('Сейчас зима');
// }

// if (month >= 3 && month <= 5 ) {
//   alert('Сейчас весна');
// }

// if (month >= 6 && month <= 8 ) {
//   alert('Сейчас лето');
// }

// if (month >= 9 && month <= 11 ) {
//   alert('Сейчас осень');
// }

// if (month == 0) {
//   alert('Нулевого месяца не существует');
// }

// if (month > 12) {
//   alert('Месяцев всего 12');
// }

/* let arr = 'eefaczvet';

if (arr[0] === 'e') alert ('Да');
else alert ('Нет'); */

/*  let numArr = '12345';

if (Number(numArr[0]) === 1 || numArr[0] === 2 || numArr[0] === 3) alert('Да');  else alert('Нет'); */

/*  let numStr = '51';

alert (Number(numStr[0])+Number(numStr[0])+Number(numStr[1])); */

/* let numStr = '220112';
if ( Number(numStr[0])+Number(numStr[1])+Number(numStr[2]) == Number(numStr[3])+Number(numStr[4])+Number(numStr[5]) ) {
  alert('true');
} else alert('false'); */

/* let a = 10, 
    b = 3;

alert(a%b); */

/* let a = prompt('Введите число a','0'),
    b = prompt('Введите число b','0'),
    c = a%b

if (c == 0) {
  alert('Делиться без остатка.\nРезультат деления = ' + a/b);
}

else {
  alert('Делитьтся с остатком.\nОстаток от деления = ' + c);
} */

/*===================================*/
/*========Циклы while и for==========*/

/*===================================*/

/* Синтаксис:
while (пока выражение истинно) {
  Выполняется цикл, до того момента, 
  пока он е вернёт ложь!
  Так же, если выражение изначально 
  ложно,то цикл не выполниться 
  ни разу!
} */

/*===================================*/

/*===================================*/

/* Пример:
let i = 0;
while (i < 10) {
  i++;
  alert(i);
} */

/*===================================*/

/* Синткасис:
for (начальные команды; условия окончания цикла; команды после прохода цикла) {
  тело цикла
}
Начальные команды - это то, что выполнится перед стартом цикла. Они выполнятся только один раз. Обычно там размещают начальные значения счетчиков, пример: i = 0.

Условие окончания цикла - пока оно истинное, цикл будет работать, пример: i < 10.

Команды после прохода цикла - это команды, которые будут выполнятся каждый раз при окончании прохода цикла. Обычно там увеличивают счетчики, например: i++.

ЕСЛИ НЕОБХОДИМО ВЫПОЛНИТЬ НЕСКОЛЬКО КОМАНД В КРУГЛЫХ СКОБКАХ, ТО УКАЗЫВАЕМ ИХ ЧЕРЕЗ ЗАПЯТУЮ.
*/

/*===================================*/

/*===================================*/

/* Пример:
for (let i = 0; i < 10; i++) {
  alert(i);
} */

// Пример с нексолькими командами:
/* for (let i = 0, j = 3; i < 15; i += j;) {
  alert(i);
}  */

// Пример с массивами:
/* let arr = [1,2,3,4,5,6];
for (let i = 0; i < arr.length; i++) {
  alert(arr[i]);
} */



/*===================================*/

/*===================================*/

/* Для перебора объекта используется так называемый цикл for-in. Давайте посмотрим, как он работает.

Пусть у нас дан такой объект:

var obj = {Коля: 200, Вася: 300, Петя: 400};
Давайте выведем его ключи. Для этого используем такую конструкцию: for (key in obj), где obj - это объект, который мы перебираем, а key - это переменная, в которую последовательно будут ложится ключи объекта (ее название может быть любым, какое придумаете - такое и будет).

То есть в данном цикле не надо указывать условие окончания - он будет перебирать ключи объекта, пока они не закончатся.

Итак, вот так мы выведем все ключи объекта (по очереди):

var obj = {Коля: 200, Вася: 300, Петя: 400};
for (key in obj) {
	alert(key); //выведет 'Коля', 'Вася', 'Петя'
} */

/*===================================*/

// Пример с объекатми:
/* let obj = {Коля : 200, Вася: 300, Петя: 400};
for (key in obj) {
  alert(key);
  alert(obj[key]);
} */

//Пример с досрочным прерыванием цикла
/* let arr = [1,2,3,4,5];
for (let i = 0; i < arr.length; i++) {
  alert (arr[i]);
  if (arr[i] == 3) break; 
  //Используется переменная break для прерывания.
} */

/*===================================*/

/*===================================*/
/*========Возведение в степень=======*/

/*let a = 8;
let b = Math.pow(a , 2); //Math.pow(число, степень).
let c = Math.pow(b, -2); //Так же можно в минусовой степени.
alert(c);*/

/*===================================*/



/*===================================*/
/*==Возведение в квадратный корень.==*/

/* let a = 25;
let b = Math.sqrt(a); //Math.sqrt(положительное число).
let c = Math.pow(-b); //Отрицательное число вернёт NaN.
alert(c); */

/*===================================*/

/*===================================*/
/*=======Задачи с массивами==========*/
/* let i = 0;

while (i < 100) {
  document.write(i + '<br>');
  i++;
} */

/* for (let i = 0; i <= 100; i++) {
  document.write(i + '<br>');
} */


/* let i = 11;

while (i <= 33) {
  document.write(i + '<br>');
  i++;
} */

/* for (let i = 11; i <= 33; i++) {
  document.write(i + '<br>');
} */

/* let i = 0;

while (i <= 100) {
  document.write(i + '<br>');
  i += 2;
} */

/* for (let i = 0; i <= 100; i+=2) {
  document.write(i + '<br>');
} */

/* let i = 0;
let summ = 0;
while (i <= 100) {
  summ += i;
  i++;
}

document.write(summ); */

/* let summ = 0
for (let i = 0; i <= 100; i++) {
  summ += i;
}

document.write(summ); */

/* let arr = [1,2,3,4,5];

for (let i = 0; i < arr.length; i++) {
  document.write(arr[i] + '<br>');
} */

/* let arr = [1,2,3,4,5];
let result = 0;
for (let i = 0; i < arr.length; i++) {
  result += arr[i];
}

document.write(result); */

/* let obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};

for (key in obj) {
  document.write(key + '<br>');
} */

/* let obj = {Коля: 200, Вася: 300, Петя: 400};

for (key in obj) {
  document.write(key + ' - зарплата ' + obj[key] + ' долларов. <br>');
} */

/* let arr = [2,5,9,15,0,4];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 3 && arr[i] < 10) {
    document.write(arr[i] + '<br>');
  }
} */

/* let arr = [1,2,3,-1,-2,-3];
let result = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    result += arr[i];
  }
}

document.write(result); */

/* let arr = [1,2,5,9,8,13,10,10];
let countNum = 0;

for (let i = 0, j = 0; i < arr.length; i++) {
  if (arr[i] == 4) {
    j++;
    countNum = j;
  }
}

if (countNum > 0) {
  alert('В массиве есть четвёрки.\nИх '+ countNum +' штука(и)');
}

else {
  alert('Увы, четвёрок - нет');
} */

/* let arr = [1,2,3,4,5,6,7,8,9];
let result = '';

for (let i = 0; i < arr.length; i++) {
  arr[i] = '-'+arr[i];
  result += arr[i];
}

document.write(result+'-'); */

/* let days = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];

for (let i = 0; i < days.length; i++) {
  if (days[i] == 'Пятница') {
    document.write('<strong>'+days[i]+'</strong><br>')
  }
  
  else {
    document.write(days[i]+'<br>')
  }
} */

/* let arr = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];

let day = '';

for (let i = 0; i < arr.length; i++) {
   if (arr[i] == 'Пятница') {
    day = arr[i];
    document.write('<i>'+day+'</i><br>')
  }
  
  else {
    document.write(arr[i]+'<br>');
  }
}

document.write('<br>Переменная day = '+day); */

/* let n = 1000,
    num = 0;

for (let i = 0; i < 1000; i++) {
  if (n > 50) {
    n /= 2;
  }
  else {
    num = i;
    break;
  }
}

document.write('Количество итераций = '+ num); */
/*===================================*/
/*=============Конец.================*/



/*===================================*/
/*=Теория по матеметическим функциям=*/

/* Функция Math.abs() возвращает модуль числа, т.е из отрицательного числа делает положительное.

Синтаксис:
Math.abs(число);
/*===================================*/
/* Функция Math.round выполняет округление числа по правилам МАТЕМАТИКИ (если число с плавающей точкой больше 5, то округляется в большую сторону.)

Синтаксис:
Math.round(число); */
/*===================================*/
// Функция Math.ceil тоже самое что Math.round, но возвращает всегда в большую сторону.

// Синтаксис:
// Math.ceil(число);
/*===================================*/
// Функция Math.floor тоже самое что Math.round, но возвращает всегда в меньшую сторону.

// Синтаксис:
// Math.floor(число);
/*===================================*/
// Функция Math.min возвращает минимальное число из группы чисел, переданных в функцию.

// Если в функцию ничего не передано, то вернёт Infinity.

// По умолчанию функция не работает с массивами, но можно применить такой приём: Math.min.apply(null, arr),
//   где arr - произвольный массив.

// Синтаксис:
// Math.min(число, число, число ...);
/*===================================*/
// Функция Math.max тоже самое что Math.min, но возвращает самое большое значение из чисел, переданных в функцию.

// Синтаксис:
// Math.max(число, число, число ...);
/*===================================*/
// Функция Math.sqrt возвращает квадратный корень положительного числа. Если число отрицательное, вернёт NaN;

// Синтаксис:
// Math.sqrt(положительное число); //отрицательное вернёт NaN
/*===================================*/
// Функция Math.pow возводит число в заданную степень. Первый параметр - число, второй - степень.

// Синтаксис:
// Math.sqrt(число, степень);
/*===================================*/
// Функция Math.pow возводит число в заданную степень. Первый параметр - число, второй - степень.

// Синтаксис:
// Math.sqrt(число, степень);
/*===================================*/
// Функция Math.random возвращает случайное дробное число от 0 до 1.

// Синтаксис:
// Math.random();

// Чтобы получить случайно число в определенном промежутке (дробное или целое) следует пользоваться специальными приемами:

// СЛУЧАЙНОЕ ДРОБНОЕ ЧИСЛО МЕЖДУ min и max
// function getRandomArbitary(min,max) {
//   return Math.random()*(max-min)+min;
// }

// СЛУЧАЙНОЕ ЦЕЛОЕ ЧИСЛО МЕЖДУ min и max
// function getRandomInt(min,max) {
//   return Math.floor(Math.random()*(max-min+1))+min;
// }

// ПРИМЕР ЦЕЛОГО ЧИСЛА
// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// document.write(getRandomInt(10, 100));
/*===================================*/
// Функция isNaN проверяет, является ли переданный параметр числом или нет.

// Функция вернет true, если параметр не является число и false, если является.

// Принцип работы: переданный параметр преобразуется к числу и, если это не число (строка, массив и т.п.), то он преобразуется в NaN, ну, а isNaN проверяет - NaN у нас получился после преобразования или нет.

// Учтите, что, к примеру true преобразуется не к NaN, а к числу 1. Есть и другие подводные камни, подробносить в самом типе NaN.

// Синтаксис:
// isNaN(значение);
/*===================================*/
// Функция isFinite похожа на функцию isNan, только она возвращает false, если значение является плюс или минус бесконечностью (Infinity или -Infinity) или не числом (NaN), в остальных случаях вернёт true.

// Синтаксис:
// isFinite(значение);
/*===================================*/
// Функция parseInt преобразует строку в целое число.

// Это нужно для значений типа 12px - когда вначале стоит число, а потом единицы измерения. Если применить функцию к 12px, то она вернёт 12 (С ТИПОМ ЧИСЛО, А НЕ СТРОКА).

// Если вначале стоит не число, то вернёт NaN.

// Так же, если указать систему счисления, то функция примет значение в этой системе и вернёт в десятичной.
// !Дробная часть отбрасывается!

// Синтаксис:
// parseInt(строка, система счисления);
/*===================================*/
// Функция parseFloat преобразует строку в число с плавающей точкой, если она есть.

// Это нужно для значений типа 12.5px - когда вначале стоит число, а потом единицы измерения. Если применить функцию к 12.5px, то она вернёт 12.5 (С ТИПОМ ЧИСЛО, А НЕ СТРОКА).

// Если вначале стоит не число, то вернёт NaN.

// Так же, если указать систему счисления, то функция примет значение в этой системе и вернёт в десятичной.

// Синтаксис:
// parseFloat(строка, система счисления);

/*===================================*/
// Метод toFixed производите округление числа до укзаннаого знака в дробной части.

// Количество знаков указывается параметром. По умолчанию берётся 0 знаков, т.е. округление до целого числа.

// Так же параметр может быть отрицательным, в этом случае округляться будет уже не дробная часть, а целая.

// Синтаксис:
// число.toFixed(количество знаков в дробной части); */

/*=========================================*/
/*=Конец теория по матеметическим функциям=*/

/* let a = 2,
    st = Math.pow(2, 10);
alert(st); */

/* let a = 245,
    sqrt = Math.sqrt(a);
alert(sqrt); */

/* let arr = [4,2,5,19,13,0,10],
    result = 0;

for (let i = 0; i < arr.length; i++) {
  arr[i] = Math.pow(arr[i], 3);
  result += arr[i];
}

document.write(Math.round(Math.sqrt(result))); */

/* document.write(Math.sqrt(379).toFixed(2)); */
/* let num = Math.sqrt(587);
let maxRound = Math.ceil(num);
let minRound = Math.floor(num);

let numRound = {
  ceil: maxRound,
  floor: minRound
};

document.write('Число = '+num);
document.write('<br>');
document.write('Округление в большую сторну = '+numRound.ceil);
document.write('<br>');
document.write('Округление в меньшую сторону = '+numRound.floor); */

/* let num = [4,-2,5,19,-130,0,10],
    maxNum = Math.max.apply(null, num),
    minNum = Math.min.apply(null, num);

document.write('Массив чисел = '+num);
document.write('<br>');
document.write('Максимальное из них = '+maxNum);
document.write('<br>');
document.write('Минимальное из них = '+minNum); */


/* function getRandomInt(min,max) {
   return Math.floor(Math.random()*(max-min+1))+min;
 }


document.write(getRandomInt(1,100)); */
/* function getRandomInt(min,max) {
   return Math.floor(Math.random()*(max-min+1))+min;
}

let arr = [];
let num = 0;
for (let i = 0; i < 10; i++) {
  arr[i] = getRandomInt(1,10);
}

document.write(arr); */

/* let a = 34,
    b = 100;

document.write(Math.abs(a - b)); */

/* let a = 6,
    b = 1,
    c = a - b;

document.write(Math.abs(c)); */

/* let arr = [12,15,20,25,59,79],
    summ = 0,
    centerArif = 0;

for (let i = 0; i < arr.length; i++) {
   summ += arr[i];
   if (i == arr.length - 1) {
     centerArif = summ / arr.length;
     break;
   }
}

document.write(centerArif); */

/*let num = prompt('Введите число из которого нужно найти факториал','0'),
    fakt = 1;

for (let i = 1; i <= num; i++) {
  fakt *= i;
}

document.write(fakt);*/

/*===================================*/
/*===Теория по строковым функциям.===*/

/* Свойство length позволяет узнать длину строки. Под длиной понимается количество символов в ней.

Синтаксис:
строка.length;

let str = 'dasdzxc';
alert(str.length); */

/*===================================*/

/* Метод toUpperCase производит преобразование строки в верхний регистр. При этом возвращается новая строка, а исходная строка не меняется.

Синтаксис:
строка.toUpperCase();

let str = 'Hello World';
alert(str.toUpperCase); */
/*===================================*/

/* Метод toLowerCase производит преобразование строки в нижний регистр. При этом возвращается новая строка, а исходная строка не меняется.

Синтаксис:
строка.toLowerCase();

let str = 'Hello World';
alert(str.toLowerCase); */
/*===================================*/

/* Метод substr возвращает подстроку из строки (исходная строка при этом не изменяется).

Первый параметр задает номер символа, с которого метод начинает отрезать (учти, что нумерация с нуля), а второй параметр - номер символа, на котором следует закончить вырезание (символ с этим номером не включается в вырезанную часть.)

Второй параметр не является обязательным, если он не указна, то вырезаны будут все символы до конца строки.

Если первый параметр больше второго, тогда substring ведет себя, как будто они поменялись местами.

Если какой то из параметров больше длины строки, он считается равным длине строки.

Первый параметр может принимать отрицательные значения. В это случае отсчет символа будет с конца строки. Но конец строки начинается с -1.

СИНТАКСИС И ПРАВИЛА ДЛЯ ФУНКЦИЙ substr, substring, slice - одиннаковые.

Синтаксис:
строка.substring(откуда начать отрезать, до куда отрезать);

let str = 'Hello World';
alert(str.substring(0,)); */
/*===================================*/

/* Метод indexOf осуществляет поиск подстроки в строке.

Метод вернет позицию первого совпаднеия, а если оно не найдено, то -1.

Вторым параметром можно(но не обязательно) передать номер символа, откуда следует начинать поиск.

Метод чувствителен к регистрку символов.

Синтаксис:
строка.indexOf(что ищем, откуда начать поиск);

let str = 'Hello World';
alert(str.indexOf('Hello'));
Вернёт 0 */
/*===================================*/

/* Метод split осуществляет разбиение строки в массив по указанному разделителю.

Разделитель указывается первым необязательным параметром. Если он не задан - вернется вся строка. Если он зада в пустые кавычки - '', то каждый символ строки попадает в отдельный элемент массива.

Вторым необязательным параметром можно указать максимальное количество элементов в получившемся массиве.

Синтаксис:
строка.split(разделитель, максимальное количество элементов);

let str = 'Мне-очень-нравится-JavaScript',
    arr = str.split('-');
document.write(arr);
Вернет Мне,очень,нравится,JavaScript*/
/*===================================*/

/*Метод replace осуществляет поиск и замену частей строки.

Первым параметром принимается подстрока, которую заменяем, а вторым - подстрока, на которую заменяем.

Синтаксис:
строка.replace(что заменяем, на что заменяем);

let str = 'Hello World';
alert(str.replace('Hello', 'Good Bye'));
Вернёт Good Bye World */
/*===================================*/

/* Функция join массив в строку с указанным разделителем.

Синтаксис:
строка.join(разделитель);

let arr = ['Hello','World'],
    str = arr.join('<br>');
document.write(str);
Вернёт Hello World в строке с переносом. */

/* let str = 'aaa@bbb@ccc';
document.write(str.replace(/@/g,'!')); */

/* let str = 'js';
document.write(str.toUpperCase());

let str1 = 'JS';
document.write(str1.toLowerCase()); */

/* let str = 'я учу javascript!';
document.write(str.length); */

/*let str = 'я учу javascript!',
    strSubstr = str.substr(1,4),
    strSubstring = str.substring(1,5),
    strSlice = str.substr(1,4);
document.write(strSubstr);
document.write('<br>');
document.write(strSubstring);
document.write('<br>');
document.write(strSlice);
document.write('<br>');*/

/* let str = 'я учу javascript!',
    pos = str.indexOf('учу');
document.write(pos); */

/*let str = prompt('Введите строку','строка'),
    n = parseInt(prompt('Введите сколько нужно оставить символов', '0')),
    result = '';

if (str.length <= n) {
  result = str;
}

else {
  result = str.slice(0,n)+'...';
}

document.write(result); */

/* let str = 'Я-учу-javascript!';

document.write(str.replace(/-/g,'!')); */

/*let str = 'я учу javascript!',
    splitStr = str.split(' ');

document.write(str);
document.write('<br>');
document.write('['+splitStr+']');

let str1 = 'я учу javascript!',
    splitStr1 = str1.split('');

document.write(str1);
document.write('<br>');
console.log(splitStr1);*/

/* let date = '2025-12-31',
    newDate = date.split('-');
document.write(newDate[2]+'.'+newDate[1]+'.'+newDate[0]); */

/*let arr = ['я','учу','javascript','!'];
document.write(arr.join('+')); */

/* let str = 'какая-то строка',
    arr = str.split('');
for (let i = 0; i < arr.length; i++) {
  if (i == 0) {
    arr[i] = arr[i].toUpperCase();
    break;
  }
}

document.write(arr.join('')); */

/* let str = 'произвольная строка',
    arr = str.split(' '),
    newArr = [];

for (let i = 0; i < arr.length; i++) {
  newArr[i] = arr[i].split('');
  for (let j = 0; j < newArr[i].length; j++) {
    if (j == 0) {
      newArr[i][j] = newArr[i][j].toUpperCase();
      newArr[i] = newArr[i].join('');
      break;
    }
  }
}
document.write(newArr.join(' ')); */

/* let str = 'hello_world_mazafaka_shit_sosi',
    arr = str.split('_'),
    newArr = [];

for (let i = 0; i < arr.length; i++) {
  newArr[i] = arr[i].split('');
  for (let j = 0; j < newArr[i].length; j++) {
    if (j == 0) {
      newArr[i][j] = newArr[i][j].toUpperCase();
      newArr[i] = newArr[i].join('');
      break;
    }
  }
}
document.write(newArr.join('')); */

/* let arr = ['a','b','c'];
arr.unshift('j','g','k');
console.log(arr); */

/* let arr = ['a','b','c','d'];
arr.shift();
console.log(arr); */

/* let arr = ['привет','мой','мир'];
console.log(arr.pop()); */

/* let arr = ['a','b','c','d','e','f'];
let newArr = arr.slice(1,4);
console.log(arr.slice(0,4)); // Вернёт [‘a’,’b’,’c’,’d’]
console.log(newArr); // Вернёт [‘b’,’c’,’d’]
console.log(arr); */

/* let obj = {a: 1, b: 2, c: 3};
let arrKeys = Object.keys(obj);
console.log(arrKeys); */

/* let arr1 = ['1','2','3'];
let arr2 = ['4','5','6'];
let concArr = arr1.concat(arr2);
document.write(concArr); */

/* let arr = ['1','2','3'];
console.log(arr.reverse()); */

/* let arr = ['1','2','3'];
arr.push('4','5','6');
console.log(arr); */

/* let arr = ['1','2','3'];
arr.unshift('4','5','6');
console.log(arr); */

/* let arr = ['js','css','jq'];
document.write(arr.shift()+'<br>');
document.write(arr.pop()); */

/* let arr = ['1','2','3','4','5'];
let newArr1 = arr.slice(0,3);
let newArr2 = arr.slice(3);
console.log(newArr1);
console.log(newArr2); */

/* let arr = [1,2,3,4,5],
    arr1 = [],
    arr2 = [],
    arr3 = [];

//arr.splice(1,2);
//console.log(arr);

//arr1 = arr.splice(1,3);
//console.log(arr1);

//arr.splice(3,0,'a','b','c');
//console.log(arr);

//arr.splice(1,0,'a','b');
//arr.splice(6,0,'c');
//arr.splice(8,0,'e');
//console.log(arr);

// arr.splice(1,15,'a','b',2,3,4,'c',5,'e');
// console.log(arr); */

/* let arr = [3,4,1,2,7];
console.log(arr.sort()); */

/* let obj = {js:'test', jq:'hello', css:'world'},
    arr = [];
arr = Object.keys(obj);
console.log(arr); */

/* let str = 'fsafsagwqe',
    arr = str.split(''),
    firstElemStr = '',
    firstElemArr = [];
// arr[0] = arr[0].toUpperCase();
// str = arr.join('');

// firstElemArr = arr.slice(0,1);
// firstElemStr = firstElemArr.join('');
// arr[0] = firstElemStr.toUpperCase();
// str = arr.join('');

// str = str[0].toUpperCase() + str.substr(1);
// document.write(str); */

/* let str = '123456',
    arr = str.split('');
arr.reverse();
document.write(arr.join('')); */

/* let str = prompt('Введите строку','строка');
// if (str.substr(0,7) == 'http://') {
//   document.write('Строка начинается с http://');
// }
// else {
//   document.write('Строка не начинается с http://');
// }


// console.log(str.substr(-5));
// if (str.substr(-5) == '.html') {
//   document.write('Строка заканчивается на .html');
// }
// else {
//   document.write('Строка не заканчивается на .html');
// } */


/* function hello(name) {
  let text = 'Привет '+name+'!';
  return text;
}

alert(hello('Дима')+'\n'+hello('Коля')+'\n'+hello('Петя')); */

/* function kvadrat($num) {
  return $num * $num;
}

let num = prompt('Введите число','0');
alert(kvadrat(num)); */

/* function summ(num1,num2) {
  return num1 + num2;
}

let num1 = Number(prompt('Введите первое число','0'));
let num2 = Number(prompt('Введите второе число','0'));
alert(summ(num1,num2)); */

/* function math(num1,num2,num3) {
  return (num1 - num2) / num3;
}

let num1 = Number(prompt('Введите первое число','0'));
let num2 = Number(prompt('Введите второе число','0'));
let num3 = Number(prompt('Введите третье число','0'));

alert(math(num1,num2,num3)); */

/* function day(num) {
  switch (num) {
    case 1:
      return 'Понедельник';
      break;
    case 2:
      return 'Вторник';
      break;
    case 3:
      return 'Среда';
      break;
    case 4:
      return 'Четверг';
      break;
    case 5:
      return 'Пятница';
      break;
    case 6:
      return 'Суббота';
      break;
    case 7:
      return 'Воскресенье';
      break;
    default:
      return 'Дня с таким номером не существует';
      break;
  }
}

let num = Number(prompt('Введите число дня недели','1'));
alert(day(num)); */

/* let arr = [1,2,3,4,6,3,1],
    flag = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 5) {
    flag = true;
    break;
  }
}

if (flag === true) {
  alert('В массиве есть цифра 5');
}

else {
  alert('В массиве нет цифры 5');
} */

/* let num = 13;
let flag = true;
for (let i = 2; i < num; i++) {
  if (Number.isInteger(num/i) === true) {
    flag = false;
    break;
  }
}

if (flag === true) {
  alert('Верно');
}

else {
  alert('Неверно');
} */


/* function string(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      return 'Да';
      break;
    }
  }
  return 'Нет';
}

let arr = [0,1,2,3,4,5,6];
alert(string(arr)); */

/* function srav(num1,num2) {
  if (num1 === num2) {
    return 'Они равны';
  }
  return 'Они не равны';
}

let num1 = Number(prompt('Введите число','0'));
let num2 = Number(prompt('Введите число','0'));
alert(srav(num1,num2)); */

/* function srav(num1,num2) {
  if (num1+num2 > 10) {
    return 'Сумма больше 10';
  }
  return 'Сумма меньше 10';
}

let num1 = Number(prompt('Введите число','0'));
let num2 = Number(prompt('Введите число','0'));
alert(srav(num1,num2)); */

/* function srav(num1) {
  if (num1 >= 0) {
    return 'Число положительное';
  }
  return 'Число отрицательное';
}

let num1 = Number(prompt('Введите число','0'));
alert(srav(num1)); */
/* let str = ''
for (let i = 1; i <= 9; i++) {
  str += i;
}

document.write(str);
console.log(str); */

/* let str = '';
for (let i = 9; i >= 1; i--) {
  str += i;
}

document.write(str);
console.log(str); */

/* let str = '-';
for (let i = 1; i <= 9; i++) {
  str = str+i+'-';
}

document.write(str);
console.log(str); */
/* let str = '';
for (let i = 0; i <= 25; i++) {
  str += 'x';
  document.write(str + '<br>');
} */

/* let str = '';
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(i);
  }
  document.write('<br>');
} */

/* let str = '';
for (let i = 1; i <= 5; i++) {
  str += 'xx';
  document.write(str);
  document.write('<br>');
} */

/* let arr = [];
for (let i = 0; i <= 10; i++) {
  arr.push('x');
  for (let j = 1; j <= i+1; j++) {
    arr[i+1] = arr[i] + 'x';
  }
}
console.log(arr); */

/* let arr = [];
for (let i = 0; i < 9; i++) {
  arr[i] = String(i+1);
  for (let j = 1; j <= i; j++) {
    arr[i] += String(i+1);
  }
}
console.log(arr); */

/* function arrayFill(length) {
  let arr = [],
      result = 0;
  for (let i = 0; i < length; i++) {
    arr[i] = Number(prompt('Введите '+(i+1)+' элемент массива','0'));
    if (result <= 10) {
      result += arr[i];
    }
   
    if (result > 10) {
      result = 'Сумма всех элементов массива больше 10 и прошло '+(i+1)+' итераций';
    }
  }
  
  if (typeof result !== 'string') {
    return 'Сумма всех элементов не более 10'
  }
  
  else {
    return result;
  }
}

let length = Number(prompt('Введите размерность массива','0'));

alert(arrayFill(length)); */



/* let arr = [2,3,5,1,2,6],
    reverseArr = [];
console.log('Оригинальный массив:');
console.log(arr);
for (let i = arr.length - 1; i >= 0; i--) {
  reverseArr.push(arr[i]);
}
console.log('Перевернутый массив:');
console.log(reverseArr); */

/** Объекты **/

/* 1 let obj = {1: 'a', 2: 'b', 3: 'c'};
console.log(obj[1]);
console.log(obj[2]);
console.log(obj[3]);*/

/* 2 let obj = {a: 1, b: 2, c: 3};
console.log(obj['a']+obj['b']+obj['c']);*/

/* 3 let obj = {'1a': 1, '2b': 2, 'c-c': 3};
console.log(obj['1a'] + obj['2b'] + obj['c-c']);*/

/* 4 1a, c-c */

/* 5 let obj = {key1: 1, key2: 2, key3: 3};
console.log(obj.key1 + obj.key2 + obj.key3);*/

/* 6 1a, eee-*/

/* 7 let user = {name: 'Артём', surname: 'Мускатин', patronymic: 'Михайлович'};
console.log(user['surname']+' '+user['name']+' '+user['patronymic']);
console.log(user.surname+' '+user.name+' '+user.patronymic);*/

/* 8 let date = {year: 2019, month: 11, day: 27};
console.log(date['year']+'-'+date['month']+'-'+date['day']);*/

/* 9 let obj = {};
//obj.a = 1;
//obj.b = 2;
//obj.c = 3;
//console.log(obj);
//obj['a'] = 1;
//obj['b'] = 2;
//obj['c'] = 3;
//console.log(obj);*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** Многомерные массивы **/

/* 1 let arr = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l']
];

console.log(arr[3][2]);
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr[0][0]);*/

/* 2 let arr = [
    [1,2],
    [3,4],
    [5,6]
],
    result = 0;
//for (let i = 0; i < arr.length; i++) {
//    for (let j = 0; j < arr[i].length; j++) {
//        result += arr[i][j];
//    }
//}
//result = arr[0][0] + arr[0][1] + arr[1][0] + arr[1][1] + arr[2][0] + arr[2][1];
console.log(result);*/

/* 3 let arr = [
    [
        [1,2],
        [3,4]
    ],
    [
        [5,6],
        [7,8]
    ]
],
    result = 0;
//result = arr[0][0][0] + arr[0][0][1] + arr[0][1][0] + arr[0][1][1] + arr[1][0][0] + arr[1][0][1] + arr[1][1][0] + arr[1][1][1];
//for (let i = 0; i < arr.length; i++) {
//    for (let j = 0; j < arr[i].length; j++) {
//        for (let k = 0; k < arr[i][j].length; k++) {
//            result += arr[i][j][k];
//        }
//    } 
//}
console.log(result);*/

/* 4 let arr = [
    [1, 2, 3, 
     [4, 5, [
         6, 7
        ]
     ]
    ], 
    [8, 
     [9, 10
        ]
    ]
],
    result = 0;
result = arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] + arr[0][3][1] + arr[0][3][2][0] + arr[0][3][2][1] + arr[1][0] + arr[1][1][0] + arr[1][1][1];
console.log(result);*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** Вывод элементов многомерного массива **/

/* Пример через конструкцию for of 
let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];
for (let subArr of arr) {
	for (let elem of subArr) {
		console.log(elem);
	}
}; */

/* Пример через обычный for
let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];
for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
		console.log(arr[i][j]);
	}
}; */

/* 1 let arr = [ [1,2,3], [4,5], [6] ],
    result = 0;
//for (let subArr of arr) {
//    for (let element of subArr) {
//        result += element;
//    }
//}
///////////////////////////////////////////////
//for (let i = 0; i < arr.length; i++) {
//    for (let j = 0; j < arr[i].length; j++) {
//        result += arr[i][j];
//    }
//}
console.log(result);*/

/* 2 let arr = [[[1,2], [3,4]], [[5, 6], [7, 8]]],
    result = 0;
//for (let subArr of arr) {
//    for (let subSubArr of subArr) {
//        for (let element of subSubArr) {
//            result += element;
//        }
//    }
//}
//////////////////////////////////////////////////////
//for (let i = 0; i < arr.length; i++) {
//    for (let j = 0; j < arr[i].length; j++) {
//        for (let k = 0; k < arr[i][j].length; k++) {
//            result += arr[i][j][k];
//        }
//    }
//}
console.log(result);*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** Заполнение многомерных массивов **/

/* 1 let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 5; j++) {
        arr[i][j] = j+1;
    }
}
console.log(arr);*/

/* 2 let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 4; j++) {
        // 1 способ arr[i][j] = 'x';
        // 2 способ arr[i].push('x');
    }
}
console.log(arr);*/

/* 3 let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 2; j++) {
        arr[i][j] = [];
        for (let k = 0; k < 5; k++) {
            arr[i][j][k] = k+1;
        }
    }
}
console.log(arr);*/

/* 4 let arr = [];  
for (let i = 0; i < 3; i++) {  
    arr[i] = [];
    for (let j = 1; j <= 5; j++) {   
        arr[i].push(j);  
    } 
}  
console.log(arr);*/

/* 5 let arr = [];  
for (let i = 0; i < 3; i++) {
    arr[i] = [];    
    for (let j = 1; j <= 5; j++) {
        arr[i].push(j);  
    } 
}  
console.log(arr);*/

/* 6 let arr = [];  
for (let i = 0; i < 3; i++) { 
    arr[i] = [];
    for (let j = 1; j <= 5; j++) {
        arr[i].push(j);  
    } 
}  
console.log(arr);*/

/* 7 let arr = [];

for (let i = 0; i < 3; i++) {
	//arr[j] = [];
    arr[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}
console.log(arr);*/

/* 8 //let arr;
let arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j <= 5; j++) {
		arr[i][j] = j + 1;
	}
}
console.log(arr);*/


/* 9 let arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}
console.log(arr);*/

/* 10 let arr = [];
for (let i = 0; i < 3; i++) {
	//arr = [];
	arr[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}
console.log(arr);*/

/* 11 //let arr = '';
let arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j <= 5; j++) {
		//arr[i][j] = j; Хотя и с этим будет работать, но отсчет начинается с единицы
        arr[i][j] = j+1;
    }
}
console.log(arr);*/

/* 12 let arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 1; j <= 5; j++) {
		//arr.push(j);
        arr[i].push(j);
	}
}
console.log(arr);*/

/* 13 let arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j <= 5; j++) {
		//arr[j][i] = j; в если выводить в таком порядке, то вернёт undefined
        arr[i][j] = j+1;
	}
}
console.log(arr);*/

/* 14 let arr = []; //этой строчки не было сначала
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j <= 5; j++) {
		//arr[i][j] = j; Так тоже будет работать, но отсчет с 1
        arr[i][j] = j+1;
	}
}
console.log(arr);*/

/* 15 let arr = [];
for (let i = 0, k = 1; i < 4; i++) {
    arr[i] = [];
    for (let j = 0; j < 2; j++, k++) {
        arr[i][j] = k;
    }
}
console.log(arr);*/

/* 16 let arr = [];
for (let i = 0, k = 2; i < 4; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++, k+=2) {
        arr[i][j] = k;
    }
}
console.log(arr);*/

/* 17 let arr = [];
for (let i = 0, k = 1; i < 2; i++) {
    arr[i] = [];
    for (let j = 0; j < 2; j++) {
        arr[i][j] = [];
        for (let l = 0; l < 2; l++, k++) {
            arr[i][j][l] = k;
        }
    }
}
console.log(arr);*/

/* 18 let arr = [],
    k = 1; //этой строчки не было
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}
console.log(arr);*/

/* 19 //Автор следующего кода хотел сделать массив [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
        k++; //этой строчки не было
	}
}
console.log(arr);*/

/* 20 //Автор следующего кода хотел сделать массив [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		//k--;
        k++;
	}
}
console.log(arr);*/

/* 21 //Автор следующего кода хотел сделать массив [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
let arr = [];
//let k;
let k = 1;
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}
console.log(arr);*/

/* 22 //Автор следующего кода хотел сделать массив [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
let arr = [];
for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
        k++ //этой строчки не было. Так же можно для краткости поставить в начальные присваивания цикла
	}
}
console.log(arr);*/

/* 23 //Автор следующего кода хотел сделать массив [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
let arr = [];
for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	for (let j = 0/*k++*/
; //j < 3; j++, k++) {
/*arr[i][j] = k;
	}
}
console.log(arr);*/

// 24 Автор следующего кода хотел сделать массив [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
//let arr = [];
//for (let i = 0, k = 1; i < 3; i++) {
//	arr[i] = [];
//	for (let j = 0; j < 3; /*j++; k++*/ j++, k++) {
//		arr[i][j] = k;
//	}
//}
//console.log(arr);

/* 25 //Автор следующего кода хотел сделать массив [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
let arr = [];
for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		//arr[i][j] = ++k;
        arr[i][j] = k++;
	}
}
console.log(arr);*/

/* 26 //Автор следующего кода хотел сделать массив [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
	//arr[k] = [];
    arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}
console.log(arr);*/

/* 27 //Автор следующего кода хотел сделать массив [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
let arr = [];
for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	//for (let j = 0; j < 3; k++) { тут нет прибавления счётчика цикла j, поэтому мы зациклимся и браузер крашнет
    for (let j = 0; j < 3; j++, k++) {
		arr[i][j] = k;
	}
}
console.log(arr);*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** Многомерные объекты **/

/* 1 let obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9
    }
}

// 1 способ console.log(obj.key1.key1 + obj.key1.key2 + obj.key1.key3 + obj.key2.key1 + obj.key2.key2 + obj.key2.key3 + obj.key3.key1 + obj.key3.key2 + obj.key3.key3);

// 2 способ console.log(obj['key1']['key1'] + obj['key1']['key2'] + obj['key1']['key3'] + obj['key2']['key1'] + obj['key2']['key2'] + obj['key2']['key3'] + obj['key3']['key1'] + obj['key3']['key2'] + obj['key3']['key3']);*/

/* 2 let obj = {
    1: {
        1: 'a1',
        2: 'a2',
        3: 'a3'
    },
    2: {
        1: 'b1',
        2: 'b2',
        3: 'b3'
    },
    3: {
        1: 'c1',
        2: 'c2',
        3: 'c3'
    }
}
console.log(obj[2][1]);
console.log(obj[3][1]);*/

/* 3 let obj = {
	key1: {
		a: 1, 
        b: 2, 
        c: {
			d: 3,
			e: 4,
		}, 
        f: 5,
	},
	key2: {
		g: 6, 
        h: 7,
	},
}
console.log(obj.key1.a + obj.key1.b + obj.key1.c.d + obj.key1.c.e + obj.key1.f + obj.key2.g + obj.key2.h);*/

/* 4 let obj = {
    1: {
        1: 11,
        2: 12,
        3: 13
    },
    2: {
        1: 21,
        2: 22,
        3: 23
    },
    3: {
        1: 24,
        2: 25,
        3: 26
    }
},
    result = 0;

for (let key in obj) {
    let subObj = obj[key];
    for (let subKey in subObj) {
        result += subObj[subKey];
    }
}

console.log(result);*/

/* 5 let months = {
	'ru': [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
	],
	'en': [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	],
};

let lang = 'en';
let month = 8;
console.log(months[lang][month]);*/

/* 6 let affairs = {
	'2018': {
		11: {
			29: ['дело111', 'дело112', 'дело113'],
			30: ['дело121', 'дело122', 'дело123'],
		},
		12: {
			30: ['дело211', 'дело212', 'дело213'],
			31: ['дело221', 'дело222', 'дело223'],
		},
	},
	'2019': {
		12: {
			29: ['дело311', 'дело312', 'дело313'],
			30: ['дело321', 'дело322', 'дело323'],
			31: ['дело331', 'дело332', 'дело333'],
		}
	},
}
let year = prompt('Введите год за который нужно дело','2018,2019 - одно число');
let month = prompt('Введите месяц за который нужно дело','11,12 - одно число');
let day = prompt('Введите день за который нужно дело','29,30,31 - одно число');

if (affairs[year][month][day] === undefined) {
    document.write('Дел за такую дату не найдено')
} else {
    for (let i = 0; i < affairs[year][month][day].length; i++) {
        document.write(affairs[year][month][day][i] + '<br>');
    }
}*/

/* 7 //Автор следующего кода хотел вывести элемент со значением '24':
let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
//console.log(obj['key1'][key2]);
console.log(obj[key1][key2]);*/

/* 8 //Автор следующего кода хотел вывести элемент со значением '24':
let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
//console.log(obj.key1.key2); в таком случае выдаст 12, т.к. мы напрямую обратились через свойства и obj['key1']['key2'] == '12'
console.log(obj[key1][key2]);*/

/* 9 //Автор следующего кода хотел вывести элемент со значением '24':
let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
//console.log(obj.key1['key2']); Тоже самое, обращаемся напрямую к ключам, а не через переменную и получаем неверное значение
console.log(obj[key1][key2]);*/

/* 10 //Автор следующего кода хотел вывести элемент со значением '24':
let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4'; // новая переменная
//console.log(obj['key1']['key4']); Тут обращаемся смешанно, к переменной и непосредственно по ключу, т.к. дана всего одна переменная
console.log(obj[key1]['key4']); 
console.log(obj[key1][key2]); //Так же мы можем объявить переменную и обращаться с помощью двух*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** Комбинация массив + объект и наоборот **/

/* 1 let employees = [
     {   
         name: 'name1',   
         salary: 300
     },  
     {   
         name: 'name2',   
         salary: 400
     },  
     {   
         name: 'name3',   
         salary: 500
     }
];
let summ = employees[0].salary + employees[1].salary;
document.write('Сумма зарплат первого и второго работника = '+summ);*/

/* 2 let students = {  
         'boys':  ['Коля', 'Вася', 'Петя'],  
         'girls': ['Даша', 'Маша', 'Лена'],
};
document.write('Первый студент: '+students.boys[1]+'<br>');
document.write('Второй студент: '+students.girls[2]);*/

/* Пример let users = [
	{
		name: 'name1',
		age: 31,
	},
	{
		name: 'name2',
		age: 32,
	},
	{
		name: 'name3',
		age: 33,
	},
];

for (let user of users) {
    document.write(user.name+' '+user.age+'<br>');
}*/

/* 3 let workers = [
    {
        name: 'Vlad',
        salary: 300
    },
    {
        name: 'Gena',
        salary: 400
    },
    {
        name: 'Semen',
        salary: 500
    }
];

for (let worker of workers) {
    document.write(worker.name+' - '+worker.salary+'<br>');
} // 1 способ - рекомендую этот, т.к. он проще в понимании и меньше символов))

for (let i = 0; i < workers.length; i++) {
    document.write(workers[i].name+' - '+workers[i].salary+'<br>');
} // 2 способ*/

/* 4 let workers = [
    {
        name: 'Vlad',
        salary: 300
    },
    {
        name: 'Gena',
        salary: 400
    },
    {
        name: 'Semen',
        salary: 500
    }
],
    summ = 0;
for (let worker of workers) {
    summ += worker.salary;
}
document.write('Общая зарплата сотрудников = '+summ);*/

/* 5 let workers = [
    {
        name: 'Vlad',
        salary: 300,
        age: 28
    },
    {
        name: 'Gena',
        salary: 400,
        age: 29
    },
    {
        name: 'Semen',
        salary: 500,
        age: 30
    },
    {
        name: 'Artem',
        salary: 600,
        age: 31
    },
    {
        name: 'Vadim',
        salary: 700,
        age: 32
    }
],
    summ = 0;

for (let worker of workers) {
    if (worker.age >= 30) {
        summ += worker.salary;
    }
}

document.write('Общая зарплата сотрудников которым 30 и более лет = '+summ);*/

/* 6 let workers = [
    {
        name: 'Vlad',
        salary: 300,
        age: 28,
        dismissed: false
    },
    {
        name: 'Gena',
        salary: 400,
        age: 29,
        dismissed: true
    },
    {
        name: 'Semen',
        salary: 500,
        age: 30,
        dismissed: false
    },
    {
        name: 'Artem',
        salary: 600,
        age: 31,
        dismissed: true
    },
    {
        name: 'Vadim',
        salary: 700,
        age: 32,
        dismissed: false
    }
];
document.write('<strong>Неуволенные сотрудники (их имена и зарплаты):</strong><br><br>')
for (let worker of workers) {
    if (worker.dismissed === false) {
        document.write(worker.name+' - '+worker.salary+'<br>');
    }
}
document.write('<br><br><strong>Уволенные сотрудники:</strong><br><br>')
for (let worker of workers) {
    if (worker.dismissed === true) {
        document.write(worker.name+'<br>');
    }
}*/

/* 7 let data = {
    1: ['data11', 'data12', 'data13'],
    2: ['data21', 'data22', 'data23'],
    3: ['data31', 'data32', 'data33', 'data34', 'data35'],
    4: ['data41', 'data42']
};

for (let key in data) {
    for (let element of data[key]) {
        document.write(element+'<br>');
    }
}*/

/* 8 let data = [
    {
        1: 'data11',
        2: 'data12',
        3: 'data13',
        4: 'data14'
    },
    {
        1: 'data21',
        2: 'data22',
        3: 'data23'
    },
    {
        1: 'data31',
        2: 'data32',
        3: 'data33'
    }
];


for (obj of data) {
    for (key in obj) {
        document.write(obj[key]+'<br>');
    }
}*/

/* 9 let data = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
			'data224',
		],
		3: [
			'data231',
			'data232',
			'data233',
			'data234',
			'data235',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
		],
	},
];

for (subObj of data) {
    for (key in subObj) {
        for (element of subObj[key]) {
            document.write(element+'<br>');
        }
    }
}*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** Добавление элементов в многомерные массивы **/

/* 1 let users = [
    {
        name: 'Vlad',
        surname: 'Petrov',
        age: 30
    },
    {
        name: 'Ivan',
        surname: 'Semenov',
        age: 31
    },{
        name: 'Semen',
        surname: 'Ivanov',
        age: 32
    }
];

users.push({
    name: 'Slava',
    surname: 'Sergeev',
    age: 33
});
console.log(users);*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** Добавление элементов в многомерные объекты **/

/* 1 let affairs = {
    '2019-12-28': ['дело11','дело12','дело13'],
    '2019-12-29': ['дело21','дело22','дело23'],
    '2019-12-30': ['дело31','дело32','дело33']
};

affairs['2019-12-29'].push('дело14');
affairs['2019-12-31'] = [];
affairs['2019-12-31'].push('дело41','дело42');
console.log(affairs);*/

/* 2, 3, 4 let students = {
	'group1': {
		'subgroup11': ['student111', 'student112', 'student113'], 
		'subgroup12': ['student121', 'student122', 'student123'], 
	},
	'group2': {
		'subgroup21': ['student211', 'student212', 'student213'], 
		'subgroup22': ['student221', 'student222', 'student223'], 
	},
	'group3': {
		'subgroup31': ['student311', 'student312', 'student313'], 
		'subgroup32': ['student321', 'student322', 'student323'], 
	},
};

students.group1.subgroup11.push('student114');
students.group1.subgroup13 = [];
students.group4 = {};
students.group4.subgroup41 = [];
students.group4.subgroup41.push('student411','student412');
console.log(students);*/

/* 5 let affairs = {
    '2019-12-28': ['дело11','дело12','дело13'],
    '2019-12-29': ['дело21','дело22','дело23'],
    '2019-12-30': ['дело31','дело32','дело33']
};

function addAffair (date, affair) {
    if (affairs[date] === undefined) {
        affairs[date] = [];
    }
    affairs[date].push(affair);
}

let date = prompt('Введите дату','2019-12-28'),
    affair = prompt('Введите дело','дело');

addAffair(date,affair);
console.log(affairs);*/

/* 6 let students = {  
    'group1': {   
        'subgroup11': ['student111', 'student112', 'student113'],    
        'subgroup12': ['student121', 'student122', 'student123'] 
    },  
    'group2': {   
        'subgroup21': ['student211', 'student212', 'student213'],    
        'subgroup22': ['student221', 'student222', 'student223'],   
    },  
    'group3': {
        'subgroup31': ['student311', 'student312', 'student313'],    
        'subgroup32': ['student321', 'student322', 'student323'],   
    }
};

function addStudent(group, subgroup, student) {
    if (students[group] === undefined) {
        students[group] = {};
    }
    
    if (students[group][subgroup] === undefined) {
       students[group][subgroup] = []; 
    }
    
    students[group][subgroup].push(student);
}

let group = prompt('Введите группу','группа'),
    subgroup = prompt('Введите подгруппу','подгруппа'),
    student = prompt('Введите студента','студент');

addStudent(group, subgroup, student);
console.log(students);*/

/* 7 let affairs = {
	2018: {
		11: {
			29: ['дело111', 'дело112', 'дело113'],
			30: ['дело121', 'дело122', 'дело123']
		},
		12: {
			30: ['дело211', 'дело212', 'дело213'],
			31: ['дело221', 'дело222', 'дело223']
		}
	},
	2019: {
		12: {
			29: ['дело311', 'дело312', 'дело313'],
			30: ['дело321', 'дело322', 'дело323'],
			31: ['дело331', 'дело332', 'дело333']
		}
	}
};

function addAffair (year, month, day, affair) {
    if (affairs[year] === undefined) {
        affairs[year] = {};
    }
    
    if (affairs[year][month] === undefined) {
        affairs[year][month] = {};
    }
    
    if (affairs[year][month][day] === undefined) {
        affairs[year][month][day] = [];
    }
    
    affairs[year][month][day].push(affair);
}

let year = Number(prompt('Введите год','2018')),
    month = Number(prompt('Введите месяц','1-12')),
    day = Number(prompt('Введите день','1-31')),
    affair = prompt('Введите дело','дело');

addAffair(year, month, day, affair);
console.log(affairs);*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** Практика на многомерные массивы **/

/* 1 let data = {
	2018: {
		11: {
			29: [1, 2, 3],
			30: [4, 5],
		},
		12: {
			30: [6, 7],
			31: [8, 9],
		},
	},
	2019: {
		12: {
			29: [10, 11],
			30: [12, 13],
			31: [14, 15],
		}
	},
},
    dataArr = [];

for (key in data) {
    let subObj = data[key];
    for (key in subObj) {
        let subSubObj = subObj[key];
        for (key in subSubObj) {
            let arr = subSubObj[key];
            for (element of arr) {
                dataArr.push(element);
            }
        }
    }
}

console.log(dataArr);
//Запишите все элементы этого объекта в какой-нибудь массив, вот так:
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]*/


/* 2 let affairs = [
        {
            date: '2019-12-29',
            event: 'name1'
	},
        {
            date: '2019-12-31',
            event: 'name2'
	},
        {
            date: '2019-12-29',
            event: 'name3'
	},
        {
            date: '2019-12-30',
            event: 'name4'
	},
        {
            date: '2019-12-29',
            event: 'name5'
	},
        {
            date: '2019-12-31',
            event: 'name6'
	},
        {
            date: '2019-12-29',
            event: 'name7'
	},
        {
            date: '2019-12-30',
            event: 'name8'
	},
        {
            date: '2019-12-30',
            event: 'name9'
	},
],
    arr = [],
    newObj = {};

for (obj of affairs) {
    arr.push(obj.date);
}

for (elem of arr) {
    newObj[elem] = true;
}

arr = [];

for (key in newObj) {
    arr.push(key);
}

console.log(arr.sort());

//Получите из этого массива уникальные даты, то есть вот так:
//['2019-12-29', '2019-12-30', '2019-12-31']*/


/* 3 let users = [
	{
		name: 'name1',
		age: 31,
		active: true,
	},
	{
		name: 'name2',
		age: 32,
		active: false,
	},
	{
		name: 'name3',
		age: 33,
		active: true,
	},
	{
		name: 'name4',
		age: 34,
		active: false,
	},
	{
		name: 'name5',
		age: 35,
		active: true,
	},
];
//Выведите на экран тех юзеров, значение ключа active для которых равно true.

for (obj of users) {
    if (obj.active === true) {
        document.write(obj.name+'<br>'+obj.age+'<br><br>');
    }
}*/

/* 4 let data = [
	{
		country: 'Россия',
		city:    'Москва',
	},
	{
		country: 'Беларусь',
		city:    'Минск',
	},
	{
		country: 'Россия',
		city:    'Питер',
	},
	{
		country: 'Россия',
		city:    'Владивосток',
	},
	{
		country: 'Украина',
		city:    'Львов',
	},
	{
		country: 'Беларусь',
		city:    'Могилев',
	},
	{
		country: 'Украина',
		city:    'Киев',
	},
],
    arr = [];

//Подсчитайте количество стран.

for (obj of data) {
    arr.push(obj.country);
}

obj = {};

for (elem of arr) {
    obj[elem] = true;
}

arr = [];

for (key in obj) {
    arr.push(key);
}

console.log(arr);

document.write('Количество стран = '+arr.length);*/

/* 5 let affairs = {
	'2019-12-31': ['дело за 2019'],
	'2018-11-29': ['дело за 2018'],
	'2018-11-30': ['дело за 2018'],
	'2018-12-27': ['12 месяц дело за 2018'],
	'2019-12-29': ['дело за 2019'],
	'2019-12-30': ['дело за 2019'],
	'2018-12-30': ['12 месяц дело за 2018'],
	'2018-12-31': ['12 месяц дело за 2018'],
};

//Выведите на экран все дела за 2018 год.
//Выведите на экран все дела за 12 месяц 2018 года.
document.write('Дела за 2018 год<br>');
for (key in affairs) {
    if (key[3] === '8') {
        for (elem of affairs[key]) {
            document.write(elem + '<br>');
        }
    }
}

document.write('<br>Дела за 12 месяц 2018 год<br>');
for (key in affairs) {
    if (key[3]+key[6] === '82') {
        for (elem of affairs[key]) {
            document.write(elem + '<br>');
        }
    }
}*/

/* 6 let users = [
        {
            name: 'name1',
            active: true,
	},
        {
            name: 'name2',
            active: false,
	},
        {
            name: 'name3',
            active: true,
	},
        {
            name: 'name4',
            active: false,
	},
        {
            name: 'name5',
            active: true,
	},
];

function userActiveTrue(arr, number) {
    arrTrue = [];
    for (obj of users) {
        if (obj.name[4] == number) {
            obj.active = true;
        }
        arrTrue.push(obj);
    }
    return arr;
}

function userActiveFalse(arr, number) {
    arrFalse = [];
    for (obj of users) {
        if (obj.name[4] == number) {
            obj.active = false;
        }
        arrFalse.push(obj);
    }
    return arr;
}

console.log(userActiveTrue(users, 2));
console.log(userActiveFalse(users, 3));
console.log(userActiveTrue(users, 4));
console.log(userActiveFalse(users, 5));

//Сделайте две функции, которые будут менять значение поля active: первая функция пусть меняет на true, а вторая - на false.
//Пусть наши функции параметрами принимают данный массив и номер юзера, над которым следует произвести изменения.
//Пусть функции возвращают измененный массив.*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** Удобное хранение данных **/

/* 1
Первоначальный вариант 
let data = [
	{
		country: 'Россия',
		city:    'Москва',
	},
	{
		country: 'Беларусь',
		city:    'Минск',
	},
	{
		country: 'Россия',
		city:    'Питер',
	},
	{
		country: 'Россия',
		city:    'Владивосток',
	},
	{
		country: 'Украина',
		city:    'Львов',
	},
	{
		country: 'Беларусь',
		city:    'Могилев',
	},
	{
		country: 'Украина',
		city:    'Киев',
	},
];
//Вам известно, что вам нужно будет получать массивы городов определенных стран. К примеру, нужно будет получить все города России, либо все города Беларуси. Также необходимо будет находить количество городов в определенной стране.
//Решите поставленные задачи для текущей структуры хранения данных.
//После этого ответьте на вопрос, удобна ли такая структура данных для решения поставленных задач?
function findCity(country) {
    let arrCity = [];
    for (obj of data) {
        if (obj.country === country) {
            arrCity.push(obj.city);
        }
    }
    return arrCity;
}

function lengthFindedCity(country) {
    let arrCity = [];
    for (obj of data) {
        if (obj.country === country) {
            arrCity.push(obj.city);
        }
    }
    return arrCity.length;
}

console.log(findCity(prompt('Введите страну','Россия')));
console.log(lengthFindedCity(prompt('Введите страну','Россия')));*/

/* Переделанный вариант
let data = {
    'Москва': 'Россия',
    'Минск': 'Беларусь',
    'Питер': 'Россия',
    'Владивосток': 'Россия',
    'Львов': 'Украина',
    'Могилев': 'Беларусь',
    'Киев': 'Украина'
};

//Переделайте структуру на более удобную. Напишите решения поставленных задач для новой структуры данных.

function findCity(userCountry) {
    let arrCity = [];
    for (city in data) {
        country = data[city];
        if (country === userCountry) {
            arrCity.push(city);
        }
    }
    
    return arrCity;
}

function lengthFindedCity(userCountry) {
    let arrCity = [];
    for (city in data) {
        country = data[city];
        if (country === userCountry) {
            arrCity.push(city);
        }
    }
    
    return arrCity.length;
}

console.log(findCity(prompt('Введите страну','Россия')));
console.log(lengthFindedCity(prompt('Введите страну','Россия')));*/




/* 2 
Первоначальный вариант (удобный объект)
let data = [
	{
		year:  2019,
		month: 11,
		day: 20,
		data: ['массив с данными']
	},
	{
		year:  2019,
		month: 11,
		day: 21,
		data: ['массив с данными']
	},
	{
		year:  2019,
		month: 12,
		day: 25,
		data: ['массив с данными']
	},
	{
		year:  2019,
		month: 12,
		day: 26,
		data: ['массив с данными']
	},
	{
		year:  2020,
		month: 10,
		day: 29,
		data: ['массив с данными']
	},
	{
		year:  2020,
		month: 10,
		day: 30,
		data: ['массив с данными']
	},
	{
		year:  2020,
		month: 11,
		day: 19,
		data: ['массив с данными']
	},
	{
		year:  2020,
		month: 11,
		day: 20,
		data: ['массив с данными']
	},
],
    arr = [];
//Пусть вам нужно будет получать данные за определенный день, за определенный месяц, и за определенный год. Удобна ли текущая структура хранения данных для этого?
//Если да, оставьте все как есть, если нет, переделайте структуру на более удобную. Получите затем все данные за 2020 год.
for (obj of data) {
    if (obj.year === 2020) {
        arr.push(obj.data);
    }
}
console.log(arr);*/

/*Неудобный объект let data = {
    2019: {
        11: {
            20: ['массив с данными'],
            21: ['массив с данными']
        },
        
        12: {
            25: ['массив с данными'],
            26: ['массив с данными']
        }
    },
    
    2020: {
        10: {
            29: ['массив с данными'],
            30: ['массив с данными']
        },
        
        11: {
            19: ['массив с данными'],
            20: ['массив с данными']
        }
    }
},
    arr = [];
for (year in data) {
    month = data[year];
    if (year == 2019) {
        for (key in month) {
            day = data[year][key];
            for (key in day) {
                arr.push(day[key]);
            }
        }
    }
}
console.log(arr);*/



/* 3
let affairs = [
	{
		date:  '2019-12-29',
		event: 'name1'
	},
	{
		date:  '2019-12-31',
		event: 'name2'
	},
	{
		date:  '2019-12-29',
		event: 'name3'
	},
	{
		date:  '2019-12-30',
		event: 'name4'
	},
	{
		date:  '2019-12-29',
		event: 'name5'
	},
	{
		date:  '2019-12-31',
		event: 'name6'
	},
	{
		date:  '2019-12-29',
		event: 'name7'
	},
	{
		date:  '2019-12-30',
		event: 'name8'
	},
	{
		date:  '2019-12-30',
		event: 'name9'
	},
],
    arr = [];
//Пусть вам нужно будет получать список событий за определенную дату. Удобна ли текущая структура хранения данных для этого?
//Если да, оставьте все как есть, если нет, переделайте структуру на более удобную. Получите затем список событий за '2019-12-30'.
for (obj of affairs) {
    if (obj.date === '2019-12-30') {
        arr.push(obj.event);
    }
}
console.log(arr);*/



/* 4
let goroskop = {
    skorpion: {
        '2019-01-31': 'Гороскоп скорп',
        '2019-02-30': 'Гороскоп скорп',
        '2019-03-29': 'Гороскоп скорп',
        '2019-04-28': 'Гороскоп скорп',
        '2019-05-27': 'Гороскоп скорп',
        '2019-06-26': 'Гороскоп скорп'
    },
    vodoley: {
        '2019-01-31': 'Гороскоп водолей',
        '2019-02-30': 'Гороскоп водолей',
        '2019-03-29': 'Гороскоп водолей',
        '2019-04-28': 'Гороскоп водолей',
        '2019-05-27': 'Гороскоп водолей',
        '2019-06-26': 'Гороскоп водолей'
    },
    rak: {
        '2019-01-31': 'Гороскоп рак',
        '2019-02-30': 'Гороскоп рак',
        '2019-03-29': 'Гороскоп рак',
        '2019-04-28': 'Гороскоп рак',
        '2019-05-27': 'Гороскоп рак',
        '2019-06-26': 'Гороскоп рак'
    },
    fish: {
        '2019-01-31': 'Гороскоп рыбы',
        '2019-02-30': 'Гороскоп рыбы',
        '2019-03-29': 'Гороскоп рыбы',
        '2019-04-28': 'Гороскоп рыбы',
        '2019-05-27': 'Гороскоп рыбы',
        '2019-06-26': 'Гороскоп рыбы'
    }
},
    arr = [];
for (znak in goroskop) {
    let data = goroskop[znak];
        for (date in data) {
            let pred = data[date];
            if (date === '2019-01-31') {
                arr.push(pred);
            }
        }
}
console.log(arr);*/



/* 5
let pupils = [
    {
        name: 'Artyom',
        surname: 'Muskatin',
        class: 11,
        letter: 'B'
    },
    {
        name: 'Igor',
        surname: 'Muskatin',
        class: 8,
        letter: 'A'
    },
    {
        name: 'Stepan',
        surname: 'Muskatin',
        class: 6,
        letter: 'G'
    },
    {
        name: 'Semen',
        surname: 'Muskatin',
        class: 3,
        letter: 'G'
    },
    {
        name: 'Angella',
        surname: 'Muskatin',
        class: 10,
        letter: 'E'
    },
    {
        name: 'Elena',
        surname: 'Muskatin',
        class: 4,
        letter: 'E'
    },
    {
        name: 'Sveta',
        surname: 'Muskatin',
        class: 10,
        letter: 'A'
    }
];
document.write('Ученики 10го класса<br><br>')
for (pupil of pupils) {
    if (pupil.class === 10) {
        document.write('Имя: '+pupil.name+'<br>'+'Фамилия: '+pupil.surname+'<br>'+'Буква: '+pupil.letter+'<br><br>');
    }
}
document.write('Ученики 10го E класса<br><br>')
for (pupil of pupils) {
    if (pupil.class === 10 && pupil.letter === 'E') {
        document.write('Имя: ' + pupil.name + '<br>' + 'Фамилия: ' + pupil.surname + '<br><br>');
    }
}*/


/* 6
let affairsToday = [
    {
        affair: 'Помыть машину',
        complete: 'Выполнено'
    },
    {
        affair: 'Проведать родных',
        complete: 'Еще не время'
    },
    {
        affair: 'Убрать квартиру',
        complete: 'Еще не время'
    },
    {
        affair: 'Покормить животное',
        complete: 'Выполнено'
    },
    {
        affair: 'Съездить на заправку',
        complete: 'Не выполнено'
    },
    {
        affair: 'Сходить в поликликлинику',
        complete: 'Выполнено'
    },
];

for (affairs of affairsToday) {
    document.write(affairs.affair + ' - ' + '<b>' + affairs.complete + '</b>' +'<br><br>');
}*/



/* 7
let data = [
	{
		country: 'Россия',
		city:    'Москва',
	},
	{
		country: 'Беларусь',
		city:    'Минск',
	},
	{
		country: 'Россия',
		city:    'Питер',
	},
	{
		country: 'Россия',
		city:    'Владивосток',
	},
	{
		country: 'Украина',
		city:    'Львов',
	},
	{
		country: 'Беларусь',
		city:    'Могилев',
	},
	{
		country: 'Украина',
		city:    'Киев',
	},
],
    convertedData = {},
    arrCity = [];
//Напишите код, которой переделает структуру данных вот в такую:
//{
//	'Россия': [
//		'Москва', 'Питер', 'Владивосток',
//	],
//	'Беларусь': [
//		'Минск', 'Могилев'
//	],
//	'Украина': [
//		'Киев', 'Львов'
//	],
//}

for (obj of data) {
    if (convertedData[obj.country] === undefined) {
        convertedData[obj.country] = [];
    }
    
    convertedData[obj.country].push(obj.city);
}

console.log(convertedData);*/



/* 8
let events = [
	{
		date:  '2019-12-29',
		event: 'name1'
	},
	{
		date:  '2019-12-31',
		event: 'name2'
	},
	{
		date:  '2019-12-29',
		event: 'name3'
	},
	{
		date:  '2019-12-30',
		event: 'name4'
	},
	{
		date:  '2019-12-29',
		event: 'name5'
	},
	{
		date:  '2019-12-31',
		event: 'name6'
	},
	{
		date:  '2019-12-29',
		event: 'name7'
	},
	{
		date:  '2019-12-30',
		event: 'name8'
	},
	{
		date:  '2019-12-30',
		event: 'name9'
	},
],
    newObj = {};

for (obj of events) {
    if (newObj[obj.date] === undefined) {
        newObj[obj.date] = [];
    }
    
    newObj[obj.date].push(obj.event);
}

console.log(newObj);*/



/* 9
let events = {
	'2019-12-29': ['name1', 'name3', 'name5', 'name7'],
	'2019-12-30': ['name4', 'name8', 'name9'],
	'2019-12-31': ['name2', 'name6'],
},
    newArr = [];
for (data in events) {
    for (element of events[data]) {
        newArr.push({
            date: data,
            event: element
        })
    }
}
console.log(newArr);*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** Математические методы **/

//Math.pow(), Math.sqrt()
//Примеры 
/*console.log(Math.pow(3,3)); //Возведение 3 в 3ю степень. 3³ = 27
console.log(Math.pow(2, -2)); //Возведение в -2 степень числа 2. Минусовая степень - это переворот числа и возведение в степнь (1/2)²=0.25
console.log(Math.sqrt(9)); //Квадратный корень из 9. √9 = 3
console.log(Math.sqrt(-30)); //Вернёт NaN, т.к. число не может быть отрицательным.*/

//Задачи
//1
/*
console.log(Math.pow(2, 10));
*/

//2
/*
console.log(Math.sqrt(245));
*/

//3
/*let arr = [4,2,5,19,13,0,10];
let result = 0;

for (num of arr) {
    result += Math.pow(num, 3);
}

console.log(Math.sqrt(result));*/


//Math.round(), Math.ceil(), Math.floor(), toFixed(), toPrecision()
//Примеры
/*console.log(Math.round(4.5)); // Вернёт 5
console.log(Math.round(4.3)); // Вернёт 4
console.log(Math.round(4.7)); // Вернёт 5

console.log(Math.ceil(4.1)); // Вернёт 5
console.log(Math.ceil(4.8)); // Вернёт 5

console.log(Math.floor(4.1)); // Вернёт 4
console.log(Math.floor(4.8)); // Вернёт 4

let num = 3.1312312,
    num1 = 378.31233215;

console.log(num.toFixed(2)); //Вернёт 3.13
console.log(num.toFixed(9)); // Вернёт 3.131231200

console.log(num1.toPrecision(2)); // Вернёт 3.8e+2;
console.log(num1.toPrecision(15)); // Вернёт 378.312332150000*/

//Задачи
//1
/*let num = 379;
console.log('До целого = '+Math.round(Math.sqrt(num)));
console.log('До десятых = '+Math.sqrt(num).toFixed(1));
console.log('До сотых = '+Math.sqrt(num).toFixed(2));*/

//2
/*let num = 587,
    sqrtNum = Math.sqrt(num);
    floorNum = Math.floor(sqrtNum),
    ceilNum = Math.ceil(sqrtNum),
    obj = {};

obj.ceil = ceilNum;
obj.floor = floorNum;

console.log(obj);*/


//Math.max(), Math.min()
//Примеры
/*let arr1 = [1,3,6,1,24]
console.log(Math.max(1,6,12,5,2,34)); //Вернёт 34
console.log(Math.max()); // Вернёт -Infinity
console.log(Math.max.apply(null, arr1)); //Вернёт 24

console.log(Math.min(1,6,12,5,2,34)); //Вернёт 1
console.log(Math.min()); // Вернёт Infinity
console.log(Math.min.apply(null, arr1)); //Вернёт 1*/

//Задачи
//1
/*let arr = [4,-2,5,19,-130,0,10],
    min = Math.min(4,-2,5,19,-130,0,10),
    max = Math.max(4,-2,5,19,-130,0,10),
    minInArr = Math.min.apply(null, arr),
    maxInArr = Math.max.apply(null, arr);

console.log('Минимальное число = '+min);
console.log('Максимальное число = '+max);
console.log('Минимальное число в массиве = '+minInArr);
console.log('Максимальное число в массиве = '+maxInArr);*/


//Math.random()
//Примеры
/*console.log(Math.random()); //выведет рандомное дробное число от 0 до 1
function getRandomArbitary(min,max) {
    return Math.random()*(max-min)+min;
}// функция вывода рандомного числа в промежутке
function getRandomInt(max,min) {
    return Math.floor(Math.random()*(max-min+1))+min;
}// функция выводи целого рандомного числа в промежутке
console.log(getRandomArbitary(1,8)); //выведет рандомное дробное число от 1 до 8
console.log(getRandomInt(1,9)); //выведет рандомное целое число от 1 до 9*/

//Задачи
//1
/*
function getRandomInt(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(getRandomInt(1,100));
*/

//2
/*
function getRandomInt(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min
}
let arr = [],
    i = 0;
while (i < 10) {
    i++;
    arr.push(getRandomInt(2,9));
}
console.log(arr);
*/


//Math.abs()
//Примеры
/*
console.log(Math.abs(-3)); //вернёт 3
console.log(Math.abs(5)); //вернёт 5
*/

//Задачи
//1
/*let a = Number(prompt('Введите a','0')),
    b = Number(prompt('Введите b','0')),
    modul = Math.abs(a-b);
document.write('Модуль разности ваших чисел = '+modul);*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*Строковые методы*/
/*Некоторые примеры есть уже в теории, поэтому тут их не рассматриваем.*/

//строка.substr(), строка.substring(), строка.slice()
//Примеры
/*let str = 'Hello World!';
console.log(str.substr(0,4)); //вернёт 'Hell'
console.log(str.substr(6)); //вернёт 'World!'

console.log(str.substring(0,1)); //вернёт 'H'
console.log(str.substring(3,2)); //вернёт 'l'
console.log(str.substring(-3,5)); //вернёт 'Hello '
console.log(str.substring(4)); //вернёт 'o World!'

console.log(str.slice(3,-2)); //вернёт 'lo Worl'*/

//Задачи
//1
/*
let str = 'js';
console.log(str.toUpperCase());*/

//2
/*
let str = 'JS';
console.log(str.toLowerCase());*/

//3
/*let str = 'я учу javascript!';
document.write('<strong>Через substr:</strong><br><br>');
document.write(str.substr(2,3)+'<br>');
document.write(str.substr(6,10)+'<br><br>');

document.write('<strong>Через substring:</strong><br><br>');
document.write(str.substring(2,5)+'<br>');
document.write(str.substring(6,str.length-1)+'<br><br>');

document.write('<strong>Через slice:</strong><br><br>');
document.write(str.slice(2,5)+'<br>');
document.write(str.slice(6,str.length-1)+'<br><br>');*/

//4 Задача непонятна

//5
/*let str = 'abdec';
document.write('Исходная строка: '+ str + '<br>');
document.write('Позиция буквы c: '+ str.indexOf('c'));*/

//6
/*let str = 'bceqya';
document.write('Исходная строка: '+ str + '<br>');
if (str.indexOf('a') !== -1) {
    document.write('В данной строке есть буква а');
}

else {
    document.write('В данной строке нет буквы а');
}*/

//7
/*let str = 'dvdteada';
document.write('Исходная строка: '+ str + '<br>');
if (str.indexOf('a') === 0) {
    document.write('Данная строка начинается с символа а');
}

else {
    document.write('Данная строка не начинается с символа а');
}*/

//8
/*let str = 'dvdteada';
document.write('Исходная строка: '+ str + '<br>');
if (str.lastIndexOf('a') === str.length-1) {
    document.write('Данная строка заканчивается символом а');
}

else {
    document.write('Данная строка не заканчивается символом а');
}*/

//9,10
/*let str = 'https://iskmarket.ru/index.htm';
document.write('Исходная строка: '+ str + '<br>');
if (str.indexOf('http://') === 0) {
    document.write('Данная строка начинается с http://<br>');
}

else {
    document.write('Данная строка не начинается с http://<br>');
}

if (str.lastIndexOf('.html') === str.length-5) {
    document.write('Данная строка кончается на .html');
}

else {
    document.write('Данная строка не кончается на .html');
}*/

//11,12
/*let str = 'http://iskmarket.ru/index.html';
document.write('Исходная строка: '+ str + '<br>');
if (str.startsWith('http://')) {
    document.write('Данная строка начинается с http://<br>');
}

else {
    document.write('Данная строка не начинается с http://<br>');
}

if (str.endsWith('.html')) {
    document.write('Данная строка кончается на .html');
}

else {
    document.write('Данная строка не кончается на .html');
}*/

//13
/*let str = '1-2-3-4-5',
    arr = str.split('-');
console.log(arr);*/

//14
/*let str = '12345',
    arr = str.split('');
console.log(arr);*/

//15
/*let arr = [1,2,3,4,5],
    str = arr.join('-');
console.log(str);*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** Практика на стандартные методы **/

//1,2
/*let str = 'london',
    result1 = str.slice(0,1).toUpperCase() + str.slice(1),
    result2 = str.slice(0, str.length-1) + str.slice(str.length-1,str.length).toUpperCase(),
    result3 = str.slice(0,2).toUpperCase() + str.slice(2);
console.log(result1);
console.log(result2);
console.log(result3);*/
//3
/*let str = 'London',
    result = str.slice(0,1).toLowerCase() + str.slice(1);
console.log(result);*/
//4
/*let str = 'word1 word2 word3',
    arr = str.split(' ');
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1);
}
console.log(arr);*/
//5
/*let str = 'let_me_love',
    arr = str.split('_'),
    result = '';
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1);
}
result = arr.join('');
console.log(result);*/
//6
/*let str = 'let_me_love',
    arr = str.split('_'),
    result = arr.join('');
console.log(result);*/
//7
/*let str = 'abcdefghikl';
console.log(str.split('').reverse().join(''));
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** Функции. Начало **/
function isInteger(num) {
    return (num ^ 0) === num;
}
//1
/*
function summArrNumberSquare(arr) {
    let summ = 0;
    for (num of arr) {
        summ += Math.pow(num,2);
    }
    return summ;
}
let arr = [1,6,2,3,8,9];
console.log(summArrNumberSquare([1,3,7,2]));
console.log(summArrNumberSquare(arr));
*/

//2
/*
function getDigitsSum(num) {
    let arr = [],
        result = 0;
    if (!isInteger(num)) {
        alert('Нужно целое число');
    }
    
    arr = String(num).split('');
    for (digit of arr) {
        result += Number(digit);
    }
    
    return result;
}
console.log(getDigitsSum(4.3));
*/

//3
/*
function getDivisors(num) {
    let arr = [];
    for (let i = 0; i <= num; i++) {
        if (isInteger(num / i)) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(getDivisors(13));
*/

//4
/*
function reverseStr(str) {
    return str.split('').reverse().join('');
}
console.log(reverseStr('abcdefg'));
*/

//5
/*
function delElem(str,arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == str) {
            arr.splice(i,i+1);
        }
    }
    return arr;
}

let arr = ['abc',32,11,1,2,3,8];
console.log(delElem(32, arr));
*/

//6
/*
function arrFill(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(arrFill(8));
*/

//7
/*
function arrFill(num1, num2) {
    let arr = [];
    for (let i = num1; i <= num2; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(arrFill(3,7));
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** Правильное использование функций JavaScript **/

//1
/*
function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
}
let arr = [];
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        arr.push(i);
    }
}
console.log(arr);
*/

//2
/*
function getDigitsSum(num) {
	let sum = 0;
	let digits = String(num).split('');
	
	for (let digit of digits) {
		sum += Number(digit);
	}
	return sum;
}

let arr = [];
for (let i = 1; i <= 2030; i++) {
    if (getDigitsSum(i) === 13) {
        arr.push(i);
    }
}
console.log(arr);
*/

//3
/*
let nums = [123, 456, 789];
let result = [];
function reverseNum(num) {
    return String(num).split('').reverse().join('');
}
for (let num of nums) {
	result.push(reverseNum(num));
}
console.log(result);
*/

//4
/*
let num1 = 234;
let num2 = 531;
function digitsSum(num) {
    let arr = String(num).split(''),
        result = 0;
    for (element of arr) {
        result += Number(element);
    }
    return result;
}
if (digitsSum(num1) == digitsSum(num2)) {
	alert('суммы цифр совпадают');
} else {
	alert('суммы цифр не совпадают');
}
*/

//5
/*
let nums = [12, 24, 35, 14, 13];
function getDivisors(num) {
	let result = [];
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			result.push(num / i);
		}
	}
	return result;
}
for (let num of nums) {
	console.log(num + ': ' + getDivisors(num).join(', '));
}
*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * @theme Комбинация вспомогательных функций JavaScript
 * @link http://code.mu/ru/javascript/book/prime/functions/combination-of-auxiliary-functions/  
*/

//Theory 1
/* function getSum (arr) {
    let result = 0;
    for (elem of arr) {
        result += elem;
    }
    return result;
}

function getSquare (num) {
    return num * num;
}

console.log(getSquare(getSum([1,4,6,2]))); */

//Example 1
/**
 * @TODO  Дана функция getSum, находящая сумму элементов переданного массива.
 * Дана функция getDigits, возвращающая массив цифр числа.
 * Используя комбинацию приведенных функций найдите сумму цифр числа 12345.
 * 
 * @param function getSum(), getDigits()
 * @param string '12345'
 * 
 * @return @param number
*/

/* function getSum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += Number(elem);
	}
	
	return sum;
}

function getDigits(num) {
	return String(num).split('');
}

let num = '12345'

console.log(getSum(getDigits(num))); */

//Example 2
/**
 * @TODO Дано число. Нужно найти его делители (без 1 и самого числа), а затем найти среднее арифметическое (сумма делить на количество) делителей числа и вывести результат на экран. Исправить решение задачи
 * 
 * @param num 24
 * @param function getAvg(num) - нахождение среднего арифметического
 * @param function getDivisors(num) - нахождение массива делителей числа
 * 
 * @return @param num getAvg(getDivisors(num))
 */

/* let num = 24;
console.log( getAvg(getDivisors(num)) );

// Нахождение среднего арифметического:
function getAvg(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += Number(elem);
	}
	
    return sum / arr.length;
}

// Нахождение массива делителей числа:
function getDivisors(num) {
	let result = [];
	
	for (let i = 2; i < num; i++) { //Исправлен знак > на <
		if (num % i == 0) {
			result.push(i);
		}
    }
    return result; //Добавление строки
} */


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * @theme Вспомогательные функции внутри других функций в JavaScript
 * @link http://code.mu/ru/javascript/book/prime/functions/auxiliary-functions-inside-other-functions/
*/

//Example 1

/**
 * @todo дан массив с числами, запишем в новый массив только те элементы, сумма цифр в которых от 1 до 9.
 * 
 * @param function getDigits(num) - получение массива каждого элемента из числа
 * @param function getSum(arr) - получение суммы чисел
 * @param function inRage(void) - получение bool значения проверки
 * @param array nums - массив чисел над которыми сделать операции сравнения
 * 
 * @return @param array result - массив подходящих чисел
 */

/* function getDigits(num) {
    return String(num).split('');
}

function getSum(arr) {
    let result = 0;
    for (element of arr) {
        result += Number(element);
    }
    return result;
}

function inRage(num) {
    let sum = getSum(getDigits(num));
    return sum >= 1 && sum <= 9;
}

let nums = [12, 19, 28, 13, 14, 345],
result = [];
for (num of nums) {
    if (inRage(num)) {
        result.push(num);
    }
}
console.log(result); */