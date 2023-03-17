import { Component } from "react";

import './footer.css'

import BeanDivider from "../bean-divider/bean-divider";
import MainMenu from "../main-menu/main-menu";

class Footer extends Component{

    render() {
        return (
            <footer className="footer">
                <MainMenu color={"black"} />
                <BeanDivider color={"black"} />    
            </footer>
        )
    }
}

export default Footer;