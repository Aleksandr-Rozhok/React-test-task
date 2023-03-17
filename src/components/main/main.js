import { Component } from "react";

import './main.css'

import DescriptionBlock from "../description-block/description-block";

class Main extends Component{

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
            repair day ladies now.`

        return (
            <main className="main">

                <section className="section-one">
                    <DescriptionBlock 
                        color={"black"}
                        title={"About Us"}
                        firstTextPart={firstTextPart}
                        secondTextPart={secondTextPart} /> 
                </section>
                <section className="section-two">
                    <h2 className="second-section-title">Our best</h2>
                </section>
                
            </main>
        )
    }
}

export default Main;