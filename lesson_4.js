'use scriсt'

// Задача №1

function digitNumber(num) {
    if (!Number.isInteger || num < 0 || num > 999) {
        console.log("Введите число от 0 до 999!");
        return {};
    }

    return {
        firstDigit: num % 10,
        secondDigit: Math.floor(num / 10) % 10,
        thirdDigit: Math.floor(num / 100)
    };
}

let num = prompt("Введите число от 0 до 999");

console.log(digitNumber(num));

// Задача №2

const basket = {
    products: [
        {
            name_product: "Яблоко",
            price_product: 295,
            quantity: 20
        },

        {
            name_product: "Груша",
            price_product: 155,
            quantity: 14
        },

        {
            name_product: "Киви",
            price_product: 100,
            quantity: 32
        }
    ]

}