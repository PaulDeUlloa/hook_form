import { useState } from "react";
import FormDisplayComponents from "../components/FormDisplayComponents";



const FormPage1 = (props) => {

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

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    // e stands for Event
    //Handler for Form
    const handleSubmit = (e) => {
        e.preventDefault();
        // No database yet

        const newData = { firstName, lastName, email, password, confirmPassword };
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
                            onChange={(e) => { setFirstName(e.target.value) }}
                        />
                        {
                            firstName.length < 2 ?
                                <p style={{ color: "red" }}>First Name must be at least 2 characters</p> :
                                <></>
                        }
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input
                            name="last name"
                            type="text"
                            value={lastName}
                            onChange={(e) => { setLastName(e.target.value) }}
                        />
                        {
                            lastName.length < 2 ?
                                <p style={{ color: "red" }}>Last Name must be at least 2 characters</p> :
                                <></>
                        }
                    </div>
                    <div>
                        <label>Email: </label>
                        <input
                            name="email"
                            type="text"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        {
                            email.length < 5 ?
                                <p style={{ color: "red" }}>Email must be at least 5 characters</p> :
                                <></>
                        }
                    </div>
                    <div>
                        <label>Password: </label>
                        <input
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                        {
                            password.length < 8 ?
                                <p style={{ color: "red" }}>Email must be at least 8 characters</p> :
                                <></>
                        }
                    </div>
                    <div>
                        <label>ConfirmPassword: </label>
                        <input
                            name="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => { setConfirmPassword(e.target.value) }}
                        />
                        {
                            confirmPassword == password ?
                                <p style={{ color: "red" }}>Confirm Password must be at least 8 characters</p> :
                                <p style={{ color: "red" }}>Passwords must match </p>
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