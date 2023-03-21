import { Component } from "react";

import Header from "../header/header";
import DescriptionBlock from "../description-block/description-block";
import ProductsList from "../products-list/products-list";
import Footer from "../footer/footer";
import Filters from "../filters/filter";

import "./coffee-house.css";
import background from "../../img/our-coffee-header.jpg";
import imgGirl from "../../img/girl.jpg";
import imgCoffee from "../../img/71qBQnpQFYL.jpg";

class CoffeeHouse extends Component {
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
            ],
            term: ""
        }
    }

    onUpdateFilters = (term) => {
        this.setState(({term}));
    }

    filterEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        } else if (term === "onIncrease") {
            return items.filter(item => item.increase)
        } else if (term === "moreThousand") {
            return items.filter(item => item.salary > 1000)
        }
            
        return items.filter(item => {
            return item.country.indexOf(term) > -1;
        })
    }

    render() {

        const firstTextPart = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.`;
        const secondTextPart = `Afraid at highly months do things on at. Situation recommend objection do intention
        so questions. 
        As greatly removed calling pleased improve an. Last ask him cold feel
        met spot shy want. Children me laughing we prospect answered followed. At it went
        is song that held help face.`;

        const {data, term} = this.state;
        const visibleData = this.filterEmp(data, term);

        return (
            <>
                <div className="coffee-house_container">
                    <Header title="Our Coffee" background={background} />

                    <div className="about-beans">
                        <img src={imgGirl} alt="girl" className="img-about-beans" />
                        <DescriptionBlock 
                            width={"390"}
                            title={"About our beans"}
                            firstTextPart={firstTextPart} 
                            secondTextPart={secondTextPart}/>
                    </div>

                    <p style={{borderBlockColor: "black", width: "240px"}} className="line"></p>

                    <Filters onUpdateFilters={this.onUpdateFilters} />

                    <ProductsList data={visibleData} />
                    <Footer />
                </div>
            </>
    )}
}

export default CoffeeHouse;