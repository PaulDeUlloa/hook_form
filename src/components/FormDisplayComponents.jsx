import React from 'react';

const FormDisplayComponents = (props) =>{
    return (
        <fieldset>
            <legend>FormDisplayComponents.jsx</legend>
            <div>
                <p>First Name: {props.firstName}</p>
                <p>Last Name: {props.lastName}</p>
                <p>Email: {props.email}</p>
                <p>Password: {props.password}</p>
                <p>Confirm Password: {props.confirmPassword}</p>
            </div>
        </fieldset>
    );
};

export default FormDisplayComponents;