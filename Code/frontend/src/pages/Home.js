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

	
	const onFormSubmitCommon=(event) =>{

		const addPrediction = async(sendData) =>{

		    const response=await axios.post("http://localhost:5001/healthprediction",sendData)
		    if (response.status===200){
		        // navigate('/sign-in');        
		    }else{
		        alert("Error response")
		    }
		}

  		  event.preventDefault();

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
		    "Symptom_17": Symptom_17
		  }
		  

		  axios.post("http://localhost:5000/data", sendData).then(result => {

	        const data = result.data
	        const userData = JSON.parse(sessionStorage.getItem("activeuser"));
	        const type = "Common test";
	        var date = new Date();
	        date=getDateOnly(date)
	        const prediction=data.msg


	        const predictions={
	        	"user":userData.id,
	        	"type":type,
	        	"date":date,
	        	"prediction":prediction
	        }
	        
	        addPrediction(predictions)

	        alert(data.msg)
	        setdata({
                    name: data.msg
                });
	        
	      })



    };



	return(
		<div > 
		<Header />
			<h3>Common Symptoms</h3>
			<div className="handledivHome">
			<form onSubmit={ onFormSubmitCommon }>
		                  <div className="mb-3">
		                    <label>Symptom 1</label>
		                    <select name='symptom1' className="form-control" onChange={handleChange}>
		                    	<option value="0">none</option>
							    <option value="1">Fungal infection</option>
							    <option value="2">Allergy</option>
							    <option value="3">GERD</option>
							    <option value="4">Chronic cholestasis</option>
							</select>
							<label>Symptom 2</label>
							<select name='symptom2' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">continuous_sneezing</option>
							    <option value="2">stomach_pain</option>
							    <option value="3">acidity</option>
							    <option value="4">itching</option>
							</select>
							<label>Symptom 3</label>
							<select name='symptom3' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">shivering</option>
							    <option value="2">ulcers_on_tongue</option>
							    <option value="3">acidity</option>
							    <option value="4">vomiting</option>
							</select>
							<label>Symptom 4</label>
							<select name='symptom4' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">chills</option>
							    <option value="2">ulcers_on_tongue</option>
							    <option value="3">nausea</option>
							    <option value="4">yellowish_skin</option>
							</select>
							<label>Symptom 5</label>
							<select name='symptom5' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">cough</option>
							    <option value="2">watering_from_eyes</option>
							    <option value="3">loss_of_appetite</option>
							    <option value="4">nausea</option>
							</select>
							<label>Symptom 6</label>
							<select name='symptom6' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">chest_pain</option>
							    <option value="2">cough</option>
							    <option value="3">abdominal_pain</option>
							    <option value="4">loss_of_appetite</option>
							</select>
							<label>Symptom 7</label>
							<select name='symptom7' className="form-control" onChange={handleChange}>
		                    	<option value="0">none</option>
							    <option value="1">yellowing_of_eyes</option>
							    <option value="2">puffy_face_and_eyes</option>
							    <option value="3">obesity</option>
							    <option value="4">excessive_hunger</option>
							</select>
							<label>Symptom 8</label>
							<select name='symptom8' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">enlarged_thyroid</option>
							    <option value="2">excessive_hunger</option>
							    <option value="3">visual_disturbances</option>
							    <option value="4">irritability</option>
							</select>
							<label>Symptom 9</label>
							<select name='symptom9' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">visual_disturbances</option>
							    <option value="2">brittle_nails</option>
							    <option value="3">muscle_weakness</option>
							    <option value="4">drying_and_tingling_lips</option>
							</select>
							<label>Symptom 10</label>
							<select name='symptom10' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">depression</option>
							    <option value="2">ulcers_on_tongue</option>
							    <option value="3">abnormal_menstruation</option>
							    <option value="4">irritability</option>
							</select>
							<label>Symptom 11</label>
							<select name='symptom11' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">irritability</option>
							    <option value="2">palpitations</option>
							    <option value="3">muscle_pain</option>
							    <option value="4">malaise</option>
							</select>
							<label>Symptom 12</label>
							<select name='symptom12' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">red_spots_over_body</option>
							    <option value="2">muscle_pain</option>
							    <option value="3">stomach_bleeding</option>
							    <option value="4">phlegm</option>
							</select>
							<label>Symptom 13</label>
							<select name='symptom13' className="form-control" onChange={handleChange}>
		                    	<option value="0">none</option>
							    <option value="1">phlegm</option>
							    <option value="2">malaise</option>
							    <option value="3">runny_nose</option>
							    <option value="4">congestion</option>
							</select>
							<label>Symptom 14</label>
							<select name='symptom14' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">chest_pain</option>
							    <option value="2">red_spots_over_body</option>
							</select>
							<label>Symptom 15</label>
							<select name='symptom15' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">blood_in_sputum</option>
							    <option value="2">chest_pain</option>
							    <option value="3">loss_of_smell</option>
							</select>
							<label>Symptom 16</label>
							<select name='symptom16' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">muscle_pain</option>
							    <option value="2">loss_of_smell</option>
							</select>
							<label>Symptom 17</label>
							<select name='symptom17' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">muscle_pain</option>
							</select>

		                    
		                  </div>
		                  <div >
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