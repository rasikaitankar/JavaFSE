
import './App.css';
import React, { useContext } from 'react';
import Developer from './Developer';
import {BrowserRouter as Router,Switch,Routes,Route, Navigate, useNavigate} from 'react-router-dom';
import AuthContext from '../Context/index';
import Navbar from "../Components/Navbar";
import Login from "../Components/Login";
import Home from "../Components/Home";
import DisplayBios from "../Components/DisplayBios";
import AddDeveloper from "../Components/AddDeveloper";

function App(){

    const {isLoggedIn}=useContext(AuthContext);

    // return(

    //     <Router>

    //         {/* Show Navbar only after login */}

    //         {isLoggedIn && <Navbar/>}

    //         <Routes>

    //             {/* First page */}

    //             <Route
    //                 path="/login"
    //                 element={<Login/>}
    //             />

    //             {/* If user not logged in redirect to login */}

    //             <Route
    //                 path="/"
    //                 element={
    //                     isLoggedIn
    //                     ?
    //                     <Home/>
    //                     :
    //                     <Navigate to="/login"/>
    //                 }
    //             />

    //             <Route
    //                 path="/developers"
    //                 element={
    //                     isLoggedIn
    //                     ?
    //                     <DisplayBios/>
    //                     :
    //                     <Navigate to="/login"/>
    //                 }
    //             />

    //             <Route
    //                 path="/developers/add"
    //                 element={
    //                     isLoggedIn
    //                     ?
    //                     <AddDeveloper/>
    //                     :
    //                     <Navigate to="/login"/>
    //                 }
    //             />

    //             {/* Any unknown URL */}

    //             <Route
    //                 path="*"
    //                 element={<Navigate to="/login"/>}
    //             />

    //         </Routes>

    //     </Router>

    // );

    return(
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/bios">
                    <DisplayBios/>
                </Route>
                <Route exact path="/create-bio">
                    <AddDeveloper/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       developers: [
//         // new Developer(1, "Rasika", "Itankar", "Java", 2021),
//         // new Developer(2, "Riya", "Patel", "Python", 2022)
//       ]
//     }
//   }

//   componentDidMount(){
//     fetch("http://localhost:3001/developers")
//     .then(res => res.json())
//     .then(dev => this.setState({developers:dev}))
//     .catch(error => console.log(error));
//   }

//   // handleNewDeveloper = (dev) => {
//   //   dev.id = this.state.developers.length + 1;
//   //   let newDev = [...this.state.developers,dev];
//   //    console.log(newDev);  
//   //   this.setState({developers:newDev});
//   // }
//   handleNewDeveloper = (dev) => {

//     const newDevelopers = [...this.state.developers, dev];

//     this.setState({
//         developers: newDevelopers
//     });

// }

//   render(){
//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React
//   //       </a>
//   //       {/* <DeveloperBias name="Rasika Itankar" favlan="Java" startyear="2021"/> */}
//   //       <DisplayBios developers={this.state.developers}/>
//   //       <AddDeveloper handleNewDeveloper={this.handleNewDeveloper}/>

//   //     </header>
//   //   </div>
//   // );
//     return(
//       <Router>
//         <Navbar/>
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/developers" element={<DisplayBios developers={this.state.developers}/>}/>
//           <Route path="/developers/add" element={<AddDeveloper handleNewDeveloper={this.handleNewDeveloper}/>}/>
//           {/* <Route path="/developers/add" element={<AddDeveloper/>}/>  */}
//         </Routes>
//       </Router>
//     );
// }
// }