const initialValue = { user: null };
export const authReducer = (state = initialValue, action) => {
    switch(action.type){
        case 'SET_USER':
            return {user: action.payload};
        default:
            return state;
    }
}