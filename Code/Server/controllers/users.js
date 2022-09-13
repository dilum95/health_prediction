import {v4 as uuid}  from "uuid"

let users = [];

export const getUsers=(req,res) =>{
	res.send(users)
}

export const createUser=(req,res) =>{
	
	const user = req.body;

	users.push({...user,id:uuid()})
	res.send("user Added sucessfully")
} 

export const getUser=(req,res) =>{
	
	const singleIser = users.filter((user)=>user.id===req.params.id);
	res.send(singleIser)
}  

export const deleteUser=(req,res) =>{
	
	const use = users.filter((user)=>user.id !== req.params.id);
	res.send("user delete sucessfully")
}  

export const updateUser=(req,res) =>{
	
	const use = users.filter((user)=>user.id === req.params.id);
	use.name=req.body.name
	use.emal=req.body.email 
	use.phone=req.body.phone
	res.send("user update sucessfully")
} 
