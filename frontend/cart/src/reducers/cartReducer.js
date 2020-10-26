const ADD_TO_CART = "ADD_TO_CART";
const DELETE_ITEM = "DELETE_ITEM";

function cartReducer (state= [], action) {
  
  switch(action.type) {
    
    case ADD_TO_CART:
      let copyState = state.slice();
      let item = copyState.filter((items)=> items.id === action.payload.id)
      let i = copyState.findIndex(item)
      if (item.length !== 0)
      {
        copyState[i].quantity +=1;
        return [copyState]
      }
      else{
        return [copyState.concat(action.payload)]
      }

    case DELETE_ITEM:
      let copyState1 = state.slice();
      let item1 = copyState1.filter((items)=> items.id === action.payload.id)
      let ind = copyState1.findIndex(item1)
      let copyState2 = copyState1.splice(ind)
      return [copyState2]
  }
}

export default cartReducer;