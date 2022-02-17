import React, { useState, useMemo, useEffect } from 'react';


function complexCompute(num){
    let i = 0;
    while (i < 300_000_000) i++;
    return num * 2;
}

function UseMemoPage(){
    const [number, setNumber] = useState(39);
    const [colored, setColored] = useState(false);

    const styles = useMemo(()=>({ color: colored ? 'red' : 'black'}), [colored]);


    const computed = useMemo(()=> complexCompute(number), [number]);
    useEffect(()=>{
        console.log('styles changed');
    }, [styles])
    return(
        <div>
            <h1 style={styles}>Calculated value: {computed}</h1>
            <button onClick={()=>setNumber(prev=>prev+1)}>Increase</button>
            <button onClick={()=>setNumber(prev=>prev+1)}>Decrease</button>
            <button onClick={()=>setColored(prev=>!prev)}>Change title color</button>
        </div>
    )
}

export default UseMemoPage;
