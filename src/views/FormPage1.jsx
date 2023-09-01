import { useState } from "react";


const FormPage1 = (props) =>{

    //First Name
    //Last Name
    //Email
    //Password
    //Confirm Password

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    return(
        <>
            <fieldset>
                <legend>FormPage1.jsx</legend>
                <form onSubmit="" >
                    <div>
                        <label>First Name: </label>
                        <input 
                        name="first name" 
                        type="text" 
                        value={FirstName} 
                        />
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input 
                        name="last name" 
                        type="text" 
                        value={LastName} 
                        />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input 
                        name="email" 
                        type="text" 
                        value={Email} 
                        />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input 
                        name="password" 
                        type="text" 
                        value={Password} 
                        />
                    </div>
                    <div>
                        <label>ConfirmPassword: </label>
                        <input 
                        name="confirmPassword" 
                        type="text" 
                        value={ConfirmPassword} 
                        />
                    </div>
                    <button>Show Form Info</button>
                </form>
            </fieldset>
        </>
    )
}

export default FormPage1;