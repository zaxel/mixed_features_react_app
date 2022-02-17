import React from 'react';

class Category extends React.Component{
    render(){
        return(
            <div className="category">{this.props.category}</div>
        )
    }
}

export default Category;