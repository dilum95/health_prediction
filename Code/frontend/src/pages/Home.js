import React,{useState,Component,useEffect} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import Header from '../components/Header.js';


export default class Home extends Component{

	onFormSubmit(event) {
  	
		  const email = event.target.theEmail.value;
		  const password = event.target.thePassword.value;

		  const getUsers = async(sendData) =>{
		  	const response=await axios.post("http://localhost:5001/login",sendData)
		  	
		  	if (response.status===200){
		  		const data = response.result

		          if (data.status == true) {

		            

		          } else {

		            alert(data.msg)
		            // setSaveStatus(false)
		          }
		  	}else{
		  		alert("Error response")
		  	}
		  }

		  const sendData = {
		    "email": email,
		    "password": password
		  }

		  getUsers(sendData)
		};


    render() {
	return(
		<div>
		<Header />
			<h2>Home</h2>

			<table>
				<tr>
					<td>
					Geneal Symptoms
					</td>						
					<td>
					Heart Disease
					</td>
				</tr>
				<tr>
					<td>
						<form onSubmit={ this.onFormSubmitCommon }>
		                  <div className="mb-3">
		                    <input type="text" className="form-control" placeholder="symptom1"  name="symptom1" />
		                    <input type="text" className="form-control" placeholder="symptom1"  name="symptom1" />
		                  </div>
		                  <div className="d-grid">
				          <button type="submit" className="btn btn-primary">
				            Submit
				          </button>
				        </div>
		               </form>  
					</td>
					<td>
						<form onSubmit={ this.onFormSubmitHeart }>
		                  <div className="mb-3">
		                    <input type="text" className="form-control" placeholder="symptom1"  name="symptom1" />
		                    <input type="text" className="form-control" placeholder="symptom1"  name="symptom1" />
		                  </div>
		                  <div className="d-grid">
				          <button type="submit" className="btn btn-primary">
				            Submit
				          </button>
				        </div>
		               </form>
					</td>
				</tr>
				<tr>
					<td>
					Diabities 
					</td>
					<td>
					CKD
					</td>
				</tr>
				<tr>
					<td>
						<form onSubmit={ this.onFormSubmitDiabies }>
		                  <div className="mb-3">
		                    <input type="text" className="form-control" placeholder="symptom1"  name="symptom1" />
		                    <input type="text" className="form-control" placeholder="symptom1"  name="symptom1" />
		                  </div>
		                  <div className="d-grid">
				          <button type="submit" className="btn btn-primary">
				            Submit
				          </button>
				        </div>
		               </form>
					</td>
					<td>
						<form onSubmit={ this.onFormSubmitCKD }>
		                  <div className="mb-3">
		                    <input type="text" className="form-control" placeholder="symptom1"  name="symptom1" />
		                    <input type="text" className="form-control" placeholder="symptom1"  name="symptom1" />
		                  </div>
		                  <div className="d-grid">
				          <button type="submit" className="btn btn-primary">
				            Submit
				          </button>
				        </div>
		               </form>
					</td>
				</tr>
			</table>
			
		</div>
		)
	}	
}

