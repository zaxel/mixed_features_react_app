import React from "react";
import SearchTable from "./SearchTable";
import ProductsTable from "./ProductsTable";



function MainTable(){
    return(
        <div className="main__products">
            <div className="main__container">
                <SearchTable />
                <ProductsTable />
            </div>
        </div>
    )
}

export default MainTable;