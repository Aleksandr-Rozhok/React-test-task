import { Component } from "react";

import './header.css'

import BeanDivider from "../bean-divider/bean-divider";
import MainMenu from "../main-menu/main-menu";

class Header extends Component{

    render() {
        return (
            <header className="header">
                <div className="main-menu-container">
                    <MainMenu color={"white"} />
                </div>

                <div className="header-description-container">
                    <h1 className="header-title">Everything You Love About Coffee</h1>

                    <BeanDivider color={"white"} />

                    <h2 className="header-h2-title">We makes every day full of energy and taste</h2>
                    <h2 className="header-h2-title">Want to try our beans?</h2>

                    <button className="btn-more">More</button>
                </div>
                
            </header>
        )
    }
}

export default Header;