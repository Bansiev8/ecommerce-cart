const ADD_ACTIVITY = 'ADD_ACTIVITY';

export const AddActivity = (props) => {
  return {
    type: ADD_ACTIVITY,
    payload: {
      id: props.id,
      name: props.name,
      num: props.num,
      cost: props.cost
    }
  };
}
