const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';



export const increment =(props) => {
  return{
    type: INCREMENT,
    payload:{
      id: props.id,
    }
  };
}

export const decrement =(props) => {
  return{
    type: DECREMENT,
    payload:{
      id: props.id,
    }
  };
}