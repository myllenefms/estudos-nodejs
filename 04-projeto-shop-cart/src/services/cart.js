import { updateSubtotal } from "./item.js";
//regras de negócio da entidade carrinho

//ações do carrinho -> cada uma será um método (começar com assinatura do método)
//adicionar item
async function addItem(userCart, item) {
    userCart.push(item);
}

//deletar item - excluir o item todo
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1){
        userCart.splice(index, 1);
    }
}

//remover um item - diminui a quantidade do item
async function removeItem(userCart, item) {
    const index = userCart.findIndex((p)=>p.name === item.name);
    
    if(index == -1){
        console.log("item não encontrado no carrinho");
    }
    else if(userCart[index].quantity == 1){
        deleteItem(userCart, userCart[index].name);
    }
    else if(userCart[index].quantity > 1){
        userCart[index].quantity -= 1;
        userCart[index].subtotal = await updateSubtotal(userCart[index].price, userCart[index].quantity);
    }
}

//calcular o total
async function calculateTotal(userCart) {;
    const result = userCart.reduce((total, item) => total + item.subtotal, 0)
    console.log(`\n 💵 Shop Cart Total is: R$ ${result} 💵`);
}

//exibição do carrinho
async function displayCart(userCart) {
    console.log("\n 🛒 Shop Cart List 🛒");
    userCart.forEach((item, index) => {
        console.log(`${index+1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal ${item.subtotal}`)
    });
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}