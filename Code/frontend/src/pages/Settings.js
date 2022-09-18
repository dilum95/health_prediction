import React,{useState,Component,useEffect} from 'react'
import {Link,useParams} from "react-router-dom";
import axios from "axios";
import Header from '../components/Header.js';


const userIntt=JSON.parse(sessionStorage.getItem("activeuser"));
const initialState = {
	name:userIntt.user,
	email:userIntt.email,
	mobile:userIntt.mobile,
	dependent:userIntt.dependent
};

const Settings = () =>{
	const userInt=JSON.parse(sessionStorage.getItem("activeuser"));


	const [state,setState]=useState(initialState);
	const {name,email,mobile,dependent} = initialState;

	const addContent = async (data) =>{
		alert("invalid url")
	}

	const updateUser = async (id,userData) =>{		

		const response=await axios.put(`http://localhost:5000/user/${id}`,userData)
		if (response.status===200){
			console.log("work add content")
		}
	}

	// const navigate = useHistory();
	const {id} = useParams();

	const handleSubmit = (event) =>{
		const newename = event.target.name.value;
		const newemail = event.target.email.value;
	    const newmobile = event.target.mobile.value;
	    const dependent = event.target.dependent.value

	    let userData = {

              "name": newename,
              "mobile": newmobile,
              "dependent":dependent
            }
		updateUser(id,userData)
		
		
	}

	const getSingleUser = async (data) =>{
			setState({data})	
	}

	const handleInputChange =(e) =>{
		let {name,value} =e.target;
		setState({...state,[name]: value })
	}

	useEffect(() =>{
		if(id){
			handleSubmit()
		}else{
			const user=JSON.parse(sessionStorage.getItem("activeuser"));
			getSingleUser(user);
		}
	},[id])



	return(
		<div>
		<Header />

		<form onSubmit={ handleSubmit }>
        <h3>Settings</h3>
        <div className="mb-3">

          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            name="name"
            onChange={(e) => this.handleInputChange(e)}

            value={name || ""}
          />
        </div>
        <label>Email</label>
        <input
            type="text"
            className="form-control"
            placeholder="First name"
            name="email"
            onChange={handleInputChange}
            value={email || ""}
          />

        <div className="mb-3">
          <label>Mobile Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter mobile number"
            name="mobile"
            onChange={handleInputChange}
            value={mobile || ""}
          />
        </div>
        <div className="mb-3">
          <label>Dependent</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter mobile number"
            name="dependent"
            onChange={handleInputChange}
            value={dependent || ""}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
        
      </form>
			
		</div>
		);
};	
export default Settings

