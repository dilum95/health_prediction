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

	const onFormSubmitHeart=(event) =>{

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
		    "Symptom_13": Symptom_13
		  }
		  

		  axios.post("http://localhost:5000/heart", sendData).then(result => {

	        const data = result.data

	        const userData = JSON.parse(sessionStorage.getItem("activeuser"));
	        const type = "Heart Diseases";
	        var date = new Date();
	        date=getDateOnly(date)
	        var prediction=data.msg

	        if(prediction[3]==='b'){
	        	prediction="Heart problem Present"
	        	alert("You have heart Problem")
	        }else{
	        	prediction="Heart problem Absent"
	        	alert("You haven't heart problem")
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
			<h3>Heart Diseases</h3>
			<div className="handledivHome">
			    <form onSubmit={ onFormSubmitHeart }>
                  <div className="mb-3">
                    <label>Age</label>
                    <input type="number" className="form-control" placeholder="symptom1" defaultValue="0" onChange={handleChange} name="symptom1" />
                    <label>Sex</label>
                    <select name='symptom2' className="form-control">
						<option value="0">Male</option>
					    <option value="1">Female</option>
					</select>
                    <label>Chest pain</label>
                    <input type="text" className="form-control" placeholder="Chest pain" defaultValue="0" onChange={handleChange} name="symptom3" />
                    <label>BP</label>
                    <input type="text" className="form-control" placeholder="BP" defaultValue="0" onChange={handleChange} name="symptom4" />
                    <label>Cholesterol</label>
                    <input type="text" className="form-control" placeholder="Cholesterol" defaultValue="0" onChange={handleChange} name="symptom5" />
                    <label>FBS over 120</label>
                    <input type="text" className="form-control" placeholder="FBS over 120" defaultValue="0" onChange={handleChange} name="symptom6" />
                    <label>EKG results</label>
                    <input type="text" className="form-control" placeholder="EKG results" defaultValue="0" onChange={handleChange} name="symptom7" />
                    <label>Max HR</label>
                    <input type="text" className="form-control" placeholder="Max HR" defaultValue="0" onChange={handleChange} name="symptom8" />
                    <label>Exercise angina</label>
                    <input type="text" className="form-control" placeholder="Exercise angina" defaultValue="0" onChange={handleChange} name="symptom9" />
                    <label>ST depression</label>
                    <input type="text" className="form-control" placeholder="ST depression" defaultValue="0" onChange={handleChange} name="symptom10" />
                    <label>Slope of ST</label>
                    <input type="text" className="form-control" placeholder="Slope of ST" defaultValue="0" onChange={handleChange} name="symptom11" />
                    <label>Number of vessels fluro</label>
                    <input type="text" className="form-control" placeholder="Number of vessels fluro" defaultValue="0" onChange={handleChange} name="symptom12" />
                    <label>Thallium</label>
                    <input type="text" className="form-control" placeholder="Thallium" defaultValue="0" onChange={handleChange} name="symptom13" />
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