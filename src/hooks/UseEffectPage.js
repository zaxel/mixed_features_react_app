import React, { useState, useEffect } from 'react';

function UseEffectPage(){
    const [type, setType] = useState(null);
    const [bgColor, setBgColor] = useState({backgroundColor: 'white'});
    const [data, setData] = useState([]);
    const [mousePos, setMousePos] = useState({x: 0, y: 0})

    const mousePosHandler = (e) => {
        setMousePos({x: e.clientX, y: e.clientY});
    }
    const toggleBgColor = () => {
        bgColor.backgroundColor === 'white' 
            ? setBgColor({backgroundColor: 'gray'})
            : setBgColor({backgroundColor: 'white'})
    }

    // useEffect(()=>console.log('render in useEffect'))
    useEffect(()=>{
        type &&
        fetch(`https://jsonplaceholder.typicode.com/${type}/?_limit=20`)
        .then(response => response.json())
        .then(json => setData(json))
    }, [type])

    useEffect(()=>{
        console.log('componentDidMount');
        window.addEventListener('mousemove', mousePosHandler);

        return ()=> window.removeEventListener('mousemove', mousePosHandler);
    }, [])
    
    console.log('render')

    return(
        <div style={bgColor}>
            <div>
                <h1>Source: {type}</h1>
                <button onClick={()=>setType('users')}>users</button>
                <button onClick={()=>setType('todos')}>todo</button>
                <button onClick={()=>setType('posts')}>posts</button>
                <button onClick={()=>setType(null)}>clear</button>
            </div>
            <div>
                <button onClick={toggleBgColor}>change bg color</button>
            </div>
            <pre>{JSON.stringify(mousePos, null, 2)}</pre>
            <pre>{type && JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default UseEffectPage;
