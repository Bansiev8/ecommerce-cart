const ADD_TO_CART = "ADD_TO_CART";
const DELETE_ITEM = "DELETE_ITEM";
const TOTAL = "TOTAL";

export const AddItem = ({product, quantity, cost}) => ({
  type: ADD_TO_CART,
  payload: {
    id: product.id,
    name: product.name,
    quantity: quantity,
    cost: product.cost[0]
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