import { Component } from "react";

import Main from "../main/main";
import Footer from "../footer/footer";
import MainHeader from "../main-header/main-header";

class App extends Component {

    render() {
        return (
        <div className="app">
            <MainHeader />
            <Main />
            <Footer />
        </div>
    )}
}

export default App;