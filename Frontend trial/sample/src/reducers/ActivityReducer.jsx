const initialState = [];

const activityReducer = (state = initialState, action) =>{

  switch(action.type) {
    case "ADD_ACTIVITY":
      return [...state, {
        id: action.payload.id,
        name: action.payload.name,
        cost: action.payload.cost,
        num: action.payload.num
      }]
    case "DEL_ACTIVITY":
      const copyState = [...state];
      //Finding the odject to remove
      const i= copyState.findIndex(x => x.id === action.payload.id);
      copyState.splice(i,1);
      return [...copyState];

    case "INCREMENT":
      const copyState1 = [...state];
      //Finding the odject
      const inx= copyState1.findIndex(x => x.id === action.payload.id);
      const updatedNum= copyState1[inx].num+=1;
      copyState1.splice(inx,1);
      return [...copyState1, {
        id: action.payload.id,
        name: action.payload.name,
        cost: action.payload.cost,
        num: updatedNum
      }];

    case "DECREMENT":
      const copyState2 = [...state];
      //Finding the odject
      const ind= copyState2.findIndex(x => x.id === action.payload.id);
      const updatedNum1= copyState2[ind].num-=1;
      copyState2.splice(inx,1);
      return [...copyState2, {
        id: action.payload.id,
        name: action.payload.name,
        cost: action.payload.cost,
        num: updatedNum1
      }];
    default :
      return state;
  }


};

export default activityReducer;