const express=require('express');
const app=new express();

const PORT=4000;
const employeeModel=require('./model/employeeData');
require('./connection');

app.get('/employees',async(req,res)=>{
    try{
        const data=await movieModel.find();
        res.send(data)
    }catch(error){
        console.log(error)
    }
})

app.listen(PORT,()=>{
    console.log("Server is running on PORT 4000")
})