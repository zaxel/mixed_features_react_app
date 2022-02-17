const initialValue = '';
export const searchReducer = (state = initialValue, action) => {
    switch(action.type){
        case 'SET_VALUE':
            return action.payload;
        default:
            return state;
    }
}

// const[searchValue, setSearchValue] = useState('');
