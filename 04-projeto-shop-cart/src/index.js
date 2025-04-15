import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];

console.log("Welcome to your Shop Cart!");

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

console.log("Shop Cart Total is:");
console.log( await cartService.calculateTotal(myCart)); 