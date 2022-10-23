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
	Symptom_8:""
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
			<h3>Diabities Prediction</h3><br/>
			<div class="card">
			<div class="container" className="pred">
				<p>  {end_result.prediction}</p>
			</div>
			<div class="container">
				<br/>
				<p>Pregnancies: {end_symptom.Symptom_1}</p>
				<p>Glucose : {end_symptom.Symptom_2}</p>
				<p>Blood Pressure: {end_symptom.Symptom_3}</p>
				<p>Skin Thickness : {end_symptom.Symptom_4}</p>
				<p>Insulin : {end_symptom.Symptom_5}</p>
				<p>BMI : {end_symptom.Symptom_6}</p>
				<p>Diabetes Pedigree Function : {end_symptom.Symptom_7}</p>
				<p>Age: {end_symptom.Symptom_8}</p>
			</div>
			</div>

			
        </div>   

		)
		
}

export default Home