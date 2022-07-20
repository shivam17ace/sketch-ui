import React, {useState} from "react";
import Button from "@mui/material/Button";
import "../Login/login.scss";
import { Link, useNavigate } from "react-router-dom";

function Login () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState('');

// Handling the email change
const handleEmail = (e) => {
    setUsername(e.target.value);
    setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
};

const handleSubmit = (e) =>{
    e.preventDefault();
}

    return(
<div className="login_container">
	    {/* Calling to the methods */}
        <div className='form_box'> 
        <div className='form_content'>
        <div>
            <span className='form_heading'>Login</span>
        </div> 
            <form>
                <div className='input_field_wrapper'>
                    <input onChange={handleEmail} className="input_field"
                    value={username} type="email" placeholder='Email' />
                </div>
                <div className='input_field_wrapper'>
                    <input onChange={handlePassword} className="input_field"
                    value={password} type="password" placeholder='Password' />
                </div>
                <div className='button_fields'>
                    <Button onClick={handleSubmit} className="signin_button">Login</Button>
                </div>
            </form>
        </div>
        </div>
	</div>
    )
}
export default Login;