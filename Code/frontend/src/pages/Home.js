import React,{useState,Component,useEffect} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import Header from '../components/Header.js';


export default class Home extends Component{

	onFormSubmitCommon(event) {
  	
		  const Symptom_1 = event.target.symptom1.value;
		  const Symptom_2 = event.target.symptom2.value;
		  const Symptom_3 = event.target.symptom3.value;
		  const Symptom_4 = event.target.symptom4.value;
		  const Symptom_5 = event.target.symptom5.value;
		  const Symptom_6 = event.target.symptom6.value;
		  const Symptom_7 = event.target.symptom7.value;
		  const Symptom_8 = event.target.symptom8.value;
		  const Symptom_9 = event.target.symptom9.value;
		  const Symptom_10 = event.target.symptom10.value;
		  const Symptom_11 = event.target.symptom11.value;
		  const Symptom_12 = event.target.symptom12.value;
		  const Symptom_13 = event.target.symptom13.value;
		  const Symptom_14 = event.target.symptom14.value;
		  const Symptom_15 = event.target.symptom15.value;
		  const Symptom_16 = event.target.symptom16.value;
		  const Symptom_17 = event.target.symptom17.value;

		  const getUsers = async(sendData) =>{
		  	const response=await axios.post("http://localhost:5000/",sendData)
		  	console.log(response.data)
		  	
		  }

		  const sendData = {
		    "Symptom_1": Symptom_1,
		    "Symptom_2": Symptom_2,
		    "Symptom_3": Symptom_3,
		    "Symptom_4": Symptom_4,
		    "Symptom_5": Symptom_5,
		    "Symptom_6": Symptom_6,
		    "Symptom_7": Symptom_7,
		    "Symptom_8": Symptom_8,
		    "Symptom_9": Symptom_9,
		    "Symptom_10": Symptom_10,
		    "Symptom_11": Symptom_11,
		    "Symptom_12": Symptom_12,
		    "Symptom_13": Symptom_13,
		    "Symptom_14": Symptom_14,
		    "Symptom_15": Symptom_15,
		    "Symptom_16": Symptom_16,
		    "Symptom_17": Symptom_17
		  }
		  event.preventDefault();
		  getUsers(sendData)
		};


    render() {
	return(
		<div>
		<Header />
			<h3>Home</h3>

			<table className="handlediv">
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
		                    <input type="text" className="form-control" placeholder="symptom2"  name="symptom2" />
		                    <input type="text" className="form-control" placeholder="symptom3"  name="symptom3" />
		                    <input type="text" className="form-control" placeholder="symptom4"  name="symptom4" />
		                    <input type="text" className="form-control" placeholder="symptom5"  name="symptom5" />
		                    <input type="text" className="form-control" placeholder="symptom6"  name="symptom6" />
		                    <input type="text" className="form-control" placeholder="symptom7"  name="symptom7" />
		                    <input type="text" className="form-control" placeholder="symptom8"  name="symptom8" />
		                    <input type="text" className="form-control" placeholder="symptom9"  name="symptom9" />
		                    <input type="text" className="form-control" placeholder="symptom10"  name="symptom10" />
		                    <input type="text" className="form-control" placeholder="symptom11"  name="symptom11" />
		                    <input type="text" className="form-control" placeholder="symptom12"  name="symptom12" />
		                    <input type="text" className="form-control" placeholder="symptom13"  name="symptom13" />
		                    <input type="text" className="form-control" placeholder="symptom14"  name="symptom14" />
		                    <input type="text" className="form-control" placeholder="symptom15"  name="symptom15" />
		                    <input type="text" className="form-control" placeholder="symptom16"  name="symptom16" />
		                    <input type="text" className="form-control" placeholder="symptom17"  name="symptom17" />
		                  </div>
		                  <div >
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
		                  <div >
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
		                  <div >
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
		                  <div>
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

