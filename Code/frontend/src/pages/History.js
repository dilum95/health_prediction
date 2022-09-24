import React,{useState,useEffect} from 'react'
import {Link,useLocation,useParams} from "react-router-dom";
import axios from "axios";
import Header from '../components/Header.js';


const View = () =>{

	const {id} = useParams();
	const [data,setData]=useState([]);

	// #############################################
	  const imageUrl = "logo512.png";
		const [img, setImg] = useState();

		const fetchImage = async () => {
	    const res = await fetch(imageUrl);
	    const imageBlob = await res.blob();
	    const imageObjectURL = URL.createObjectURL(imageBlob);
	    setImg(imageObjectURL);
	  };
	// #############################################

	

	if(!id){
		// redicret to home
	}		// get ser predict history	
		
	useEffect(()=>{
		getUserHosory(id)
	},[])	

	useEffect(()=>{
		fetchImage()
	},[])	
	    	
	const getUserHosory = async(id) =>{
	  	const response=await axios.get(`http://localhost:5001/medicalHistory/${id}`)
		  	if (response.status===200){
		  		 const resdata = response.data.data
		  		 setData(resdata)		          
		  	}else{
		  		alert("Error response")
		  	}
	}
		

	return(

		<div>

			<Header />

			<h3>History</h3>

			
			
			<table className="stuled-table" width="100%">
        <thead>
          <tr>
            <th style={{textAlign:"center"}}></th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item,index)=>{
              return(
                <tr key={index}>
                  <th >
                  <div class="card">
										  <div class="container">
										    <h4><b>{item.type}</b></h4> 
										    <p>{item.date}</p> 
										    <p>{item.prediction}</p> 
										  </div>
										</div>
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

export default View