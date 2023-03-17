import { Component } from "react";

import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";

class App extends Component {

    render() {
        return (
        <div className="app">
            <Header />
            <Main />
            <Footer />
        </div>
    )}
}

export default App;