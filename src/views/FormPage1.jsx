import { useState } from "react";
import FormDisplayComponents from "../components/FormDisplayComponents";



const FormPage1 = (props) => {

    //First Name
    //Last Name
    //Email
    //Password
    //Confirm Password

    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    // e stands for Event
    //Handler for Form
    const handleSubmit = (e) => {
        e.preventDefault();
        // No database yet

        const newData = { firstName, lastName, email, password, confirmPassword };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        console.log(newData);

        setHasBeenSubmitted(true);
    }

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);

        if(firstName.length <2){
            return "First Name must be at least 2 characters";
        }else{
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);

        if(lastName.length <2){
            setLastNameError ("Last Name must be at least 2 characters");
        }else{
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);

        if(email.length <5){
            setEmailError ("Email must be at least 5 characters");
        }else{
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);

        if(password.length <8){
            setPasswordError ("Password must be at least 8 characters");
        }else{
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);

        if(confirmPassword === password){
            setConfirmPasswordError ("Passwords must match");
        }else{
            setConfirmPasswordError("");
        }
    }


    return (
        <>
            <fieldset>
                <legend>FormPage1.jsx</legend>

                    <h2>{formMessage()}</h2>

                <form onSubmit={handleSubmit} >
                    <div>
                        <label>First Name: </label>
                        <input
                            name="first name"
                            type="text"
                            value={firstName}
                            onChange={handleFirstName}
                        />
                        {
                            firstName.length < 2 ?
                                <p style={{ color: "red" }}>{ firstNameError }</p> :
                                <></>
                        }
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input
                            name="last name"
                            type="text"
                            value={lastName}
                            onChange={handleLastName}
                        />
                        {
                            lastNameError ?
                                <p style={{ color: "red" }}>{ lastNameError }</p> :
                                <></>
                        }
                    </div>
                    <div>
                        <label>Email: </label>
                        <input
                            name="email"
                            type="text"
                            value={email}
                            onChange={handleEmail}
                        />
                        {
                            emailError ?
                                <p style={{ color: "red" }}>{ emailError }</p> :
                                <></>
                        }
                    </div>
                    <div>
                        <label>Password: </label>
                        <input
                            name="password"
                            type="password"
                            value={password}
                            onChange={handlePassword}
                        />
                        {
                            passwordError ?
                                <p style={{ color: "red" }}>{ passwordError }</p> :
                                <></>
                        }
                    </div>
                    <div>
                        <label>ConfirmPassword: </label>
                        <input
                            name="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={handleConfirmPassword}
                        />
                        {
                            confirmPasswordError ?
                                <p style={{ color: "red" }}>{ confirmPasswordError }</p>:
                                <></>
                        }
                    </div>
                    <button>Show Form Info</button>
                </form>

                <FormDisplayComponents firstName={firstName} lastName={lastName} email={email} password={password} confirmPassword={confirmPassword} />

            </fieldset>
        </>
    )
}

export default FormPage1;