import React, { useContext } from 'react';
import DisplayBios from './DisplayBios';
import AddDeveloper from './AddDeveloper';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Home';
import AuthContext from '../contexts/Auth';
import Login from './Login';
import EditDeveloper from './EditDeveloper';
import SearchDevelopers from './SearchDevelopers';
import { ADD_DEVELOPER_ROUTE, DEVELOPER_BIOS_ROUTE, EDIT_DEVELOPER_ROUTE, HOME_ROUTE, LOGIN_ROUTE, SEARCH_DEVELOPERS_ROUTE } from '../utils/constants';

function App(){
  const { isLoggedIn } = useContext(AuthContext);

  return (
      <Router >
        <Navbar />
        <Routes>
          <Route path={HOME_ROUTE} element={ <Home /> } />
          <Route path={DEVELOPER_BIOS_ROUTE} element={ <DisplayBios /> } />
          {
            isLoggedIn
            ?
              <Route path={ADD_DEVELOPER_ROUTE} element={ <AddDeveloper /> }/>
            
            :
              <></>
          }
          <Route path={LOGIN_ROUTE} element={ <Login />} />
          <Route data-testid="edit-developer-route" path={EDIT_DEVELOPER_ROUTE} element={<EditDeveloper />} />
          <Route path={SEARCH_DEVELOPERS_ROUTE} element={<SearchDevelopers />} />
        </Routes>
      </Router>
    ); 
}

export default App;
