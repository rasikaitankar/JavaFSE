import React from 'react';
import logo from '../logo.svg';
import AddDeveloper from './AddDeveloper';
import DisplayBios from './DisplayBios';
function Home(props){
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
     
        {/* <DeveloperBias name="Rasika Itankar" favlan="Java" startyear="2021"/> */}
        {/* <DisplayBios developers={this.state.developers}/>
        <AddDeveloper handleNewDeveloper={this.handleNewDeveloper}/>
         */}
      </header>
    </div>
  );
}

export default Home;