"use strict"
//Задача №1
// let num = 0;
// let a = 0;

// while (num <= 100) {
//     if (num == 0 || num == 1) {
//         ;
//     }
//     else if (num == 2) {
//         console.log(num);
//     }
//     else {
//         for (let i = 2; i <= num; i++) {
//             if (num % i == 0) {
//                 a += 1;
//                 continue;
//             }
//         }
//         if (a <= 1) console.log(num);
//     }
//     a = 0;
//     num++;
// }

//Задача №2a
let productBasket = [['яблоки', 25], ['груши', 30], ['бананы', 70], ['киви', 120], ['помидоры', 50]];

//Задача №2b
function countBasketPrice(arr) {
    let fruit = [];
    let costs = [];
    let totalCost = 0;

    for (let i = 0; i < arr.length; ++i) {
        fruit.push(arr[i][0]);
        costs.push(arr[i][1]);
    }

    for (let i = 0; i < costs.length; i++) {
        totalCost += parseInt(costs[i]);
    }
    return console.log(`Стоимость корзины составляет ` + totalCost + ` рублей.`);
}

console.log('Корзина: ' + productBasket);
countBasketPrice(productBasket);

//Задача №4
// for (var i = 0; i < 10; console.log(i), i++) {

// }

//Задача №5
// var a = prompt("введите символ");
// console.log(a);
// let i = 1;
// var x = a;

// while (i < 20) {
//     console.log(a += x);
//     i++;
// }

