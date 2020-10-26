const ADD_ITEM = 'ADD_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'

export const addItem = (product, quantity) => ({
  type: ADD_ITEM,
  payload: {
    id: product.id,
    name: product.name,
    quantity: quantity
  }
})

export const deleteItem = () => ({
  type: DELETE_ITEM
})

function cartReducer(state = [], action) {
  switch(action.type) {

    case ADD_ITEM: 
      let items = state.filter((item) => item.id === action.payload.id)
      if (items.length !== 0) {
        let index = items.indexOf(items[0])
        return [...state.slice(0, index), action.payload, ...state.slice(index + 1)]
      }
      return state.concat(action.payload)
      
    case DELETE_ITEM:
      let deleteFilterItem = state.filter((item) => item.id === action.payload.id)
      if (deleteFilterItem.length !== 0) {
        let index = deleteFilterItem.indexOf(items[0])
        return [...state.slice(0, index), state.slice(index + 1)]
      }
      return state
    default:
      return state
  }
}

export default cartReducer