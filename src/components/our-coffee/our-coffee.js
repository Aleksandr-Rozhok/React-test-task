import { Component } from "react";

import Footer from "../footer/footer";
import Header from "../header/header";
import DescriptionBlock from "../description-block/description-block";

import "./our-coffee.css"
import background from "../../img/our-coffee-header.jpg"
import imgForDesc from "../../img/aromise.jpg"

class OurCoffee extends Component {

    render() {
        const firstTextPart = `Country: Brasil`;
        const secondTextPart = `Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
        
        return (
        <>
            <div className="our-coffee_container">
                <Header title="Our Coffee" background={background} />
                <div className="about-beans">
                    <img src={imgForDesc} alt="girl" className="img-about-it" />
                    <DescriptionBlock 
                        width={"720"}
                        title={"About it"}
                        firstTextPart={firstTextPart} 
                        secondTextPart={secondTextPart}/>
                </div>
                <Footer />
            </div>
        </>
    )}
}

export default OurCoffee;
