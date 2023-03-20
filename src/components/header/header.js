import { Component } from "react";

import './header.css'

import MainMenu from "../main-menu/main-menu";

class Header extends Component{

    render() {
        const {title, background} = this.props;

        return (
            <header className="header" style={{backgroundImage: {background}}}>
                <div className="main-menu-container">
                    <MainMenu color={"white"} />
                </div>

                <h1 className="header-title">{title}</h1>
                
            </header>
        )
    }
}

export default Header;