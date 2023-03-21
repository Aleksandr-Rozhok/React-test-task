import { Component } from 'react'

import "./products-list-item.css";

class ProductListItem extends Component {
  constructor(props) {
    super(props);
  }

    render() {
        const {img, alt, name, price, country} = this.props;
        return (
            <li className="product-item">
              <img src={img} alt={alt} className="product-img" />
              <h3 className="product-title">{name}</h3>
              <div className="country-container">
                <p className="product-country">{country}</p>
              </div>
              <div className="price-container">
                <p className="product-price">{price}</p>
              </div>
            </li>
          );
    }
}

export default ProductListItem;