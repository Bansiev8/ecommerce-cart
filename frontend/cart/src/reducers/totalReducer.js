const TOTAL = "TOTAL";

function totalReducer (state=[0], action) {
  switch (action.payload) {
    case TOTAL:
      let copyState = state.slice()
      copyState = action.payload.total
      return (copyState)
  }
}

export default totalReducer;