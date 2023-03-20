import { Component } from 'react';
import ProductListItem from '../products-list-item/products-list-item.js';
import './products-list.css'

class ProductsList extends Component{
    constructor(props){
        super(props);
    }

    render() {
        const productsItems = this.props.data.map(item => {
            const {id, ...itemsProps} = item;
            return (
                <ProductListItem 
                    key={id} {...itemsProps} 
                    
                    />
            )
        });
    
        return (
            <ul className="app-list list-group">
                {productsItems} 
            </ul>
        )
    }
}

export default ProductsList;