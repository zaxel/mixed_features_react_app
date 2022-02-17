import React, { useState, useCallback } from 'react';
import HooksItemsList from './HooksItemsList';


function UseCallbackPage(){

    const [colored, setColored] = useState(false);
    const [count, setCount] = useState(1);
    
    const styles = { color: colored ? 'black' : 'red'};

    //render children el while changing parent color
    // const generateItemsFromAPI = () => new Array(count).fill('').map((_,i)=> `Element ${i + 1}`);
    
    //render children el only when it changes. works as planed
    const generateItemsFromAPI = useCallback(()=> new Array(count).fill('').map((_,i)=> `Element ${i + 1}`), [count]);
    
    return(
        <div>
            <h1 style={styles}>Number of the elements: {count}</h1>
            <button onClick={()=>setCount(prev=>prev+1)}>Increase</button>
            <button onClick={()=>setCount(prev=>prev-1)}>Decrease</button>
            <button onClick={()=>setColored(prev=>!prev)}>Change title color</button>
            <HooksItemsList getItems={generateItemsFromAPI}/>
        </div>
    )
}

export default UseCallbackPage;
