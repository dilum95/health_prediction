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
		else if(location.pathname ==="/settings"){
			setActiveTab("Settings");
		}

	},[location])

	const user=JSON.parse(sessionStorage.getItem("activeuser"));

	return(
		<div className="header">
			 <p className="logo">Healh Prediction System</p> 
				 <div className="header-right">
				 <Link to="/home">
				 	<p className={`${activeTab==="Home" ? "active":""}`}  onClick={() => setActiveTab("Home")}>Home</p>
				 </Link>
				<Link to={`/history/${user.id}`}>
				 	<p className={`${activeTab==="Adduser" ? "active":""}`} onClick={() => setActiveTab("History")} >My History</p>
				 </Link>
				 <Link to={`/dependent_list/${user.email}`}>
				 	<p className={`${activeTab==="Dependent" ? "active":""}`} onClick={() => setActiveTab("Dependent")} >Dependent</p>
				 </Link>
				 <Link to="/settings">
				 	<p className={`${activeTab==="Settings" ? "active":""}`} onClick={() => setActiveTab("Settings")} >Settings</p>
				 </Link>
			 </div>
		</div>
		)
}

export default Header