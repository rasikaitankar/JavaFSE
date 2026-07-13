import React, { act } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import clean from 'clean-tagged-string';
import { BrowserRouter as Router } from 'react-router-dom';

import SearchDevelopers from '../components/SearchDevelopers';
import Developer from '../models/Developer';
import * as devAPI from '../apiCalls/devAPI';

const graphQLResponse = {
    data: {
        devsByLastName: [
            new Developer(1, "Jay", "Monroe", "C#", 2010),
            new Developer(2, "Marilyn", "Monroe", "Java", 2010)
        ]
    }
}


it(`Given I am on the Search page,
    Then I should see a dropdown with the 4 search options, 
    a textbox to search with and a submit button,
    When I make a search, the graphQL request should be made
    and the results should appear on the screen`, async() => {

    const searchSpy = jest.spyOn(devAPI, 'searchDevelopers').mockResolvedValue(graphQLResponse);

    render(<Router><SearchDevelopers /></Router>);
    const dropdown = screen.getByTestId('ddlSearch');
    const submitButton = screen.getByTestId('submitButton');
    const searchBox = screen.getByTestId('txtSearch');

    await act(async () => {
        fireEvent.change(dropdown, { target: { value: 'devsByLastName' } });
        fireEvent.change(searchBox, { target: { value: 'Monroe' } });
        fireEvent.click(submitButton);
    });

    const query = clean `{
        devsByLastName(name:"Monroe"){
            id,
            firstName,
            lastName,
            favoriteLanguage,
            yearStarted
        }
    }`

    expect(searchSpy).toHaveBeenCalledWith(query);
    expect(screen.getAllByText(/Monroe/)).toHaveLength(2);

});


it(`Given I make a search request,
    When the request fails,
    the error is logged in the console`, async () => {

    const searchSpy = jest.spyOn(devAPI, 'searchDevelopers').mockRejectedValue("404 Error");
    const consoleSpy = jest.spyOn(console, 'log');

    render(<Router><SearchDevelopers /></Router>);
    const dropdown = screen.getByTestId('ddlSearch');
    const submitButton = screen.getByTestId('submitButton');
    const searchBox = screen.getByTestId('txtSearch');

    await act(async() => {
        fireEvent.change(dropdown, { target: { value: 'devsByLastName' } });
        fireEvent.change(searchBox, { target: { value: 'Monroe' } });
        fireEvent.click(submitButton);
    });

    expect(searchSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith("404 Error");

});