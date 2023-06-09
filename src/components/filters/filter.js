import { Component } from "react";

import './filters.css'

class Filters extends Component {
    constructor(props){
        super(props);
        this.state = {
            buttonsData: [
                {key: 'Brazil', label: "Brazil"},
                {key: 'Kenya', label: "Kenya"},
                {key: 'Columbia', label: "Columbia"},
            ],
            term: ""
        }
    }

    onUpdateFilter = (e) => {
        const term = e.target.getAttribute('name');
        this.setState({term});
        this.props.onUpdateFilters(term);
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateFilters(term);
    }

    createButtons = (btnData) => {
        return btnData.map(({key, label}) => {

            const active = this.state.term === key;
            const clazz = active ? "btn-light" : "";

            return (
                <button 
                        key={key} 
                        name={key}
                        onClick={this.onUpdateFilter} 
                        className={`btn ${clazz}`} 
                        type="button">
                        {label}
                </button>
                )
        })
    }

    render () {

        const {buttonsData} = this.state
        const allBtns = this.createButtons(buttonsData);

        return (
            <div className="filters-container">
                <div className="input-container">
                <label className="label">
                    Looking for
                    <input 
                        type="text" 
                        className="search-input" 
                        placeholder="start typing here..."
                        value={this.state.term}
                        onChange={this.onUpdateSearch}/>
                </label>
                </div>
                
                <label className="label">
                    Or filter
                    <div className="btn-group">
                        {allBtns}
                    </div>
                </label>
            </div>
        )
    }
}

export default Filters;