import React, { Component } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/authcss.css"

const SignUp = () =>{

const navigate = useNavigate();

const onFormSubmit=(event) =>{

    
  const name = event.target.name.value;
  const password = event.target.password.value;
  const email = event.target.email.value;
  const birthday = event.target.birthday.value;
  const mobile = event.target.mobile.value;
  const confirmPasswod = event.target.confirmPasswod.value;
  const dependent="";
  const image="default.png"

  const addUser = async(sendData) =>{

    const response=await axios.post("http://localhost:5001/register",sendData)
    if (response.status===200){
        navigate('/sign-in');        
    }else{
        alert("Error response")
    }
  }

  const sendData = {
    "email": email,
    "password": password,
    "name": name,
    "birthday": birthday,
    "mobile": mobile,
    "dependent":dependent,
    "image":image
  }

  if(password===confirmPasswod){
    addUser(sendData)
  }else{
    alert("password not matching")
  }
  event.preventDefault();
};


    return (
      <div className="handledivpro"> 
      <form onSubmit={ onFormSubmit }>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            name="name"
          />
        </div>
        <div className="mb-3">
          <label>Date of Birth</label>
          <input type="date" className="form-control" name="birthday" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
          />
        </div>        
        <div className="mb-3">
          <label>Mobile Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter mobile number"
            name="mobile"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
          />
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="confirmPasswod"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
      </div>
    )

};
export default SignUp