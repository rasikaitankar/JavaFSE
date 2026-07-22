import React,{Component} from "react";

class CurrencyConvertor extends Component{
    constructor(props){
        super(props);

        this.state = {
        rupees : "",
        euro : ""
    }
    }

    handleChange = (event) => {
        this.setState({
            rupees:event.target.value
        });
    }
        convertCurrency = () => {
            const euroValue = (parseFloat(this.state.rupees)/90).toFixed(2);

            this.setState({
                euro:euroValue
            });

          alert("Converting to Euro Amount is "+euroValue);
    }
        
        render(){
            return(
                <div>
                   <h2 style={{color:"green"}}>Currency Convertor!!</h2>
                
                <label>Amount: </label>
                <input type="number" value={this.state.rupees} onChange={this.handleChange}></input>
                
                <br></br>
                <br></br>
                
                <label>Currency : </label>
                <input type="text"></input>

                <br></br>
                <br></br>

                <button onClick={this.convertCurrency}>
                    Submit
                </button>
                </div>
            );
        }
    }

export default CurrencyConvertor;
    