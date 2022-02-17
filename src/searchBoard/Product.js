import React from 'react';

class Product extends React.Component{
    render(){
        let name = !this.props.stocked 
        ? <span className="red">{this.props.name}</span> 
        : this.props.name; 
        return(
            <div className="product">
                <div>{name}</div>
                <div>{this.props.price}</div>
            </div>
        )
    }
}

export default Product;