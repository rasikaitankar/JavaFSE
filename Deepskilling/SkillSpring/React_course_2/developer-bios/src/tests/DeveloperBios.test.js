import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Developer from '../models/Developer';
import DeveloperBio from '../components/DeveloperBio';

let fakeDevs = [
    new Developer('1','Jason','Monroe','JavaScript',1999),
    new Developer('2','Steve','Wozniac','Objective C',1970),
];

const mockNavigate = jest.fn();
jest.mock('react-router', () =>  ({
    ...jest.requireActual('react-router'),
        useNavigate: () => mockNavigate
    })
);

it(`should display an edit button for each developer that navigates to /edit`, async () => {
    render(<Router><DeveloperBio developer={fakeDevs[0]} isAdmin={true} /></Router>);
    const editButton = screen.getByText("Edit");
    expect(editButton).toBeInTheDocument();
    
    fireEvent.click(editButton);
    expect(mockNavigate).toHaveBeenCalledWith("/edit/1");
});