import React from 'react';
import { FaImages } from "react-icons/fa";

const Register = () => {
    return (
        <div className='formContinuer'>
            <div className="formWrapper">
                <span className="logo">Chat App</span>
                <span className="title">Register</span>
            
                <form>
                    <input type="text" name="" id="" placeholder='Display Name' />
                    <input type="email" name="" id="" placeholder='Email' />
                    <input type="password" name="" id="" placeholder='Password' />
                    <input style={{display: "none"}} type="file" name="" id="file" />
                    <label htmlFor="file">
                        <FaImages className='img_icon'/> <span>Add An Avatar</span> 
                    </label>
                    <button type="submit">Sign Up</button>
                </form>
                <p>Do you have an account? Login</p>
            </div>
        </div>
    );
};

export default Register;