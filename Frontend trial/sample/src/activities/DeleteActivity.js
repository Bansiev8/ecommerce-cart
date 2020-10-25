const DEL_ACTIVITY = 'DEL_ACTIVITY';

export const DelActivity =(props) => {
  return{
    type: DEL_ACTIVITY,
    payload:{
      id: props.id,
    }
  };
}
