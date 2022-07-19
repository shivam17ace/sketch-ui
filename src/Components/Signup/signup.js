import React, { useState } from 'react';
import Button from "@mui/material/Button";
import "../Signup/signup.scss";
// import ChefP from "../../Images/chef1.png";
// import ChefG from"../../Images/cheff.png";
import { Link } from "react-router-dom";

export default function Signup() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);
const [data, setData] = useState('');

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === '') {
	setError(true);
	} else {
            setData(e.target.value)
            setSubmitted(true);
            setError(false);
	    }
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {name} successfully registered!!</h1>
        {console.log(data)}
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (
	<div className="container">
	    {/* Calling to the methods */}
        <div className='form_box'> 
        <div className='form_content'>
        <div>
            <h1>Signup</h1>
        </div> 
            <form>
                <div>
                    <label className="label">Name:</label>
                    <input onChange={handleName} className="input"
                    value={name} type="text" />
                </div>
                <div>
                    <label className="label">Email:</label>
                    <input onChange={handleEmail} className="input"
                    value={email} type="email" />
                </div>
                <div>
                    <label className="label">Password:</label>
                    <input onChange={handlePassword} className="input"
                    value={password} type="password" />
                </div>
                <Button onClick={handleSubmit} variant="outlined">Sign In</Button>
            </form>
            <div>
                Already a User? 
                <Link to="/login">Login</Link>
            </div>
        </div>
        </div>
	</div>
);
}
