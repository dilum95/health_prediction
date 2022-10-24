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
							    <option value="1">itching</option>
							    <option value="2">skin_rash</option>
							    <option value="3">continuous_sneezing</option>
							    <option value="4">shivering</option>
							    <option value="0">stomach_pain</option>
							    <option value="1">acidity</option>
							    <option value="2">vomiting</option>
							    <option value="3">indigestion</option>
							    <option value="4">joint_pain</option>
							    <option value="0">muscle_weakness</option>
							    <option value="1">burning_micturition</option>
							    <option value="2">weight_loss</option>
							    <option value="3">sunken_eyes</option>
							    <option value="4">cough</option>
							    <option value="0">headache</option>
							    <option value="1">chest_pain</option>
							    <option value="2">back_pain</option>
							    <option value="3">weakness_in_limbs</option>
							    <option value="4">chills</option>
							    <option value="0">yellowish_skin</option>
							    <option value="1">breathlessness</option>
							    <option value="2">cramps</option>
							    <option value="3">weight_gain</option>
							    <option value="4">neck_pain</option>
							    <option value="0">stiff_neck</option>
							    <option value="1">high_fever</option>
							</select>
							<label>Symptom 2</label>
							<select name='symptom2' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">skin_rash</option>
							    <option value="2">nodal_skin_eruptions</option>
							    <option value="3">shivering</option>
							    <option value="4">chills</option>
							    <option value="0">acidity</option>
							    <option value="1">ulcers_on_tongue</option>
							    <option value="2">vomiting</option>
							    <option value="3">yellowish_skin</option>
							    <option value="4">stomach_pain</option>
							    <option value="0">loss_of_appetite</option>
							    <option value="1">indigestion</option>
							    <option value="2">weight_gain</option>
							    <option value="3">mood_swings</option>
							    <option value="4">fatigue</option>
							    <option value="0">neck_pain</option>
							    <option value="1">bladder_discomfort</option>
							    <option value="2">joint_pain</option>
							    <option value="3">high_fever</option>
							    <option value="4">weight_loss</option>
							    <option value="0">restlessness</option>
							    <option value="1">sunken_eyes</option>
							    <option value="2">dehydration</option>
							    <option value="3">cough</option>
							    <option value="4">dizziness</option>
							    <option value="0">cold_hands_and_feets</option>
							    <option value="1">anxiety</option>
							</select>
							<label>Symptom 3</label>
							<select name='symptom3' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">nodal_skin_eruptions</option>
							    <option value="2">dischromic_patches</option>
							    <option value="3">chills</option>
							    <option value="4">watering_from_eyes</option>
							    <option value="0">ulcers_on_tongue</option>
							    <option value="1">abdominal_pain</option>
							    <option value="2">cold_hands_and_feets</option>
							    <option value="3">foul_smell_of_urine</option>
							    <option value="4">blister</option>
							    <option value="0">skin_peeling</option>
							    <option value="1">dehydration</option>
							    <option value="2">diarrhoea</option>
							    <option value="3">high_fever</option>
							    <option value="4">breathlessness</option>
							    <option value="0">neck_pain</option>
							    <option value="1">blurred_and_distorted_vision</option>
							    <option value="2">weakness_of_one_body_side</option>
							    <option value="3">swelling_of_stomach</option>
							    <option value="4">bloody_stool</option>
							    <option value="0">bruising</option>
							    <option value="1">obesity</option>
							    <option value="2">hip_joint_pain</option>
							    <option value="3">movement_stiffness</option>
							    <option value="4">continuous_feel_of_urine</option>
							    <option value="0">silver_like_dusting</option>
							    <option value="1">extra_marital_contacts</option>
							</select>
							<label>Symptom 4</label>
							<select name='symptom4' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">dischromic_patches</option>
							    <option value="2">vomiting</option>
							    <option value="3">nausea</option>
							    <option value="4">spotting_ urination</option>
							    <option value="0">abdominal_pain</option>
							    <option value="1">mood_swings</option>
							    <option value="2">restlessness</option>
							    <option value="3">sweating</option>
							    <option value="4">spinning_movements</option>
							    <option value="0">silver_like_dusting</option>
							    <option value="1">red_sore_around_nose</option>
							    <option value="2">irregular_sugar_level</option>
							    <option value="3">diarrhoea</option>
							    <option value="4">breathlessness</option>
							    <option value="0">loss_of_balance</option>
							    <option value="1">lack_of_concentration</option>
							    <option value="2">blurred_and_distorted_vision</option>
							    <option value="3">dizziness</option>
							    <option value="4">headache</option>
							    <option value="0">dark_urine</option>
							    <option value="1">yellowing_of_eyes</option>
							    <option value="2">distention_of_abdomen</option>
							    <option value="3">irritation_in_anus</option>
							    <option value="4">swollen_legs</option>
							    <option value="0">swollen_legs</option>
							    <option value="1">small_dents_in_nails</option>
							</select>
							<label>Symptom 5</label>
							<select name='symptom5' className="form-control" onChange={handleChange}>
								<option value="0">none</option>
							    <option value="1">cough</option>
							    <option value="2">chest_pain</option>
							    <option value="3">loss_of_appetite</option>
							    <option value="4">abdominal_pain</option>
							    <option value="0">spotting_urination</option>
							    <option value="1">internal_itching</option>
							    <option value="2">passage_of_gases</option>
							    <option value="3">sweating</option>
							    <option value="4">headache</option>
							    <option value="0">swelling_joints</option>
							    <option value="1">painful_walking</option>
							    <option value="2">loss_of_balance</option>
							    <option value="3">small_dents_in_nails</option>
							    <option value="4">yellow_crust_ooze</option>
							    <option value="0">mucoid_sputum</option>
							    <option value="1">lack_of_concentration</option>
							    <option value="2">history_of_alcohol_consumption</option>
							    <option value="3">swollen_blood_vessels</option>
							    <option value="4">diarrhoea</option>
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