import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to your Shop Cart!");

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

//adicionando itens no carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myWishList, item2); //reaproveitamento dos modulos para nova feature
await cartService.addItem(myCart, item2);

//deletando item no carrinho
//await cartService.deleteItem(myCart, item2.name);
//await cartService.deleteItem(myCart, item1.name);

await cartService.displayCart(myCart);
await cartService.calculateTotal(myCart); 