import React,{useState,Component,useEffect} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import Header from '../components/Header.js';
import DataTable from 'react-data-table-component';

const initialState = {
	prediction:""
};

const initialStateSumptom = {
	Symptom_1:"",
	Symptom_2:"",
	Symptom_3:"",
	Symptom_4:"",
	Symptom_5:"",
	Symptom_6:"",
	Symptom_7:"",
	Symptom_8:"",
	Symptom_9:"",
	Symptom_10:"",
	Symptom_11:"",
	Symptom_12:"",
	Symptom_13:""
};

const Home = () =>{

	const [end_result, setprediction] = useState(initialState);
	const [end_symptom, setsymptoms] = useState(initialStateSumptom);

	const fetchData = () => {

	    const result= JSON.parse(sessionStorage.getItem("common_result"));
	    const symptoms= JSON.parse(sessionStorage.getItem("common_submit"));

	    setprediction(result)
	    setsymptoms(symptoms)
	  };

	
	

	useEffect(()=>{
		fetchData()
	},[])	

	return(
		<div > 
			<Header />
			<h3>Heart Diseases  Prediction</h3><br/>
			<div class="card">
			<div class="container" className="pred">
				<p>  {end_result.prediction}</p>
			</div>
			<div class="container">
				<br/>
				<p>Age: {end_symptom.Symptom_1}</p>
				<p>Gender : {end_symptom.Symptom_2}</p>
				<p>Chest Pain : {end_symptom.Symptom_3}</p>
				<p>BP : {end_symptom.Symptom_4}</p>
				<p>Cholesterol : {end_symptom.Symptom_5}</p>
				<p>FBS over 120 : {end_symptom.Symptom_6}</p>
				<p>EKG Result : {end_symptom.Symptom_7}</p>
				<p>Max HR : {end_symptom.Symptom_8}</p>
				<p>Exercise angina : {end_symptom.Symptom_9}</p>
				<p>ST depression : {end_symptom.Symptom_10}</p>
				<p>Slope of ST : {end_symptom.Symptom_11}</p>
				<p>Number of vessels fluro : {end_symptom.Symptom_12}</p>
				<p>Thallium: {end_symptom.Symptom_13}</p>
			</div>
			</div>

			
        </div>   

		)
		
}

export default Home