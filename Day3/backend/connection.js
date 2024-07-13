//with help of mongoose we connect to database
const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://userone:userone@cluster0.tsd7ugt.mongodb.net/moviedb?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('DB is connected')
}).catch((res)=>{
    console.log('DB is not connected')
})