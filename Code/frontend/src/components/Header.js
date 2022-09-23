import React,{useEffect,useState} from 'react'
import {Link,useLocation} from "react-router-dom"
import "./Header.css"


const Header = () =>{
	const [activeTab,setActiveTab] = useState("Home")

	const location= useLocation();
	useEffect(() =>{
		if(location.pathname==="/home"){
			setActiveTab("Home");
		}else if(location.pathname ==="/history:id"){
			setActiveTab("History");
		}else if(location.pathname ==="/dependent_list:id"){
			setActiveTab("Dependent");
		}
		else if(location.pathname ==="/settings:id"){
			setActiveTab("Settings");
		}
		else if(location.pathname ==="/diabities"){
			setActiveTab("Dabities");
		}
		else if(location.pathname ==="/ckd"){
			setActiveTab("Ckd");
		}
		else if(location.pathname ==="/heart"){
			setActiveTab("Heart");
		}

	},[location])

	const user=JSON.parse(sessionStorage.getItem("activeuser"));

	return(
		<div className="topnav">
			 <p><h3 className="h3clolor">Health Prediction System</h3></p> 
			<div className="header-right">
			 <Link to="/home">
			 	<p className={`${activeTab==="Home" ? "active":""}`}  onClick={() => setActiveTab("Home")}>Home</p>
			 </Link>
			 <Link to="/heart ">
			 	<p className={`${activeTab==="Heart" ? "active":""}`}  onClick={() => setActiveTab("Heart")}>Heart Diseases</p>
			 </Link>
			 <Link to="/diabities">
			 	<p className={`${activeTab==="Diabities" ? "active":""}`}  onClick={() => setActiveTab("Diabities")}>Diabities</p>
			 </Link>
			 <Link to="/ckd">
			 	<p className={`${activeTab==="Ckd" ? "active":""}`}  onClick={() => setActiveTab("Ckd")}>CKD</p>
			 </Link>
			<Link to={`/history/${user.id}`}>
			 	<p className={`${activeTab==="Adduser" ? "active":""}`} onClick={() => setActiveTab("History")} >My History</p>
			 </Link>
			 <Link to={`/dependent_list/${user.email}`}>
			 	<p className={`${activeTab==="Dependent" ? "active":""}`} onClick={() => setActiveTab("Dependent")} >Dependent</p>
			 </Link>
			 <Link to={`/settings/${user.id}`}>
			 	<p className="split" onClick={() => setActiveTab("Settings")} >Settings</p>
			 </Link>
		 </div>
		</div>
		)
}

export default Header