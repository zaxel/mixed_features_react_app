import { useEffect, useState } from "react";

const useLogger = (value) => {
    useEffect(()=>console.log('value changed: ', value), [value])
}

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => setValue(e.target.value); 
    const clear = () => setValue('');
    return{
        bind: {value, onChange},
        onChange,
        value,
        clear
    }
}

function CustomHooks(){
    const name = useInput('')
    const lastName = useInput('')

    useLogger(name.value);

    return(
        <div>
            <h1>name: {name.value}</h1>
            <h1>last name: {lastName.value}</h1>
            <button onClick={()=> name.clear()}>name clear</button>
            <input style={{display: 'block', padding: '10px 20px', margin: '10px 0', fontSize: '18px', width: '300px'}} 
                    type="text" {...name.bind} />
            <input style={{display: 'block', padding: '10px 20px', margin: '10px 0', fontSize: '18px', width: '300px'}} 
                    type="text" {...lastName.bind} />
        </div>
    )
}

export default CustomHooks;
