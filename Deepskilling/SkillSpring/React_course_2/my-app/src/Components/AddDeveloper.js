import React,{Component} from 'react';
import Developer from './Developer';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
function AddDeveloper(){
    
    const navigate = useNavigate();
    const[firstName,setFirstName] = useState('');
    const[lastName,setLastName] = useState('');
    const[favLang,setFavLang] = useState('');
    const[startYear,setStartYear] = useState(null);
    const[isValidForm,setIsValidForm] = useState(false);
    const[isDirtyForm,setIsDirtyForm] = useState(false);

    useEffect(() =>{
        let firstNameValid = firstName ? true : false;
        let lastNameValid = lastName ? true : false;
        let favLangValid = favLang ? true : false;
        let startYearValid = startYear ? true : false;
        
        let isValid = firstNameValid && lastNameValid && favLangValid && startYearValid;
        let isDirty = firstName || lastName || favLang || startYear;
        setIsValidForm(isValid);
        setIsDirtyForm(isDirty);
    },[firstName,lastName,favLang,startYear]);

    const handleSubmit = (event) => {

    event.preventDefault();

    let newDev = new Developer(
        null,
        firstName,
        lastName,
        favLang,
        startYear
    );

   fetch("http://localhost:3001/developers", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newDev)
})
.then(() => navigate("/developers"))
.catch(error => console.log(error));

}
    return (
        <div>
            <h2>Add Developer</h2>

            <form id="devForm" onSubmit={handleSubmit}>

                <label>First Name:</label><br />
                <input
                    type="text"
                    name="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <br /><br />

                <label>Last Name:</label><br />
                <input
                    type="text"
                    name="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <br /><br />

                <label>Favorite Language:</label><br />
                <input
                    type="text"
                    name="favLang"
                    
                    onChange={(e) => setFavLang(e.target.value)}
                    required
                />
                <br /><br />

                <label>Start Year:</label><br />
                <input
                    type="number"
                    name="startYear"
                    
                    onChange={(e) => setStartYear(e.target.value)}
                    required
                />
                <br /><br />

                <div className="form-group">
                    <button type="submit" disabled={!isValidForm} clasName="btn btn-success">
                    Submit
                </button>
                </div>
                {
                    (!isValidForm && isDirtyForm)
                    ?
                    <div style={{fontSize:'12px',color:'red'}}>All fields are required and year started must be numeric</div>
                    :
                        <div></div>
                }

            </form>
        </div>
    );
}


//implementation of adddeveloper component using class based component
// class AddDeveloper extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             firstName:'',
//             lastName:'',
//             favLang:'',
//             startYear:null
//         }
//     }

//     handleChange = (event) => {
//         const target = event.target;
//         const value = target.value;
//         const name = target.name;
//         this.setState({
//             [name]:value    
//         });
//     }

//     handleSubmit = (event) => {

//     event.preventDefault();

//     const newDev = new Developer(
//         null,
//         this.state.firstName,
//         this.state.lastName,
//         this.state.favLang,
//         this.state.startYear
//     );

//    fetch("http://localhost:3001/developers", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(newDev)
// })
// .then(response => response.json())
// .then(data => {
//     this.props.handleNewDeveloper(data);
//     this.clearForm();
// });

// }
//     clearForm = () => {
//         this.setState({
//             firstName:'',
//             lastName:'',
//             favLang:'',
//             startYear:''
//         });
//        // document.getElementById('devForm').reset();
//     }

//     render() {
//     return (
//         <div>
//             <h2>Add Developer</h2>

//             <form id="devForm" onSubmit={this.handleSubmit}>

//                 <label>First Name:</label><br />
//                 <input
//                     type="text"
//                     name="firstName"
//                     value={this.state.firstName}
//                     onChange={this.handleChange}
//                     required
//                 />
//                 <br /><br />

//                 <label>Last Name:</label><br />
//                 <input
//                     type="text"
//                     name="lastName"
//                     value={this.state.lastName}
//                     onChange={this.handleChange}
//                     required
//                 />
//                 <br /><br />

//                 <label>Favorite Language:</label><br />
//                 <input
//                     type="text"
//                     name="favLang"
//                     value={this.state.favLang}
//                     onChange={this.handleChange}
//                     required
//                 />
//                 <br /><br />

//                 <label>Start Year:</label><br />
//                 <input
//                     type="number"
//                     name="startYear"
//                     value={this.state.startYear || ""}
//                     onChange={this.handleChange}
//                     required
//                 />
//                 <br /><br />

//                 <button type="submit">
//                     Add Developer
//                 </button>

//             </form>
//         </div>
//     );
// }
// }

export default AddDeveloper;