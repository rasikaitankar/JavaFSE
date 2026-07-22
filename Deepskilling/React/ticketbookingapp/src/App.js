import React, { Component } from "react";
import GuestPage from "./components/GuestPage";
import UserPage from "./components/UserPage";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        };
    }

    login = () => {
        this.setState({ isLoggedIn: true });
    };

    logout = () => {
        this.setState({ isLoggedIn: false });
    };

    render() {

        return (
            <div style={{ textAlign: "center", marginTop: "20px" }}>

                {this.state.isLoggedIn ? (
                    <>
                        <LogoutButton onClick={this.logout} />
                        <hr />
                        <UserPage />
                    </>
                ) : (
                    <>
                        <LoginButton onClick={this.login} />
                        <hr />
                        <GuestPage />
                    </>
                )}

            </div>
        );
    }
}

export default App;