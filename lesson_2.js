'use strict'

//Задача №1
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2
// d = b++; alert(d);           // 1
// c = (2 + ++a); alert(c);      // 5
// d = (2 + b++); alert(d);      // 4
// alert(a);                    // 3
// alert(b);                    // 3
/*
*Операнд ++a увеличивает значение a на единицу, но переменной c устанавливает исходное значение a
*Операнд b++ увеличивает значение b на единицу и переменной d устанавливает новое значение b
*Переменная a и b увеличивались на единицу по 2 раза, поэтому их значение в конце равно 3
*/

//Задача №2
// var a = 2;
// var x = 1 + (a *= 2);
// console.log(x);
// x = 5

//Задача №3
// let a = parseInt(prompt("Введите первое целое число"));
// let b = parseInt(prompt("Введите второе целое число"));

// if (a > 0 && b > 0)
//     alert(a - b);
// else if (a < 0 && b < 0)
//     alert(a * b);
// else
//     alert(a + b);

//Задача №4
// let a = parseInt(prompt("Введите число от 0 до 15"));

// switch (a) {
//     case a = 0: console.log(0);
//     case a = 1: console.log(1);
//     case a = 2: console.log(2);
//     case a = 3: console.log(3);
//     case a = 4: console.log(4);
//     case a = 5: console.log(5);
//     case a = 6: console.log(6);
//     case a = 7: console.log(7);
//     case a = 8: console.log(8);
//     case a = 9: console.log(9);
//     case a = 10: console.log(10);
//     case a = 11: console.log(11);
//     case a = 12: console.log(12);
//     case a = 13: console.log(13);
//     case a = 14: console.log(14);
//     case a = 15: console.log(15);
//         break;
//     default: alert("Вы ввели некорректное число! Введите число в диапазоне от 0 до 15!");
// }

//Задача №5
// function sum(arg1, arg2) {
//     return console.log(arg1 + arg2);
// }

// function sub(arg1, arg2) {
//     return console.log(arg1 - arg2);
// }

// function mult(arg1, arg2) {
//     return console.log(arg1 * arg2);
// }

// function div(arg1, arg2) {
//     return console.log(arg1 / arg2);
// }

// let arg1 = parseInt(prompt("Введите число А"));
// let arg2 = parseInt(prompt("Введите число В"));

// sum(a, b);
// sub(a, b);
// mult(a, b);
// div(a, b);

//Задача №6
// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case 'сложение': return sum(arg1, arg2);
//         case 'вычитание': return sub(arg1, arg2);
//         case 'умножение': return mult(arg1, arg2);
//         case 'деление': return div(arg1, arg2);
//         default: return console.log("Вы ввели некорректные данные");
//     }
// }

// let arg1 = parseInt(prompt("Введите число А"));
// let arg2 = parseInt(prompt("Введите число В"));
// let operation = prompt("Введите одну из 4 арифметических операций (сложение, вычитание, умножение, деление):");

// mathOperation(arg1, arg2, operation);

//Задача №7
// alert(`"null > 0" ${null > 0}`); //false
// alert(`"null < 0" ${null < 0}`); //false
// alert(`"null >= 0" ${null >= 0}`); //true
// alert(`"null <= 0" ${null <= 0}`); //true
// alert(`"null == 0" ${null == 0}`); //false
// alert(`"null === 0" ${null === 0}`); //false
// alert(`"null != 0" ${null != 0}`); //true
// alert(`"null !== 0" ${null !== 0}`); //true
/*
*В соответствии со спецификацией «Стандарт ECMA-262, 3я редакция», операторы сравнения > и <, для того, чтобы выяснить, истинно или ложно выражение,
*пропускают его через так называемый абстрактный алгоритм сравнения для отношений.
*В этом алгоритме null присваивется значение +0, т.к. +0 не больше и не меньше 0, то выдается false.
*Оператор == использует так называемый абстрактный алгоритм сравнения для равенств, возвращая в результате true или false.
*В этом алгоритме null вообще не попадает ни под один пункт и ни во что не преобразовывается и следовательно по умолчанию выдается false.
*При сравнении >= или <= логика следующая. С точки зрения математики,
*если у нас есть два числа, x и y, и если x не меньше и/или не больше, чем y, тогда x должно быть равно у.
*Предположительно, данный оператор работает именно так для того, чтобы оптимизировать вычисления.
*/

//Задача №8
let val = parseInt(prompt("Введите число"));
let pow = parseInt(prompt("Введите степень числа"));

function power(val, pow) {
    var current = val;
    if (pow === 1)
        return current;
    else
        return current * power(current, pow - 1);
}
alert(power(val, pow));