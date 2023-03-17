import { Component } from "react";

import Header from "../header/header";
import Main from "../main/main";

class App extends Component {

    render() {
        return (
        <div className="app">
            <Header />
            <Main />
        </div>
    )}
}

export default App;