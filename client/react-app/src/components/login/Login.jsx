import React, { Component } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Sign from '../signup/Sign.jsx'
import Image1 from '../../assets/login_illustration.png'
import './login.css'
class Login extends Component {
    render() {
        // const[inputs,setInputs]=useState({});
        // const handleChange =(event) =>{
        //     const name=event.target.name;
        //     const value=event.target.value;
        //     setInputs(values =>({...values,[name]:value}))
        // }
        // const handleSubmit=(event)=>{
        //     event.preventDefault();
        //     alert(inputs);
        // }
        return (
            <div className='center'>
                <div className='login_container'>
                    <div className='img_container'>
                        <img className='login_img' src={Image1}></img>
                    </div>
                    <div className='login_form'>
                        <h1 className='login_header'>LOGIN</h1>
                        <form className='form'>
                            <input className="text" type="text" name="username" placeholder="Admin Name" autoComplete='admin-name' />
                            <input className='text' type="password" name="password" placeholder="Admin Password" autoComplete='admin-pwd' />
                            <div className='sub_options_container'>
                                <input className='check' type="checkbox" name="signed"/><h4>Keep me signed in</h4>
                            </div>
                            <input className='btn' type="submit" />
                        </form>
                    </div>
                </div>
            </div>      
        );
    }
}

export default Login;