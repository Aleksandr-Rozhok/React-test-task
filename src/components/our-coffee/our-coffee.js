import { Component } from "react";

import Footer from "../footer/footer";
import Header from "../header/header";

import "./our-coffee.css"
import background from "../../img/our-coffee-header.jpg"
import imgForDesc from "../../img/aromise.jpg"
import BeanDivider from "../bean-divider/bean-divider";

class OurCoffee extends Component {

    render() {
        return (
        <>
            <div className="our-coffee_container">
                <Header title="Our Coffee" background={background} />
                <div className="about-section">
                    <img src={imgForDesc} alt="girl" className="img-about-it" />
                    <div className="about-it">
                        <h3 className="desc-title">About it</h3>
                        <BeanDivider />
                        <div className="desc-container">
                            <p className="desc-category">Country: <span className="text">Brasil</span></p>
                            <p className="desc-category">Description: <span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></p>
                            <p className="desc-category">Price: <span className="desc-price">16.99$</span></p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )}
}

export default OurCoffee;
