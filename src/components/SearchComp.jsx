import React from 'react';
import { Link } from 'react-router-dom';

class SearchComp extends React.Component {
    constructor() {
        super();
        this.state = { userInput: "" }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ userInput: event.target.value });
    }

    render() {
        return (
            <div className="search-page">
                <h2>Search GitHub User</h2>
                <input 
                    className="search-page__input"
                    type="text"  
                    onChange={ this.handleChange } 
                    value={ this.state.userInput }
                    />
                <Link to={  `/user/${this.state.userInput }` } />  
            </div>
        );
    }
};

export default SearchComp;
