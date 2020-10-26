const ADD_TO_CART = "ADD_TO_CART";
const DELETE_ITEM = "DELETE_ITEM";
const TOTAL = "TOTAL";

export const AddItem = ({product, quantity}) => ({
  type: ADD_TO_CART,
  payload: {
    id: product.id,
    name: product.name,
    quantity: quantity,
    cost: product.cost
  }
})

export const DeleteItem = ({id}) => ({
  type: DELETE_ITEM,
  payload: {
    id: id
  }
})

export const Total = ({total}) => ({
  type: TOTAL,
  payload: {
    total: total
  }
})