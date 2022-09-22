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

	const onFormSubmitHeart=(event) =>{
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
	        console.log(data)
	        alert(data.msg)
	        setdata({
                    name: data.msg
                });
	        
	      })

	}

	const onFormSubmitDiabies=(event) =>{
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
	        console.log(data)
	        alert(data.msg)
	        setdata({
                    name: data.msg
                });
	        
	      })

	}

	const onFormSubmitCKD=(event) =>{
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
	        console.log(data)
	        alert(data.msg)
	        setdata({
                    name: data.msg
                });
	        
	      })

	}

	const onFormSubmitCommon=(event) =>{

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
	        console.log(data)
	        alert(data.msg)
	        setdata({
                    name: data.msg
                });
	        
	      })



    };



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
						<form onSubmit={ onFormSubmitCommon }>
		                  <div className="mb-3">
		                    <select name='symptom1' className="form-control" onChange={handleChange}>
		                    	<option value="0">none</option>
							    <option value="1">Fungal infection</option>
							    <option value="2">Allergy</option>
							    <option value="3">GERD</option>
							    <option value="4">Chronic cholestasis</option>
							</select>
							<select name='symptom2' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">continuous_sneezing</option>
							    <option value="2">stomach_pain</option>
							    <option value="3">acidity</option>
							    <option value="4">itching</option>
							</select>
							<select name='symptom3' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">shivering</option>
							    <option value="2">ulcers_on_tongue</option>
							    <option value="3">acidity</option>
							    <option value="4">vomiting</option>
							</select>
							<select name='symptom4' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">chills</option>
							    <option value="2">ulcers_on_tongue</option>
							    <option value="3">nausea</option>
							    <option value="4">yellowish_skin</option>
							</select>
							<select name='symptom5' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">cough</option>
							    <option value="2">watering_from_eyes</option>
							    <option value="3">loss_of_appetite</option>
							    <option value="4">nausea</option>
							</select>
							<select name='symptom6' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">chest_pain</option>
							    <option value="2">cough</option>
							    <option value="3">abdominal_pain</option>
							    <option value="4">loss_of_appetite</option>
							</select>
							<select name='symptom7' className="form-control" onChange={handleChange}>
		                    	<option value="0">none</option>
							    <option value="1">yellowing_of_eyes</option>
							    <option value="2">puffy_face_and_eyes</option>
							    <option value="3">obesity</option>
							    <option value="4">excessive_hunger</option>
							</select>
							<select name='symptom8' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">enlarged_thyroid</option>
							    <option value="2">excessive_hunger</option>
							    <option value="3">visual_disturbances</option>
							    <option value="4">irritability</option>
							</select>
							<select name='symptom9' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">visual_disturbances</option>
							    <option value="2">brittle_nails</option>
							    <option value="3">muscle_weakness</option>
							    <option value="4">drying_and_tingling_lips</option>
							</select>
							<select name='symptom10' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">depression</option>
							    <option value="2">ulcers_on_tongue</option>
							    <option value="3">abnormal_menstruation</option>
							    <option value="4">irritability</option>
							</select>
							<select name='symptom11' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">irritability</option>
							    <option value="2">palpitations</option>
							    <option value="3">muscle_pain</option>
							    <option value="4">malaise</option>
							</select>
							<select name='symptom12' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">red_spots_over_body</option>
							    <option value="2">muscle_pain</option>
							    <option value="3">stomach_bleeding</option>
							    <option value="4">phlegm</option>
							</select>
							<select name='symptom13' className="form-control" onChange={handleChange}>
		                    	<option value="0">none</option>
							    <option value="1">phlegm</option>
							    <option value="2">malaise</option>
							    <option value="3">runny_nose</option>
							    <option value="4">congestion</option>
							</select>
							<select name='symptom14' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">chest_pain</option>
							    <option value="2">red_spots_over_body</option>
							</select>
							<select name='symptom15' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">blood_in_sputum</option>
							    <option value="2">chest_pain</option>
							    <option value="3">loss_of_smell</option>
							</select>
							<select name='symptom16' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">muscle_pain</option>
							    <option value="2">loss_of_smell</option>
							</select>
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
		               <p>{data.msg}</p>
					</td>
					<td>
						<form onSubmit={ onFormSubmitHeart }>
		                  <div className="mb-3">
		                    <label>Age</label>
		                    <input type="number" className="form-control" placeholder="symptom1"  name="symptom1" />
		                    <label>Sex</label>
		                    <select name='symptom2' className="form-control">
								<option value="0">Male</option>
							    <option value="1">Female</option>
							</select>
		                    <label>Chest pain</label>
		                    <input type="text" className="form-control" placeholder="symptom1"  name="symptom3" />
		                    <label>BP</label>
		                    <input type="text" className="form-control" placeholder="symptom1"  name="symptom4" />
		                    <label>Cholesterol</label>
		                    <input type="text" className="form-control" placeholder="symptom1"  name="symptom5" />
		                    <label>FBS over 120</label>
		                    <input type="text" className="form-control" placeholder="symptom1"  name="symptom6" />
		                    <label>EKG results</label>
		                    <input type="text" className="form-control" placeholder="symptom1"  name="symptom7" />
		                    <label>Max HR</label>
		                    <input type="text" className="form-control" placeholder="symptom1"  name="symptom8" />
		                    <label>Exercise angina</label>
		                    <input type="text" className="form-control" placeholder="symptom1"  name="symptom9" />
		                    <label>ST depression</label>
		                    <input type="text" className="form-control" placeholder="symptom1"  name="symptom10" />
		                    <label>Slope of ST</label>
		                    <input type="text" className="form-control" placeholder="symptom1"  name="symptom11" />
		                    <label>Number of vessels fluro</label>
		                    <input type="text" className="form-control" placeholder="symptom1"  name="symptom12" />
		                    <label>Thallium</label>
		                    <input type="text" className="form-control" placeholder="symptom1"  name="symptom13" />
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
						<form onSubmit={ onFormSubmitDiabies }>
		                  <div className="mb-3">
		                    <label>Pregnancies</label>
		                    <input type="text" className="form-control" placeholder="symptom1"  name="symptom1" />
		                    <label>Glucose</label>
		                    <input type="text" className="form-control" placeholder="symptom2"  name="symptom2" />
            		        <label>BloodPressure</label>
		                    <input type="text" className="form-control" placeholder="symptom3"  name="symptom3" />
		                    <label>SkinThickness</label>
		                    <input type="text" className="form-control" placeholder="symptom4"  name="symptom4" />
		                    <label>Insulin</label>
		                    <input type="text" className="form-control" placeholder="symptom5"  name="symptom5" />
		                    <label>BMI</label>
		                    <input type="text" className="form-control" placeholder="symptom6"  name="symptom6" />
		                    <label>DiabetesPedigreeFunction</label>
		                    <input type="text" className="form-control" placeholder="symptom7"  name="symptom7" />
		                    <label>Age</label>
		                    <input type="text" className="form-control" placeholder="symptom8"  name="symptom8" />
		                  </div>
		                  <div >
				          <button type="submit" className="btn btn-primary">
				            Submit
				          </button>
				        </div>
		               </form>
					</td>
					<td>
						<form onSubmit={ onFormSubmitCKD }>
		                  <div className="mb-3">
		                    <label>Age</label>
		                    <input type="text" className="form-control" placeholder="symptom2"  name="symptom2" />
		                    <label>BP</label>
		                    <input type="text" className="form-control" placeholder="symptom3"  name="symptom3" />
            		        <label>SG</label>
		                    <input type="text" className="form-control" placeholder="symptom4"  name="symptom4" />
		                    <label>AL</label>
		                    <input type="text" className="form-control" placeholder="symptom5"  name="symptom5" />
		                    <label>SU</label>
		                    <input type="text" className="form-control" placeholder="symptom6"  name="symptom6" />
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
		                    <input type="text" className="form-control" placeholder="symptom2"  name="symptom11" />
		                    <label>BU</label>
		                    <input type="text" className="form-control" placeholder="symptom3"  name="symptom12" />
            		        <label>SC</label>
		                    <input type="text" className="form-control" placeholder="symptom4"  name="symptom13" />
		                    <label>SOD</label>
		                    <input type="text" className="form-control" placeholder="symptom5"  name="symptom14" />
		                    <label>POT</label>
		                    <input type="text" className="form-control" placeholder="symptom6"  name="symptom15" />
		                    <label>HEMO</label>
		                    <input type="text" className="form-control" placeholder="symptom3"  name="symptom16" />
            		        <label>PCV</label>
		                    <input type="text" className="form-control" placeholder="symptom4"  name="symptom17" />
		                    <label>WC</label>
		                    <input type="text" className="form-control" placeholder="symptom5"  name="symptom18" />
		                    <label>RC</label>
		                    <input type="text" className="form-control" placeholder="symptom6"  name="symptom19" />
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
					</td>
				</tr>
			</table>
			
		</div>
		)
		
}

export default Home