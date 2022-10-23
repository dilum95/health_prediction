import React,{useState,Component,useEffect} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import Header from '../components/Header.js';
import DataTable from 'react-data-table-component';

const initialState = {
	prediction:""
};

const initialStateSumptom = {
	
		    "Symptom_1": "",
		    "Symptom_2": "",
		    "Symptom_3": "",
		    "Symptom_4": "",
		    "Symptom_5": "",
		    "Symptom_6": "",
		    "Symptom_7": "",
		    "Symptom_8": "",
		    "Symptom_9": "",
		    "Symptom_10": "",
		    "Symptom_11": "",
		    "Symptom_12": "",
		    "Symptom_13": "",
		    "Symptom_14": "",
		    "Symptom_15": "",
		    "Symptom_16": "",
		    "Symptom_17": "",
		    "Symptom_18": "",
		    "Symptom_19": "",
		    "Symptom_20": "",
		    "Symptom_21": "",
		    "Symptom_22": "",
		    "Symptom_23": "",
		    "Symptom_24": "",
		    "Symptom_25": ""
		  
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
			<h3>CKD Prediction</h3><br/>
			<div class="card">
			<div class="container" className="pred">
				<p>  {end_result.prediction}</p>
			</div>
			<div class="container">
				<br/>
				<div className="row">
					<div className="column">
						<p>Age: {end_symptom.Symptom_2}</p>
						<p>BP : {end_symptom.Symptom_3}</p>
						<p>SG: {end_symptom.Symptom_4}</p>
						<p>AL: {end_symptom.Symptom_5}</p>
						<p>SU : {end_symptom.Symptom_6}</p>
						<p>RBC : {end_symptom.Symptom_7}</p>
					</div>

					<div className="column">
						<p>PC: {end_symptom.Symptom_8}</p>
						<p>PCC : {end_symptom.Symptom_9}</p>
						<p>BA {end_symptom.Symptom_10}</p>
						<p>BGR: {end_symptom.Symptom_11}</p>
						<p>BU : {end_symptom.Symptom_12}</p>
						<p>SC : {end_symptom.Symptom_13}</p>
					</div>

					<div className="column">
						<p>SOD: {end_symptom.Symptom_14}</p>
						<p>POT : {end_symptom.Symptom_15}</p>
						<p>HEMO: {end_symptom.Symptom_16}</p>
						<p>PCV : {end_symptom.Symptom_17}</p>
						<p>WC : {end_symptom.Symptom_18}</p>
						<p>RC : {end_symptom.Symptom_19}</p>
					</div>

					<div className="column">
						<p>HTN: {end_symptom.Symptom_20}</p>
						<p>DM : {end_symptom.Symptom_21}</p>
						<p>CAD: {end_symptom.Symptom_22}</p>
						<p>APPET: {end_symptom.Symptom_23}</p>
						<p>PE : {end_symptom.Symptom_24}</p>
						<p>ANE : {end_symptom.Symptom_25}</p>
					</div>

				</div>
			</div>
			</div>

			
        </div>   

		)
		
}

export default Home