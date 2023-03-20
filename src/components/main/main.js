import { Component } from "react";

import './main.css'
import firstProductImg from '../../img/815O9ktyfUL.jpg'
import secondProductImg from '../../img/91Ryk2gKejL.jpg'
import thirdProductImg from '../../img/71qBQnpQFYL.jpg'

import DescriptionBlock from "../description-block/description-block";
import ProductsList from "../products-list/products-list.js";

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                    {name: "Solimo Coffee Beans 2 kg", id: 0, img: firstProductImg, alt: "coffee package", price: "10.73$"},
                    {name: "Presto Coffee Beans 1 kg", id: 2, img: secondProductImg, alt: "coffee package", price: "15.99$"},
                    {name: "AROMISTICO Coffee 1 kg", id: 3, img: thirdProductImg, alt: "coffee package", price: "6.99$"},
                ]
        }
    }

    render() {
        const firstTextPart = `Extremity sweetness difficult behavior he of. On disposal of as landlord horrible.
            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.`;
        const secondTextPart = `Now residence dashwoods she excellent you. Shade being under his bed her, Much
            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
            horrible but confined day end marriage. Eagerness furniture set preserved far
            recommend. Did even but nor are most gave hope. Secure active living depend son
            repair day ladies now.`;

        const {data} = this.state;

        return (
            <main className="main">

                <section className="section-one">
                    <DescriptionBlock 
                        width={"700"}
                        color={"black"}
                        title={"About Us"}
                        firstTextPart={firstTextPart}
                        secondTextPart={secondTextPart} /> 
                </section>
                <section className="section-two">
                    <h2 className="second-section-title">Our best</h2>
                    <ProductsList data={data}/>
                </section>
                
            </main>
        )
    }
}

export default Main;