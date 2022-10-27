import React,{useState,Component,useEffect} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import Header from '../components/Header.js';
import DataTable from 'react-data-table-component';


const Home = () =>{

	function getDateOnly(date) {
    	return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
	}

	const user=JSON.parse(sessionStorage.getItem("activeuser"));
	const id=user.id

	const [data,setData]=useState([]);

	const [search,setsearch]=useState("");
	const [filteredData,setFilteredData]=useState([]);

	const getUserHosory = async(id) =>{
	  	const response=await axios.get(`http://localhost:5001/allMeddicalRecords/${id}`)
		  	if (response.status===200){
		  		 const resdata = response.data.data
		  		 setData(resdata)
		  		 setFilteredData(resdata)		          
		  	}else{
		  		alert("Error response")
		  	}
	}

	useEffect(()=>{
		getUserHosory(id)
	},[])

	useEffect(()=>{
		const res=data.filter((condition)=>{
			return condition.condition.match(search);
		} );
		console.log(res)
		setFilteredData(res)	
	},[search])


	const addRecords = async(sendData) =>{
			
		    const response=await axios.post("http://localhost:5001/medicalRecords",sendData)
		    if (response.status===200){
		        alert("Data Added Sucessfully")    
		        getUserHosory(id)   
		    }else{
		        alert("Error response")
		    }
	}

	
	const onFormSubmit=async(event) =>{

		  const convertBase64=(file)=>{
		     return new Promise((resolve,reject)=>{
		        const fileReader=new FileReader();
		        fileReader.readAsDataURL(file)

		        fileReader.onload = () =>{
		          resolve(fileReader.result)
		        };

		        fileReader.onerror=(error)=>{
		          reject(error)
		        }

		     })
		  };

		  const doctor = event.target.doctor.value;
		  const condition = event.target.condition.value;
		  const from = event.target.from.value;
		  const untill = event.target.untill.value;
		  const note = event.target.note.value;
		  const file = event.target.file.files[0];

		  const base64 = await convertBase64(file)

		  const user=JSON.parse(sessionStorage.getItem("activeuser"));
		  const id=user.id
		  const sendData = {
		    "doctor": doctor,
		    "id":id,
		    "condition": condition,
		    "from": from,
		    "untill": untill,
		    "note": note,
		    "file":base64
		  }


		  addRecords(sendData)
		  event.preventDefault();
		  event.target.reset();
    };



	return(
		<div > 
			<Header />
			<h3>Medical Records</h3>
			<div className="row">
			<div className="columnHomeView">
				<div class="containerHome">
					<h3>Record History</h3>
					<input
	            	 type=""
	            	 className="float_left"
	            	 placeholder="Search here by Condition..."
	            	 value={search}
	            	 onChange={(e)=>setsearch(e.target.value)} 
	            	/>
					


                      <table className="stuled-table" width="100%">
		                <thead>
		                  <tr>
		                    <th style={{textAlign:"center"}}></th>
		                  </tr>
		                </thead>
		                <tbody>
		                  {filteredData &&
		                    filteredData.map((item,index)=>{
		                      return(
		                        <tr key={index}>
		                          <td>
		                          <div class="card">
				                    <div class="container">
				                    <div className="row">
				                      <div className="columnHomeView">
				                        <h4><b>{item.condition}</b></h4> 
				                        <p>{item.doctor}</p> 
				                        <p>{item.note}</p>
				                        <p>From   :{item.from}</p> 
				                        <p>Untill :{item.untill}</p>
				                      </div>
				                      <div className="columnHomeAdd">
				                      		<div className="click-zoom1">
											  <label>
											    <input type="checkbox" />
											    <img className="imgPresciption" src={item.file} />
											  </label>
											</div>
				                      </div>                      
				                    </div>
		                       
		                    </div>
		                   </div>
		                   </td>  
		                        </tr>
		                        )
		                    })
		                  }
		                </tbody>
		              </table>
					
	            </div>
	        </div> 
	        <div className="columnHomeAdd">
				<div class="cardHome">
				<div class="container">
			      <form onSubmit={ onFormSubmit }>
			        <h3>Add New Records</h3>
			        <div className="mb-3">
			          <label>Doctor</label>
			          <input
			            type="text"
			            className="form-control"
			            placeholder="Doctor"
			            name="doctor"
			            required
			          />
			        </div>
			        <div className="mb-3">
			          <label>Condition</label>
			          <input
			            type="text"
			            className="form-control"
			            placeholder="Condition"
			            name="condition"
			            required
			          />
			        </div>
			        <div className="mb-3">
			          <label>From</label>
			          <input type="date" className="form-control" name="from" required />
			        </div>
			        <div className="mb-3">
			          <label>Untill</label>
			          <input type="date" className="form-control" name="untill" required />
			        </div>
			        <div className="mb-3">
			          <label>Note</label>
			          <input
			            type="textarea"
			            className="form-control"
			            placeholder="Note"
			            name="note"
			            required
			          />
			        </div>
			        <div className="mb-3">
			          <label>Prescription</label>
			          <input type="file" name="file" accept="image/*" required />
			        </div>

			        
			        <div className="d-grid">
			          <button type="submit" className="btn btn-primary">
			            Add
			          </button>
			        </div>
			      </form>
			    </div>  
			    </div>
	        </div>    
           </div>
        </div>   

		)
		
}

export default Home