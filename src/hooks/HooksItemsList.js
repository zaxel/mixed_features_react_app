import React, { useEffect, useState } from "react";

export default function HooksItemsList({getItems}){
    const [items, setItems] = useState([]);

    useEffect(()=>{
        console.log('render');
        const newItems = getItems;
        setItems(newItems);
    },[getItems])

    return(
        <ul>
            { items.map(i => <li key={i}>{i}</li>) }
        </ul>
    )
}