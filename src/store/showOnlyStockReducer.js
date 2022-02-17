const initialValue = { showOnlyStock: false }

export const showOnlyStockReducer = (state = initialValue, action) => {
  switch (action.type){
    case 'CHANGE_VALUE':
      return {showOnlyStock: action.payload}
    default: 
      return state;
  }
}
