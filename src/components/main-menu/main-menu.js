import { Component } from "react";

import './main-menu.css'
import whiteBeans from '../../img/Vector.png'
import blackBeans from '../../img/Vector-black.png'

class MainMenu extends Component{

    render() {
        const {color} = this.props;
        const colorImg = color === "white" ? whiteBeans : blackBeans;
        
        return (
                <nav className="main-menu">
                    <a href="#">
                        <img src={colorImg} alt="logo" className="logo" />
                    </a>
                    <a style={{color: `${color}`}} href="#" className="main-menu-item">Coffee house</a>
                    <a style={{color: `${color}`}} href="#" className="main-menu-item">Our coffee</a>
                    <a style={{color: `${color}`}} href="#" className="main-menu-item">For your pleasure</a>
                </nav>
        )
    }
}

export default MainMenu;