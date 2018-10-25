import React from 'react';
import { Link } from 'react-router-dom';
import './SearchComp.css';

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
                        onChange={this.handleChange}
                        value={this.state.userInput}
                        className="search-page__input"
                        type="text"
                        required
                    />
                    <Link to={ `/user/${this.state.userInput}` }>  
                        <button className="search-page__button"
                                disabled={ !this.state.userInput }
                                title="veuillez renseigner un nom"> Search 
                        </button>
                    </Link>
            </div>
                );
            }
        };
        
export default SearchComp;
