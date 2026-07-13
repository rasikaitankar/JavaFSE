import React, { useState } from 'react';
import DeveloperBio from './DeveloperBio';
import '../styles/SearchDevelopers.css';
import queryArgsFunctions from '../graphQLUtils/devQueryArgsBuilder';
import clean from 'clean-tagged-string';
import { searchDevelopers } from '../apiCalls/devAPI';

function SearchDevelopers() {
    const [queryName, setQueryName] = useState('devsByFirstName');
    const [queryValue, setQueryValue] = useState('');
    const [results, setResults] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        let queryArgsFunction = queryArgsFunctions[queryName];
        let queryArgs = queryArgsFunction(queryValue);

        const query = clean `{
            ${queryName}${queryArgs}{
                id,
                firstName,
                lastName,
                favoriteLanguage,
                yearStarted
            }
        }`

        searchDevelopers(query)
        .then(res => setResults(res.data[queryName]))
        .catch(error => console.log(error))

    }

    const clearTextbox = () => document.getElementById("queryValue").value = '';

    return (
        <div className="container">
            <h1>Search Developer Bios</h1>
            <div className='row'>
                <div className="col-md-6">
                    <form id="searchForm" onSubmit={ handleSubmit }>
                        <div className="form-group">
                            <label htmlFor="queryName">Select Query</label>
                            <select name="queryName" data-testid="ddlSearch" className='form-control' 
                                    onChange={ (e) => { 
                                        setQueryName(e.target.value);
                                        clearTextbox();
                                    } }>
                                <option value="devsByFirstName" data-testid="ddlSearchField">First Name</option>
                                <option value="devsByLastName" data-testid="ddlSearchField">Last Name</option>
                                <option value="devsByFavLang" data-testid="ddlSearchField">Favorite Language</option>
                                <option value="devsByYearStarted" data-testid="ddlSearchField">Year Started</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="queryValue">Search</label>
                            <input type="text" id="queryValue" data-testid="txtSearch" className='form-control' name="queryValue" 
                                   onChange={ (e) => setQueryValue(e.target.value) } 
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-success form-control"  data-testid="submitButton">Search</button>
                        </div>
                    </form>
                </div>
            </div>
            {
                results
                ?
                    results.map(dev => <DeveloperBio developer={dev} key={dev.id} />)
                :
                    <div></div>
            }
        </div>
    );
}

export default SearchDevelopers;