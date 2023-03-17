import { Component } from "react";

import './main-menu.css'

class MainMenu extends Component{

    render() {
        return (
                <nav className="main-menu">
                    <a href="#">
                        <img src={require('../../img/Vector.png')} alt="logo" className="logo" />
                    </a>
                    <a href="#" className="main-menu-item">Coffee house</a>
                    <a href="#" className="main-menu-item">Our coffee</a>
                    <a href="#" className="main-menu-item">For your pleasure</a>
                </nav>
        )
    }
}

export default MainMenu;