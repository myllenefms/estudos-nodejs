//regras de negócio da entidade item

//ações do item -> cada uma será um método (começar com assinatura do método)
//criar item com subtotal correto
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: await updateSubtotal(price, quantity),
    }
}

async function updateSubtotal(price, quantity) {
    return price * quantity;
}

export {
    createItem,
    updateSubtotal
};