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
			<h3>Common Symptoms  Prediction</h3><br/>
			<div class="card">
			<div class="container" className="pred">
				<p> You Have {end_result.prediction}</p>
			</div>
			<div class="container">
				<br/>
				<p>Symptom 1 : {end_symptom.Symptom_1}</p>
				<p>Symptom 2 : {end_symptom.Symptom_2}</p>
				<p>Symptom 3 : {end_symptom.Symptom_3}</p>
				<p>Symptom 4 : {end_symptom.Symptom_4}</p>
				<p>Symptom 5 : {end_symptom.Symptom_5}</p>
			</div>
			</div>

			
        </div>   

		)
		
}

export default Home