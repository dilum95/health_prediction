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
		    "Symptom_1": Symptom_1.split('-')[0],
		    "Symptom_2": Symptom_2.split('-')[0],
		    "Symptom_3": Symptom_3.split('-')[0],
		    "Symptom_4": Symptom_4.split('-')[0],
		    "Symptom_5": Symptom_5.split('-')[0]
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

	        const sendData1 = {
			    "Symptom_1": Symptom_1.split('-')[1],
			    "Symptom_2": Symptom_2.split('-')[1],
			    "Symptom_3": Symptom_3.split('-')[1],
			    "Symptom_4": Symptom_4.split('-')[1],
			    "Symptom_5": Symptom_5.split('-')[1]
			  }
	        window.sessionStorage.setItem('common_submit', JSON.stringify(sendData1));
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
		                    	<option value="0-none">none</option>
							    <option value="1-itching">itching</option>
							    <option value="2-skin_rash">skin_rash</option>
							    <option value="3-continuous_sneezing">continuous_sneezing</option>
							    <option value="4-shivering">shivering</option>
							    <option value="5-stomach_pain">stomach_pain</option>
							    <option value="6-acidity">acidity</option>
							    <option value="7-vomiting">vomiting</option>
							    <option value="8-indigestion">indigestion</option>
							    <option value="9-joint_pain">joint_pain</option>
							    <option value="10-muscle_weakness">muscle_weakness</option>
							    <option value="11-burning_micturition">burning_micturition</option>
							    <option value="12-weight_loss">weight_loss</option>
							    <option value="13-sunken_eyes">sunken_eyes</option>
							    <option value="14-cough">cough</option>
							    <option value="15-headache">headache</option>
							    <option value="16-chest_pain">chest_pain</option>
							    <option value="17-back_pain">back_pain</option>
							    <option value="18-weakness_in_limbs">weakness_in_limbs</option>
							    <option value="19-chills">chills</option>
							    <option value="20-yellowish_skin">yellowish_skin</option>
							    <option value="21-breathlessness">breathlessness</option>
							    <option value="22-cramps">cramps</option>
							    <option value="23-weight_gain">weight_gain</option>
							    <option value="24-neck_pain">neck_pain</option>
							    <option value="25-stiff_neck">stiff_neck</option>
							    <option value="26-high_fever">high_fever</option>
							</select>
							<label>Symptom 2</label>
							<select name='symptom2' className="form-control" onChange={handleChange}>
								<option value="0-none">none</option>
							    <option value="1-skin_rash">skin_rash</option>
							    <option value="2-nodal_skin_eruptions">nodal_skin_eruptions</option>
							    <option value="3-shivering">shivering</option>
							    <option value="4-chills">chills</option>
							    <option value="5-acidity">acidity</option>
							    <option value="6-ulcers_on_tongue">ulcers_on_tongue</option>
							    <option value="7-vomiting">vomiting</option>
							    <option value="8-yellowish_skin">yellowish_skin</option>
							    <option value="9-stomach_pain">stomach_pain</option>
							    <option value="10-loss_of_appetite">loss_of_appetite</option>
							    <option value="11-indigestion">indigestion</option>
							    <option value="12-weight_gain">weight_gain</option>
							    <option value="13-mood_swings">mood_swings</option>
							    <option value="14-fatigue">fatigue</option>
							    <option value="15-neck_pain">neck_pain</option>
							    <option value="16-bladder_discomfort">bladder_discomfort</option>
							    <option value="17-joint_pain">joint_pain</option>
							    <option value="18-high_fever">high_fever</option>
							    <option value="19-weight_loss">weight_loss</option>
							    <option value="20-restlessness">restlessness</option>
							    <option value="21-sunken_eyes">sunken_eyes</option>
							    <option value="22-dehydration">dehydration</option>
							    <option value="23-cough">cough</option>
							    <option value="24-dizziness">dizziness</option>
							    <option value="25-cold_hands_and_feets">cold_hands_and_feets</option>
							    <option value="26-anxiety">anxiety</option>
							</select>
							<label>Symptom 3</label>
							<select name='symptom3' className="form-control" onChange={handleChange}>
								<option value="0-none">none</option>
							    <option value="1-nodal_skin_eruptions">nodal_skin_eruptions</option>
							    <option value="2-dischromic_patches">dischromic_patches</option>
							    <option value="3-chills">chills</option>
							    <option value="4-watering_from_eyes">watering_from_eyes</option>
							    <option value="5-ulcers_on_tongue">ulcers_on_tongue</option>
							    <option value="6-abdominal_pain">abdominal_pain</option>
							    <option value="7-cold_hands_and_feets">cold_hands_and_feets</option>
							    <option value="8-foul_smell_of_urine">foul_smell_of_urine</option>
							    <option value="9-blister">blister</option>
							    <option value="10-skin_peeling">skin_peeling</option>
							    <option value="11-dehydration">dehydration</option>
							    <option value="12-diarrhoea">diarrhoea</option>
							    <option value="13-high_fever">high_fever</option>
							    <option value="14-breathlessness">breathlessness</option>
							    <option value="15-neck_pain">neck_pain</option>
							    <option value="16-blurred_and_distorted_vision">blurred_and_distorted_vision</option>
							    <option value="17-weakness_of_one_body_side">weakness_of_one_body_side</option>
							    <option value="18-swelling_of_stomach">swelling_of_stomach</option>
							    <option value="19-bloody_stool">bloody_stool</option>
							    <option value="20-bruising">bruising</option>
							    <option value="21-obesity">obesity</option>
							    <option value="22-hip_joint_pain">hip_joint_pain</option>
							    <option value="23-movement_stiffness">movement_stiffness</option>
							    <option value="24-continuous_feel_of_urine">continuous_feel_of_urine</option>
							    <option value="25-silver_like_dusting">silver_like_dusting</option>
							    <option value="26-extra_marital_contacts">extra_marital_contacts</option>
							</select>
							<label>Symptom 4</label>
							<select name='symptom4' className="form-control" onChange={handleChange}>
								<option value="0-none">none</option>
							    <option value="1-dischromic_patches">dischromic_patches</option>
							    <option value="2-vomiting">vomiting</option>
							    <option value="3-nausea">nausea</option>
							    <option value="4-spotting_urination">spotting_urination</option>
							    <option value="5-abdominal_pain">abdominal_pain</option>
							    <option value="6-mood_swings">mood_swings</option>
							    <option value="7-restlessness">restlessness</option>
							    <option value="8-sweating">sweating</option>
							    <option value="9-spinning_movements">spinning_movements</option>
							    <option value="10-silver_like_dusting">silver_like_dusting</option>
							    <option value="11-red_sore_around_nose">red_sore_around_nose</option>
							    <option value="12-irregular_sugar_level">irregular_sugar_level</option>
							    <option value="13-diarrhoea">diarrhoea</option>
							    <option value="14-breathlessness">breathlessness</option>
							    <option value="15-loss_of_balance">loss_of_balance</option>
							    <option value="16-lack_of_concentration">lack_of_concentration</option>
							    <option value="17-blurred_and_distorted_vision">blurred_and_distorted_vision</option>
							    <option value="18-dizziness">dizziness</option>
							    <option value="19-headache">headache</option>
							    <option value="20-dark_urine">dark_urine</option>
							    <option value="21-yellowing_of_eyes">yellowing_of_eyes</option>
							    <option value="22-distention_of_abdomen">distention_of_abdomen</option>
							    <option value="23-irritation_in_anus">irritation_in_anus</option>
							    <option value="24-swollen_legs">swollen_legs</option>
							    <option value="25-small_dents_in_nails">small_dents_in_nails</option>
							</select>
							<label>Symptom 5</label>
							<select name='symptom5' className="form-control" onChange={handleChange}>
								<option value="0-none">none</option>
							    <option value="1-cough">cough</option>
							    <option value="2-chest_pain">chest_pain</option>
							    <option value="3-loss_of_appetite">loss_of_appetite</option>
							    <option value="4-abdominal_pain">abdominal_pain</option>
							    <option value="5-spotting_urination">spotting_urination</option>
							    <option value="6-internal_itching">internal_itching</option>
							    <option value="7-passage_of_gases">passage_of_gases</option>
							    <option value="8-sweating">sweating</option>
							    <option value="9-headache">headache</option>
							    <option value="10-swelling_joints">swelling_joints</option>
							    <option value="11-painful_walking">painful_walking</option>
							    <option value="12-loss_of_balance">loss_of_balance</option>
							    <option value="13-small_dents_in_nails">small_dents_in_nails</option>
							    <option value="14-yellow_crust_ooze">yellow_crust_ooze</option>
							    <option value="15-mucoid_sputum">mucoid_sputum</option>
							    <option value="16-lack_of_concentration">lack_of_concentration</option>
							    <option value="17-history_of_alcohol_consumption">history_of_alcohol_consumption</option>
							    <option value="18-swollen_blood_vessels">swollen_blood_vessels</option>
							    <option value="19-diarrhoea">diarrhoea</option>
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