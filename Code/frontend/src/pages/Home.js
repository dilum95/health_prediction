import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import "./Home.css";
import axios from "axios";

const Home = () =>{

	const [data,setData] = useState([]);

	useEffect(() =>{
		getUsers();
	},[])

	const getUsers = async() =>{
		const response=await axios.get("http://localhost:5000/users")
		if (response.status===200){
			setData(response.data)
		}
	}

    const onDeleteUser = async(id)=>{
    	if(window.confirm("Delete sure")){
		const response=await axios.delete(`http://localhost:5000/user/${id}`)
		console.log(response)
		if (response.status===200){
			console.log(response.data)
			getUsers()
		}
	}

    }

	return(
		<div>
			<h2>Home</h2>
			<table className="stuled-table">
				<thead>
					<tr>
						<th style={{textAlign:"center"}}>Index</th>
						<th style={{textAlign:"center"}}>Name</th>
						<th style={{textAlign:"center"}}>Email</th>
						<th style={{textAlign:"center"}}>Phone</th>
						<th style={{textAlign:"center"}}>Actions</th>
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
									<th >{item.phone}</th>
									<th >
										<Link to={`/update/${item.id}`}>
											<button classNmae="btn bn-edit">Edit</button>
										</Link>
										<button classNmae="btn bn-edit" onClick={()=>onDeleteUser(item.id)}>Delete</button>
										<Link to={`/view/${item.id}`}>
											<button classNmae="btn bn-edit">View</button>
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

export default Home