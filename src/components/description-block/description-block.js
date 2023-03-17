import { Component } from "react";

import BeanDivider from "../bean-divider/bean-divider";

import './description-block.css'

class DescriptionBlock extends Component {

    render () {
        const {color, title, firstTextPart, secondTextPart} = this.props;

        return (
            <div className="description-container">
                <h1 className="title">{title}</h1>
                 
                 <BeanDivider color={color}/>
                 
                <div className="text-container">
                    <p className="description" >{firstTextPart}</p>
                    <p className="description" >{secondTextPart}</p>
                </div>
            </div>
        )
    }
}

export default DescriptionBlock;