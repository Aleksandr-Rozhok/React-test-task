import { Component } from "react";

import Footer from "../footer/footer";
import Header from "../header/header";
import DescriptionBlock from "../description-block/description-block";
import ProductsList from "../products-list/products-list";

import "./pleasure.css"
import background from "../../img/pleasure.jpg"
import imgForDesc from "../../img/pleasure-desc.jpg"
import imgCoffee from "../../img/71qBQnpQFYL.jpg"

class Pleasure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "AROMISTICO Coffee 1 kg", id: 0, img: imgCoffee, country: "Brazil", price: "6.99$"},
                {name: "AROMISTICO Coffee 1 kg", id: 1, img: imgCoffee, country: "Kenya", price: "6.99$"},
                {name: "AROMISTICO Coffee 1 kg", id: 2, img: imgCoffee, country: "Columbia", price: "6.99$"},
                {name: "AROMISTICO Coffee 1 kg", id: 3, img: imgCoffee, country: "Brazil", price: "6.99$"},
                {name: "AROMISTICO Coffee 1 kg", id: 4, img: imgCoffee, country: "Brazil", price: "6.99$"},
                {name: "AROMISTICO Coffee 1 kg", id: 5, img: imgCoffee, country: "Brazil", price: "6.99$"},
            ]
        }
    }

    render() {

        const firstTextPart = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.`;
        const secondTextPart = `Afraid at highly months do things on at. Situation recommend objection do intention
        so questions. 
        As greatly removed calling pleased improve an. Last ask him cold feel
        met spot shy want. Children me laughing we prospect answered followed. At it went
        is song that held help face.`;

        const {data} = this.state; 

        return (
        <>
            <div className="pleasure_container">
                <Header title="For your pleasure" background={background} />
                <div className="goals-section">
                    <img src={imgForDesc} alt="girl" className="img-about-goods" />
                    <DescriptionBlock 
                            width={"390"}
                            title={"About our goods"}
                            firstTextPart={firstTextPart} 
                            secondTextPart={secondTextPart}/>
                </div>

                <p style={{borderBlockColor: "black", width: "240px"}} className="line"></p>

                <ProductsList data={data} />
                <Footer />
            </div>
        </>
    )}
}

export default Pleasure;