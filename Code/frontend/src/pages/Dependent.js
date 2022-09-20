import React,{useState,useEffect} from 'react'
import {Link,useLocation,useParams} from "react-router-dom";
import axios from "axios";
import Header from '../components/Header.js';
// import logo from './logo512.png';

const Dependent = () =>{

	const {id} = useParams();
	const [data,setData]=useState([]);

	

	if(!id){
		// redicret to home
	}		// get ser predict history	
		
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
	
		  	}else{
		  		alert("Error response")
		  	}
	}

	return(

		<div>

			<Header />

			<h3>Dependent List</h3>
			<table className="stuled-table" width="100%">
        <thead>
          <tr>
            <th style={{textAlign:"center"}}>Index</th>
            <th style={{textAlign:"center"}}>Name</th>
            <th style={{textAlign:"center"}}>Email</th>
            <th style={{textAlign:"center"}}>Phone</th>
            <th style={{textAlign:"center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item,index)=>{
              return(
                <tr key={index}>
                  <th scope="row">{index +1}</th>
                  <th >{item.name}</th>
                  <th >{item.email}</th>
                  <th >{item.mobile}</th>
                  <th >
                  	  <button className="btn btn-danger paddingbtn" onClick={()=>onDeleteUser(item._id)}>Delete</button>
                      <Link to={`/history/${item._id}`}>
                       <button className="btn btn-primary">View</button>
                      </Link>		
                  </th>
                </tr>
                )
            })

          }
        </tbody>
      </table>

		</div>
		)
}

export default Dependent