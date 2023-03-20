import { Component } from "react";

import Header from "../header/header";

import "./coffee-house.css";
import background from "../../img/our-coffee-header.jpg"

class CoffeeHouse extends Component {

    render() {
        return (
            <>
                <Header title="Our Coffee" background={background} />
            </>
    )}
}

export default CoffeeHouse;