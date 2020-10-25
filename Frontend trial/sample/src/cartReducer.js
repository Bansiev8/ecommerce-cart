const ADD_ITEM = 'ADD_ITEM'

export const addItem = (product, quantity) => ({
  type: ADD_ITEM,
  payload: {
    id: product.id,
    name: product.name,
    quantity: quantity
  }
})

function cartReducer(state = [], action) {
  switch(action.type) {
    case ADD_ITEM: 
      console.log('Item added')
      return [...state, action.payload]
    default:
      return state
  }
}

export default cartReducer