import React,{Component} from "react";

class EventExamples extends Component{
    constructor(props){
        super(props);

        this.state = {
            count:0
        };
    }

    increment = () => {
        this.setState({count : this.state.count + 1 });
    }

    decrement = () => {
        this.setState({count:this.state.count - 1 });
    }

    sayHello = () => {
        alert("Hello! Have a nice day!");
    }

    sayWelcome = (message) => {
        alert(message);
    }

    onPress = () => {
        alert("I was clicked");
    }

    currencyConvert = (message) => {
        alert("Converting to Euro Amount is ",message);
    }

    render(){
        return(
            <div>
                <h2>Counter : {this.state.count}</h2>

                <button onClick={() => {
                    this.increment();
                    this.sayHello();
                }}>
                    Increment
                </button>

                &nbsp;&nbsp;

                <button onClick={this.decrement}>
                    Decrement
                </button>

                <br/><br/>

                <button onClick={() => this.sayWelcome("Welcome")}>
                    Say Welcome
                </button>

                <br></br>
                <br></br>

                <button onClick={this.onPress}>
                    Synthetic Event
                </button>

                <br></br>
                <br></br>

                <h2 style={{color:"green"}}>Currency Convertor!!</h2>
                <label>Amount: </label>
                <label>Currency : </label>
                <button onClick={this.currencyConvert}>
                    Submit
                </button>
            </div>
        );
    }
}

export default EventExamples;