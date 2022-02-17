import { useDispatch, useSelector } from "react-redux";

function SearchTable(props){
    const dispatch = useDispatch();
    const checkInStockValue = useSelector(state => state.showOnlyStockReducer.showOnlyStock);
    const searchValue = useSelector(state=> state.searchReducer)

    const checkerHandler = (e) => {
        dispatch({type: 'CHANGE_VALUE', payload: e.target.checked});
    }


    const inputChangeHandler = (e) => {
        dispatch({type: 'SET_VALUE', payload: e.target.value})
    }
    
    return(
        <form onSubmit={(e)=>e.preventDefault()} className="search-table">
            <div>
                <input 
                    onChange={inputChangeHandler} 
                    value={searchValue} 
                    type="text" 
                    placeholder="Search..."/>
                <label><input 
                    type="checkbox" 
                    onChange={checkerHandler} 
                    checked={checkInStockValue}/> show only product in stock</label>
            </div>
        </form>
    )
}

export default SearchTable;