'use scriсt'

// Задача №1
// document.write('<table style = "border-style : solid">');
// for (var i = 1; i <= 8; i++) {
//     document.write('<tr>');
//     if (i % 2 == 0) {
//         for (var j = 1; j <= 8; j++) {
//             if (j % 2 == 0) {
//                 document.write('<td style = "width : 30px; height : 30px; background-color : white"></td>');
//             }
//             else {
//                 document.write('<td style = "width : 30px; height : 30px; background-color : black"></td>');
//             };
//         };
//     }
//     else {
//         for (var j = 1; j <= 8; j++) {
//             if (j % 2 == 0) {
//                 document.write('<td style = "width : 30px; height : 30px; background-color : black"></td>');
//             }
//             else {
//                 document.write('<td style = "width : 30px; height : 30px; background-color : white"></td>');
//             };
//         };
//     }
//     document.write('</tr>');
// };
// document.write('</table>');

// Задача №2*

// Задача №3
const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.name_product}</div>
                    <div><b>Цена за шт.</b>: ${good.price_product}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price_product}</div>
                </div>`;
    }
}

const cart = {
    cartListBlock: null,
    clearCartButton: null,
    cartItem,
    goods: [
        {
            id_product: 1,
            name_product: "Яблоко",
            price_product: 295,
            quantity: 20
        },
        {
            id_product: 2,
            name_product: "Груша",
            price_product: 155,
            quantity: 14
        },
        {
            id_product: 3,
            name_product: "Киви",
            price_product: 100,
            quantity: 32
        },
    ],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.clearCartButton = document.querySelector('.cart-btn');
        this.clearCartButton.addEventListener('click', () => this.clearCart());

        this.render();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} продуктов(а)\n общей стоимостью ${this.getCartPrice()} рублей.`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },
    getCartPrice() {
        return this.goods.reduce(function (price_product, good) {
            return price_product + good.price_product * good.quantity;
        }, 0);
    },
    clearCart() {
        this.goods = [];
        this.render();
    },
};

cart.init();

// Задача №4*