import React,{useState,Component,useEffect} from 'react'
import {useNavigate,Link} from "react-router-dom";
import axios from "axios";
import Header from '../components/Header.js';


const Home = () =>{

	const navigate = useNavigate();
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

		  const sendData = {
		    "Symptom_1": Symptom_1,
		    "Symptom_2": Symptom_2,
		    "Symptom_3": Symptom_3,
		    "Symptom_4": Symptom_4,
		    "Symptom_5": Symptom_5
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
	        const end_result={
	        	"prediction":data.msg
	        }
	        // alert(data.msg)

	        window.sessionStorage.setItem('common_submit', JSON.stringify(sendData));
	        window.sessionStorage.setItem('common_result', JSON.stringify(end_result));


	        setdata({
                    name: data.msg
                });
	        navigate('/n_common');        
	      })

    };



	return(
		<div > 
		<Header />
			<h3>Medical records</h3>
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