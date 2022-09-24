import React,{useState,Component,useEffect} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import Header from '../components/Header.js';


const Home = () =>{

	const [option,setOption] = useState()

	const [data, setdata] = useState({ msg: ""});	

	function handleChange(event){
	    setOption(event.target.value)
	}

	function getDateOnly(date) {
    	return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
	}


	const onFormSubmitCKD=(event) =>{

		const addPrediction = async(sendData) =>{

		    const response=await axios.post("http://localhost:5001/healthprediction",sendData)
		    if (response.status===200){
		        // navigate('/sign-in');        
		    }else{
		        alert("Error response")
		    }
		}

		event.preventDefault();

		  const Symptom_1 = 0;
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
		  const Symptom_18 = event.target.symptom18.value;
		  const Symptom_19 = event.target.symptom19.value;
		  const Symptom_20 = event.target.symptom20.value;
		  const Symptom_21 = event.target.symptom21.value;
		  const Symptom_22 = event.target.symptom22.value;
		  const Symptom_23 = event.target.symptom23.value;
		  const Symptom_24 = event.target.symptom24.value;
		  const Symptom_25 = event.target.symptom25.value;

		  // const getUsers = async(sendData) =>{
		  // 	const response=await axios.post("http://localhost:5000/data",sendData)
		  // 	console.log(response.data)
		  	
		  // }

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
		    "Symptom_17": Symptom_17,
		    "Symptom_18": Symptom_18,
		    "Symptom_19": Symptom_19,
		    "Symptom_20": Symptom_20,
		    "Symptom_21": Symptom_21,
		    "Symptom_22": Symptom_22,
		    "Symptom_23": Symptom_23,
		    "Symptom_24": Symptom_24,
		    "Symptom_25": Symptom_25
		  }
		  

		  axios.post("http://localhost:5000/ckd", sendData).then(result => {

	        const data = result.data
	        const userData = JSON.parse(sessionStorage.getItem("activeuser"));
	        const type = "CKD";
	        var date = new Date();
	        date=getDateOnly(date)
	        var prediction=data.msg

	        if(prediction[1]==='0'){
	        	prediction="Chronic Kidney Diseases Risk Absent"
	        	alert("You haven't CKD Risk")
	        }else{
	        	prediction="Chronic Kidney Diseases Risk Present"
	        	alert("You have CKD Risk")
	        }

	        const predictions={
	        	"user":userData.id,
	        	"type":type,
	        	"date":date,
	        	"prediction":prediction
	        }
	        
	        addPrediction(predictions)

	        setdata({
                    name: data.msg
                });
	        
	      })

	}

	



	return(
		<div> 
		<Header />
			<h3>Chronic Kidney Diseases</h3>
			<div className="handledivHome">
				<form onSubmit={ onFormSubmitCKD }>
		              <div className="mb-3">
		                <label>Age</label>
		                <input type="text" className="form-control" placeholder="Age" defaultValue="0" onChange={handleChange}  name="symptom2" />
		                <label>BP</label>
		                <input type="text" className="form-control" placeholder="BP" defaultValue="0" onChange={handleChange} name="symptom3" />
				        <label>SG</label>
		                <input type="text" className="form-control" placeholder="SG" defaultValue="0" onChange={handleChange} name="symptom4" />
		                <label>AL</label>
		                <input type="text" className="form-control" placeholder="AL" defaultValue="0" onChange={handleChange} name="symptom5" />
		                <label>SU</label>
		                <input type="text" className="form-control" placeholder="SU" defaultValue="0" onChange={handleChange} name="symptom6" />
		                <label>RBC</label>
		                <select name='symptom7' className="form-control" onChange={handleChange}>
							<option value="0">normal</option>
						    <option value="1">abnormal</option>
						</select>
						<label>PC</label>
						<select name='symptom8' className="form-control" onChange={handleChange}>
							<option value="0">normal</option>
						    <option value="1">abnormal</option>
						</select>
						<label>PCC</label>
						<select name='symptom9' className="form-control" onChange={handleChange}>
							<option value="0">present</option>
						    <option value="1">not present</option>
						</select>
						<label>BA</label>
						<select name='symptom10' className="form-control" onChange={handleChange}>
							<option value="0">present</option>
						    <option value="1">not present</option>
						</select>
						<label>BGR</label>
		                <input type="text" className="form-control" placeholder="BGR" defaultValue="0" onChange={handleChange} name="symptom11" />
		                <label>BU</label>
		                <input type="text" className="form-control" placeholder="BU" defaultValue="0" onChange={handleChange} name="symptom12" />
				        <label>SC</label>
		                <input type="text" className="form-control" placeholder="SC" defaultValue="0" onChange={handleChange} name="symptom13" />
		                <label>SOD</label>
		                <input type="text" className="form-control" placeholder="SOD" defaultValue="0" onChange={handleChange} name="symptom14" />
		                <label>POT</label>
		                <input type="text" className="form-control" placeholder="POT" defaultValue="0" onChange={handleChange} name="symptom15" />
		                <label>HEMO</label>
		                <input type="text" className="form-control" placeholder="HEMO" defaultValue="0" onChange={handleChange} name="symptom16" />
				        <label>PCV</label>
		                <input type="text" className="form-control" placeholder="PCV" defaultValue="0" onChange={handleChange} name="symptom17" />
		                <label>WC</label>
		                <input type="text" className="form-control" placeholder="WC" defaultValue="0" onChange={handleChange} name="symptom18" />
		                <label>RC</label>
		                <input type="text" className="form-control" placeholder="RC" defaultValue="0" onChange={handleChange} name="symptom19" />
		                <label>HTN</label>
		                <select name='symptom20' className="form-control" onChange={handleChange}>
							<option value="0">no</option>
						    <option value="1">yes</option>
						</select>
						<label>DM</label>
						<select name='symptom21' className="form-control" onChange={handleChange}>
							<option value="0">no</option>
						    <option value="1">yes</option>
						</select>
						<label>CAD</label>
						<select name='symptom22' className="form-control" onChange={handleChange}>
							<option value="0">no</option>
						    <option value="1">yes</option>
						</select>
						<label>APPET</label>
						<select name='symptom23' className="form-control" onChange={handleChange}>
							<option value="0">poor</option>
						    <option value="1">good</option>
						</select>
						<label>PE</label>
						<select name='symptom24' className="form-control" onChange={handleChange}>
							<option value="0">no</option>
						    <option value="1">yes</option>
						</select>
						<label>ANE</label>
						<select name='symptom25' className="form-control" onChange={handleChange}>
							<option value="0">no</option>
						    <option value="1">yes</option>
						</select>
		              </div>
		              <div>
			          <button type="submit" className="btn btn-primary">
			            Submit
			          </button>
			        </div>
		        </form>
	        </div>   
			
			
		</div>
		)
		
}

export default Home