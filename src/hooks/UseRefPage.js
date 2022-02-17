import React, { useState, useEffect, useRef } from 'react';

// let renderCount = 1;

function UseRefPage(){
    // const [renderCount, setRenderCount] = useState(0);
    const [testState, setTestState] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const renderCount = useRef(1);
    const inputRef = useRef(null);
    const prevVal = useRef('');

    useEffect(()=>{
        // setRenderCount(prev => prev + 1)
        renderCount.current++;
        console.log('curr: ' +inputRef.current.value +', prev: ' + prevVal.current)
    })
    useEffect(()=>{
        prevVal.current = inputValue;
    }, [inputValue])

    const focus = () => inputRef.current.focus() 

    return(
        <div>
            <h1>Test state value: {''+testState}</h1>
            <h1>Renders count: {renderCount.current}</h1>
            <h1>Current: {inputValue}</h1> 
            <h1>Prev: {prevVal.current}</h1>
            <button onClick={()=>setTestState(!testState)}>change test state</button>
            <input style={{display: 'block', padding: '10px 20px', margin: '10px 0', fontSize: '18px', width: '300px'}} 
                    type="text" ref={inputRef}
                    value={inputValue} 
                    onChange={(e)=>setInputValue(e.currentTarget.value)}/>
            <button onClick={focus}>focus on input</button>
        </div>
    )
}

export default UseRefPage;
