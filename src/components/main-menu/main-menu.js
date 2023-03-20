import { Component } from "react";
import { Link } from "react-router-dom";

import './main-menu.css'
import whiteBeans from '../../img/Vector.png'
import blackBeans from '../../img/Vector-black.png'

class MainMenu extends Component{

    render() {
        const {color} = this.props;
        const colorImg = color === "white" ? whiteBeans : blackBeans;
        
        return (
                <nav className="main-menu">
                    <ul className="main-menu_ul">
                        <li className="logo">
                            <Link to="/" style={{color: `${color}`}}>
                                <img src={colorImg} alt="logo" className="logo" />
                            </Link></li>
                        <li className="main-menu-item">
                            <Link to="/coffee-house" style={{color: `${color}`}}>Coffee house</Link>
                        </li>
                        <li className="main-menu-item">
                            <Link to="/our-coffee" style={{color: `${color}`}}>Our coffee</Link>
                        </li>
                        <li className="main-menu-item">
                            <Link to="/pleasure" style={{color: `${color}`}}>For your pleasure</Link>
                        </li>
                    </ul>
                </nav>  
        )
    }
}

export default MainMenu;