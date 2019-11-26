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

/* 1 let obj = {1: 'a', 2: 'b', 3: 'c'};
console.log(obj[1]);
console.log(obj[2]);
console.log(obj[3]);*/

/* 2 let obj = {a: 1, b: 2, c: 3};
console.log(obj['a']+obj['b']+obj['c']);*/

/* 3 let obj = {'1a': 1, '2b': 2, 'c-c': 3};
console.log(obj['1a'] + obj['2b'] + obj['c-c']);*/






