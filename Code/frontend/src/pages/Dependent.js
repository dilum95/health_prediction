import React,{useState,useEffect} from 'react'
import {Link,useLocation,useParams} from "react-router-dom";
import axios from "axios";
import Header from '../components/Header.js';
// import logo from './logo512.png';

const Dependent = () =>{

	const {id} = useParams();
	const [data,setData]=useState([]);	
		
	useEffect(()=>{
		getUserHosory(id)
	},[])	
	    	
	const getUserHosory = async(id) =>{
	  	const response=await axios.get(`http://localhost:5001/dependentList/${id}`)
		  	if (response.status===200){
		  		 const resdata = response.data.data
		  		 console.log(resdata)
		  		 setData(resdata)		          
		  	}else{
		  		alert("Error response")
		  	}
	}
		
	const onDeleteUser = async(dependent_id) =>{
		const sendData={
			"dependent":""
		}
	  	const response=await axios.put(`http://localhost:5001/addDependen/${dependent_id}`,sendData)
		  	if (response.status===200){
					getUserHosory(id)
					alert("Deleted Sucessfully")
		  	}else{
		  		alert("Error response")
		  	}
	}

	return(

		<div>

			<Header />

			<h3>Dependent List</h3>
					<div className="row">
          {data &&
            data.map((item,index)=>{
              return(
                			<div className="column">
                				<div class="flip-card">
												  <div class="flip-card-inner">
												    <div class="flip-card-front">
												      <img src={item.image} alt="Avatar" className="carImage"/>
												    </div>
												    <div class="flip-card-back">
												      <h1>{item.name}</h1> 
                              <p>{item.email}</p> 
                              <p>{item.mobile}</p>
                              <button className="btn btn-danger paddingbtn" onClick={()=>onDeleteUser(item._id)}>Delete</button>
                              <Link to={`/history/${item._id}`}>
                               <button className="btn btn-primary">View</button>
                              </Link>
												    </div>
												  </div>
												</div>
                 			</div>
                )
            })

          }

        </div>  
		</div>
		)
}

export default Dependent

