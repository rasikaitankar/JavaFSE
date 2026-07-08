import React,{Component} from 'react';
import Developer from './Developer';


class AddDeveloper extends Component{
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            favLang:'',
            startYear:null
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]:value    
        });
    }

    handleSubmit = (event) => {

    event.preventDefault();

    const newDev = new Developer(
        null,
        this.state.firstName,
        this.state.lastName,
        this.state.favLang,
        this.state.startYear
    );

   fetch("http://localhost:3001/developers", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newDev)
})
.then(response => response.json())
.then(data => {
    this.props.handleNewDeveloper(data);
    this.clearForm();
});

}
    clearForm = () => {
        this.setState({
            firstName:'',
            lastName:'',
            favLang:'',
            startYear:''
        });
       // document.getElementById('devForm').reset();
    }

    render() {
    return (
        <div>
            <h2>Add Developer</h2>

            <form id="devForm" onSubmit={this.handleSubmit}>

                <label>First Name:</label><br />
                <input
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    required
                />
                <br /><br />

                <label>Last Name:</label><br />
                <input
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    required
                />
                <br /><br />

                <label>Favorite Language:</label><br />
                <input
                    type="text"
                    name="favLang"
                    value={this.state.favLang}
                    onChange={this.handleChange}
                    required
                />
                <br /><br />

                <label>Start Year:</label><br />
                <input
                    type="number"
                    name="startYear"
                    value={this.state.startYear || ""}
                    onChange={this.handleChange}
                    required
                />
                <br /><br />

                <button type="submit">
                    Add Developer
                </button>

            </form>
        </div>
    );
}
}

export default AddDeveloper;