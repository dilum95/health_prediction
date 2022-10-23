import React,{useState,Component,useEffect} from 'react'
import {Link,useNavigate} from "react-router-dom";
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

	

	const onFormSubmitDiabies=(event) =>{

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
		    "Symptom_8": Symptom_8
		  }
		  

		  axios.post("http://localhost:5000/diabities", sendData).then(result => {

	        const data = result.data
	        const userData = JSON.parse(sessionStorage.getItem("activeuser"));
	        const type = "Diabities";
	        var date = new Date();
	        date=getDateOnly(date)
	        var prediction=data.msg

	        if(prediction[1]==='0'){
	        	prediction="Diabities Risk Absent"
	        }else{
	        	prediction="Diabities Risk Present"
	        }

	        const predictions={
	        	"user":userData.id,
	        	"type":type,
	        	"date":date,
	        	"prediction":prediction
	        }
	        
	        addPrediction(predictions)
	        const end_result={
	        	"prediction":prediction
	        }
	        // alert(data.msg)

	        window.sessionStorage.setItem('common_submit', JSON.stringify(sendData));
	        window.sessionStorage.setItem('common_result', JSON.stringify(end_result));

	        setdata({
                    name: data.msg
                });

	        navigate('/n_diabiies');
	        
	      })

	}

	



	return(
		<div> 
		<Header />
			<h3>Diabities</h3>
			<div className="handledivHome">
				<form onSubmit={ onFormSubmitDiabies }>
                  <div className="mb-3">
                    <label>Pregnancies</label>
                    <input type="text" className="form-control" placeholder="Pregnancies" defaultValue="0" onChange={handleChange} name="symptom1" />
                    <label>Glucose</label>
                    <input type="text" className="form-control" placeholder="Glucose" defaultValue="0" onChange={handleChange} name="symptom2" />
    		        <label>BloodPressure</label>
                    <input type="text" className="form-control" placeholder="BloodPressure" defaultValue="0" onChange={handleChange} name="symptom3" />
                    <label>SkinThickness</label>
                    <input type="text" className="form-control" placeholder="SkinThickness" defaultValue="0" onChange={handleChange} name="symptom4" />
                    <label>Insulin</label>
                    <input type="text" className="form-control" placeholder="Insulin" defaultValue="0" onChange={handleChange} name="symptom5" />
                    <label>BMI</label>
                    <input type="text" className="form-control" placeholder="BMI" defaultValue="0" onChange={handleChange} name="symptom6" />
                    <label>DiabetesPedigreeFunction</label>
                    <input type="text" className="form-control" placeholder="DiabetesPedigreeFunction" defaultValue="0" onChange={handleChange} name="symptom7" />
                    <label>Age</label>
                    <input type="text" className="form-control" placeholder="Age" defaultValue="0" onChange={handleChange} name="symptom8" />
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