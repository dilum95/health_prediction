import React, { Component } from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import "../css/authcss.css"

const Login = () =>{

 
const navigate = useNavigate();

const onFormSubmit=(event) =>{
  	
  const email = event.target.theEmail.value;
  const password = event.target.thePassword.value;
  
  const getUsers = async(sendData) =>{
  	const response=await axios.post("http://localhost:5001/login",sendData)

    if (response.status===200){
      
  		const data = response.data
              let userData = {

              "user": data.name,
              "id": data._id,
              "email": data.email,
              "mobile": data.mobile,
              "dependent":data.dependent
            }

            window.sessionStorage.setItem('activeuser', JSON.stringify(userData));
            navigate('/home');
  	}else{
  		alert("Error response")
  	}
  }

  const sendData = {
    "email": email,
    "password": password
  }

  getUsers(sendData)
  event.preventDefault();
};

    return (
      <div className="handledivpro"> 
      <form onSubmit={ onFormSubmit }>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="theEmail"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="thePassword"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <Link className="nav-link" to={'/sign-up'}>
            Sign up <a href="#"></a>

          </Link>
        </p>
      </form>
      </div>
    );
  
};

export default Login