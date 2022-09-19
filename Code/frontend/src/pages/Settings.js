import React,{useState,useEffect} from 'react'
import {Link,useParams} from "react-router-dom";
import axios from "axios";
import Header from '../components/Header.js';


const initialState = {
	name:"",
	email:"",
	mobile:"",
	dependent:""
};

const Settings = () =>{
	// const userInt=JSON.parse(sessionStorage.getItem("activeuser"));


	const [state,setState]=useState(initialState);
	const {name,email,mobile,dependent} = initialState;

	const addContent = async (data) =>{
		const response=await axios.post(`http://localhost:5001/user/${id}`)
		if (response.status===200){
			console.log("work add content")
		}
	}

	const updateUser = async (id,userData) =>{		

		const response=await axios.put(`http://localhost:5001/updateUser/${id}`,userData)
		if (response.status===200){
			console.log("work add content")
		}
	}

	const getSingleUser = async (id) =>{
		const response=await axios.get(`http://localhost:5001/getuser/${id}`)
		setState(response.data)	
	}

	// const navigate = useHistory();
	const {id} = useParams();

	const handleSubmit = (event) =>{
		event.preventDefault()
		if(id){
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
		}else{
			addContent(state)
		}
				
	}

	
	const handleInputChange =(e) =>{
		let {name,value} =e.target;
		setState({...state,[name]: value })
	}

	useEffect(() =>{
		if(id){
			getSingleUser(id);
			
		}else{
			handleSubmit()
		}
	},[id])



	return(
		<div>
		<Header />
		<div className="handlediv">
		<form onSubmit={ handleSubmit }>
        <h3>Settings</h3>
        <div className="mb-3">

          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            name="name"
            onChange={handleInputChange}
            id="name"
            value={name}
          />
        </div>
        <label>Email</label>
        <input
            type="text"
            className="form-control"
            placeholder="First name"
            name="email"
            id="email"
            onChange={handleInputChange}
            value={email}
          />

        <div className="mb-3">
          <label>Mobile Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter mobile number"
            name="mobile"
            id="mobile"
            onChange={handleInputChange}
            value={mobile}
          />
        </div>
        <div className="mb-3">
          <label>Dependent</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter dependent"
            name="dependent"
            id="dependent"
            onChange={handleInputChange}
            value={dependent}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
        
      </form>
		</div>	
		</div>
		);
};	
export default Settings

