import React, {useState} from "react";
import Button from "@mui/material/Button";
import "../Login/login.scss";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Images/art_logo.png";
import "../Login/media.scss";

function Login () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState('');

    let navigate = useNavigate(); 

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
    navigate("../dashboard", { replace: true });
}

    return(
<div className="login_container">
    <div className="background_blur">
    <div className='form_box'> 
        <div className='form_content'>
        <div>
            <span className='form_heading'>Login</span>
        </div> 
            <form style={{marginTop:"4rem"}}>
                <div className='input_field_wrapper'>
                    <input onChange={handleEmail} className="input_field"
                    value={username} type="email" placeholder='UserName' />
                </div>
                <div className='input_field_wrapper'>
                    <input onChange={handlePassword} className="input_field"
                    value={password} type="password" placeholder='Password' />
                </div>
                <div className='button_fields'>
                    <Button onClick={handleSubmit} className="signin_button">Login<img src={Logo} alt="chef" className="button_image" /></Button>
                    <span>New  User? 
                    <Link to="/signup">Signup</Link></span>
                </div>
            </form>
        </div>
        </div>        
    </div>
	</div>
    )
}
export default Login;