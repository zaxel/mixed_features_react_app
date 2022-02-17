import React, {useState} from 'react';

const computeInitialCounter = () => {
    console.log('Some calculations...');
    return Math.trunc(Math.random()*200);
}

function UseStatePage(){
    // const[counter, setCounter] = useState(0);
    const [counter, setCounter] = useState(()=>computeInitialCounter());
    const [state, setState] = useState({
        title: 'counter',
        date: Date.now()
    })

    const increment = () => {
        // setCounter(counter + 1);
        // setCounter(counter + 3);
        setCounter((prevCounter)=>{
            return prevCounter + 1;
        })
        
        // setCounter(prev=> prev + 3)

    }
    const decrement = () => {
        setCounter(counter - 1);
    }
    const setTitle = () => {
        let title = prompt('please enter new value', 'New Title');
        setState(prev=>{ return{...prev, title }})
    }
    
    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increment}>increase</button>
            <button onClick={decrement}>decrease</button>
            <button onClick={setTitle}>set title</button>
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    )
}

export default UseStatePage;
