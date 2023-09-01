import { useState } from "react";


const FormPage1 = (props) =>{

    //First Name
    //Last Name
    //Email
    //Password
    //Confirm Password

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // e stands for Event
    //Handler for Form
    const handleSubmit = (e) => {
        e.preventDefault();
        // No database yet
        const newData = { firstName, lastName, email, password, confirmPassword }
        console.log(newData)
    }

    return(
        <>
            <fieldset>
                <legend>FormPage1.jsx</legend>
                <form onSubmit={ handleSubmit } >   
                    <div>
                        <label>First Name: </label>
                        <input 
                        name="first name" 
                        type="text" 
                        value={firstName} 
                        onChange={(e) => { setFirstName(e.target.value) }}
                        />
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input 
                        name="last name" 
                        type="text" 
                        value={lastName} 
                        onChange={(e) => { setLastName(e.target.value) }}
                        />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input 
                        name="email" 
                        type="text" 
                        value={email} 
                        onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input 
                        name="password" 
                        type="text" 
                        value={password} 
                        onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </div>
                    <div>
                        <label>ConfirmPassword: </label>
                        <input 
                        name="confirmPassword" 
                        type="text" 
                        value={confirmPassword} 
                        onChange={(e) => { setConfirmPassword(e.target.value) }}
                        />
                    </div>
                    <button>Show Form Info</button>
                </form>
            </fieldset>
        </>
    )
}

export default FormPage1;