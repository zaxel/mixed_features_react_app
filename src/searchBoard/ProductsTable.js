import React, { useEffect } from 'react';
import { scrollbarHandler } from "../servFunctions/scrollbarHandler";
import { useSelector } from 'react-redux';
import Category from './Category';
import Product from './Product';
import productsList from './productsList';

let ProductsTable = () => {
    const showOnlyInStock = useSelector(state=> state.showOnlyStockReducer.showOnlyStock);
    const ROWS = [];
    let categoryLast = null;
    const searchValue = useSelector(state => state.searchReducer);

    productsList.forEach(row=>{
        if(showOnlyInStock && !row.stocked)return;
        if(row.name.toLowerCase().indexOf(searchValue.toLowerCase())=== -1)return;
        if(row.category !== categoryLast){
            ROWS.push(<Category key={row.category} category={row.category}/>)
            ROWS.push(<Product key={row.name} price={row.price} name={row.name} stocked={row.stocked}/>)
        }else {
            ROWS.push(<Product key={row.name} price={row.price} name={row.name} stocked={row.stocked}/>)
        }
        categoryLast = row.category;
    })
    useEffect(()=> scrollbarHandler());
    return(
        <div className="products-table">
            <div className="product-stable__cont">
                <div className="product-stable__cont-title">
                    <div>Name</div>
                    <div>Price</div>
                </div>
                    {ROWS}
            </div>
        </div>
        
    )
}

export default ProductsTable;