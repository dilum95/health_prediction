import React,{useState,useEffect} from 'react'
import {Link,useParams,useNavigate} from "react-router-dom";
import axios from "axios";
import Header from '../components/Header.js';


const initialState = {
	name:"",
	email:"",
	mobile:"",
	dependent:""
};


const Settings = () =>{
const navigate = useNavigate();


	const [state,setState]=useState(initialState);
	const [fileData, setFileData] = useState("");

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };


	const {name,email,mobile,dependent} = initialState;

	 const updateUser = async (id,userData) =>{		

		const response=await axios.put(`http://localhost:5001/updateUser/${id}`,userData)
		if (response.status===200){
			alert("Updated sucessfully")
			navigate('/home');
		}else{
			alert("update fail")
		}
	}

	const getSingleUser = async (id) =>{
		const response=await axios.get(`http://localhost:5001/getuser/${id}`)
		console.log(response.data)
		const dataset={
			name:response.data.name,
			email:response.data.email,
			mobile:response.data.mobile,
			dependent:response.data.dependent
		}
		setState(dataset)	
	}

	// #############################################
	const imageUrl = "http://localhost:5001/public/1663610340968--profile.png";
		const [img, setImg] = useState();

		const fetchImage = async () => {
	    const res = await fetch(imageUrl);
	    const imageBlob = await res.blob();
	    const imageObjectURL = URL.createObjectURL(imageBlob);
	    setImg(imageObjectURL);
	  };
	// #############################################
	const {id} = useParams();

	const handleSubmit = (event) =>{
		event.preventDefault()
		if(id){
			const newename = event.target.name.value;
			const newemail = event.target.email.value;
	    const newmobile = event.target.mobile.value;
	    const dependent = event.target.dependent.value

		    let userData = {
	              "name": newename,
	              "mobile": newmobile,
	              "dependent":dependent
	            }
			updateUser(id,userData)
		}else{
			alert("invalid path")
		}

   // ###############################################################################

		if (
      (fileData && fileData.type === "image/png") ||
      fileData.type === "image/jpeg" ||
      fileData.type === "image/jpg"
    ) {

      const data = new FormData();
      data.append("ProfilePicture", fileData);
      
      fetch(
        `http://localhost:5001/upload/${id}`,
        {
          method: "PATCH",
          body: data,
        }
      )
        .then((result) => {
          console.log("File Sent Successful");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
		// ##########################################################################
				
	}

	
	const handleInputChange =(e) =>{
		let {name,value} =e.target;
		setState({...state,[name]: value })
	}

	useEffect(() =>{
		if(id){
			getSingleUser(id);
			fetchImage();
			
		}else{
			handleSubmit()
		}
	},[id,state])



	return(
		<div>
		<Header />
		<div className="handlediv">
		<form onSubmit={ handleSubmit }>
        <h3>Settings</h3>
        <div className="mb-3">

          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            name="name"
            onChange={handleInputChange}
            id="name"
            defaultValue={state.name}
          />
        </div>
        <label>Email</label>
        <input
            type="text"
            className="form-control"
            placeholder="First name"
            name="email"
            id="email"
            onChange={handleInputChange}
            defaultValue={state.email}
          />

        <div className="mb-3">
          <label>Mobile Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter mobile number"
            name="mobile"
            id="mobile"
            onChange={handleInputChange}
            defaultValue={state.mobile}
          />
        </div>
        <div className="mb-3">
          <label>Dependent</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter dependent"
            name="dependent"
            id="dependent"
            onChange={handleInputChange}
            defaultValue={state.dependent}
          />
        </div>
        <div className="mb-3">
	        <label>Update Profile picture</label><br/>
	        <input type="file" onChange={fileChangeHandler} />
	      </div>  
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
        
      </form>
		</div>	
		</div>
		);
};	
export default Settings

