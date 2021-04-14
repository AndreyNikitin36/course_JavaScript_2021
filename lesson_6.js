"use strict";

// Задача №1
const catalog = {
    catalogBlock: null,
    cart: null,
    list: [
        {
            id_product: 1,
            product_name: 'Яблоко',
            price: 169,
            quantity: 120
        },
        {
            id_product: 2,
            product_name: 'Груша',
            price: 185,
            quantity: 200
        },
        {
            id_product: 3,
            product_name: 'Киви',
            price: 850,
            quantity: 20
        }
    ],

    init(catalogBlockClass, cart) {
        this.catalogBlock = document.querySelector(`.${catalogBlockClass}`);
        this.cart = cart;
        this.render();
        this.addEventHandlers();
    },

    render() {
        if (this.getCatalogListLength() > 0) {
            this.renderCatalogList();
        } else {
            this.renderEmptyCatalog();
        }
    },

    addEventHandlers() {
        this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
    },

    addToBasket(event) {
        if (!event.target.classList.contains('product__add-to-cart')) return;
        const idProduct = +event.target.dataset.id_product;
        const productToAdd = this.list.find((product) => product.id_product === idProduct);
        this.cart.addToBasket(productToAdd);
    },

    getCatalogListLength() {
        return this.list.length;
    },

    renderCatalogList() {
        this.catalogBlock.innerHTML = '';
        this.list.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
        });
    },

    renderCatalogItem(item) {
        return `<div class="product">
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <p>На складе: ${item.quantity} кг</p>
                <button
                    class="product__add-to-cart"
                    data-id_product="${item.id_product}"
                >В корзину</button>
            </div>`;
    },

    renderEmptyCatalog() {
        this.catalogBlock.innerHTML = '';
        this.catalogBlock.textContent = 'Каталог товаров пуст';
    },
};

const cart = {
    cartBlock: null,
    clrCartButton: null,
    goods: [],

    init(cartBlockClass, clrCartButton) {
        this.cartBlock = document.querySelector(`.${cartBlockClass}`);
        this.clrCartButton = document.querySelector(`.${clrCartButton}`);

        this.addEventHandlers();
        this.render();
    },

    addEventHandlers() {
        this.clrCartButton.addEventListener('click', this.dropCart.bind(this));
    },

    dropCart() {
        this.goods = [];
        this.render();
    },

    render() {
        if (this.getCartGoodsLength() > 0) {
            this.renderCartList();
        } else {
            this.renderEmptyCart();
        }
    },

    addToBasket(product) {
        if (product) {
            const findInBasket = this.goods.find(({ id_product }) => product.id_product === id_product);
            if (findInBasket) {
                findInBasket.quantity++;
            } else {
                this.goods.push({ ...product, quantity: 1 });
            }
            this.render();
        } else {
            alert('Ошибка добавления!');
        }
    },

    getCartGoodsLength() {
        return this.goods.length;
    },

    renderEmptyCart() {
        this.cartBlock.innerHTML = '';
        this.cartBlock.textContent = 'Корзина пуста.';
    },

    renderCartList() {
        this.cartBlock.innerHTML = '';
        this.goods.forEach(item => {
            this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartItem(item));
        });
    },

    renderCartItem(item) {
        this.sumCartProduct = item.price * item.quantity;
        return `<div>
                <h3>${item.product_name}</h3>
                <p>Цена: ${item.price} руб.</p>
                <p>Кол-во: ${item.quantity} кг</p>
                <p>Стоимость: ${this.sumCartProduct} руб.</p>
            </div>`;
    },

};

catalog.init('catalog', cart);
cart.init('cart', 'clr-cart');
