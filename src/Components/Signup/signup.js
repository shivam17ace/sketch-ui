import React, { useState } from 'react';
import Button from "@mui/material/Button";
import "../Signup/signup.scss";
import { Link, useNavigate } from "react-router-dom";
import Delivery from "../../Images/delivery.png"

export default function Signup() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmpassword, setConfirmPassword] = useState('');
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);
const [data, setData] = useState('');

let navigate = useNavigate(); 

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
const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        setSubmitted(false);
};


// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === '' || confirmpassword === '') {
        setError("Field Required")
	// setError(true);
	}
     else {
            const dataarr=[];
            dataarr.push(name,email,password,confirmpassword)
            setData(dataarr);
            console.log(dataarr)
            console.log(data)
            setSubmitted(true);
            // setError(false);
            navigate("../login", { replace: true });
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
	<div className="signup_container">
        <div className='background_blur'>
        <div className='form_box'> 
        <div className='form_content'>
        <div>
            <span className='form_heading'>Signup</span>
        </div> 
            <form>
                <div className='input_field_wrapper'>
                    <input onChange={handleName} className="input_field"
                    value={name} type="text" placeholder='Username' autoFocus/>
                </div>
                <div className='input_field_wrapper'>
                    <input onChange={handleEmail} className="input_field"
                    value={email} type="email" placeholder='Email' />
                </div>
                <div className='input_field_wrapper'>
                    <input onChange={handlePassword} className="input_field"
                    value={password} type="password" placeholder='Password' />
                </div>
                <div className='input_field_wrapper'>
                    <input onChange={handleConfirmPassword} className="input_field"
                    value={confirmpassword} type="password" placeholder='Confirm Password' />
                </div>
                <div className='button_fields'>
                    <Button onClick={handleSubmit} className="signin_button" >Get Started <img src={Delivery} alt="delivery" className='button_image' /></Button>
                    <span>Already a User? 
                    <Link to="/login">Login</Link></span>
                </div>
            </form>
        </div>
        </div>
        </div>
	</div>
);
}
