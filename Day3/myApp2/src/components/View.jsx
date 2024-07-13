import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import premamImage from '../assets/Premam.avif';
import bangloreDaysImage from '../assets/Banglore Days.jpg';
import aanandamImage from '../assets/Aanandam.jpeg';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const View = () => {

    const [rows,setRows]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/movies').then((res)=>{
            console.log(res);
            setRows(res.data);       
    })
    },[])

    function deleteMovie(_id){
        axios.delete('http://localhost:4000/movieremoval/'+_id).then((res)=>{
            alert('Data deleted');
            window.location.reload()
        }).catch((error)=>{
            console.log(error)
        })
    }
    const navigate=useNavigate()
    function updateMovie(movie) {
      navigate('/add',{state:{movie}})
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Director</TableCell>
                            <TableCell>Release Year</TableCell>
                            {/* <TableCell align="right">Image</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.category}</TableCell>
                                <TableCell>{row.director}</TableCell>
                                <TableCell>{row.releaseYear}</TableCell>
                                {/* <TableCell align="right">
                                    <img src={row.Image} alt={row.Name} style={{ width: 100, height: 'auto' }} />
                                </TableCell> */}
                                <TableCell><Button variant="contained" color='secondary' onClick={()=>{updateMovie(row)}}>Edit</Button></TableCell>
                                <TableCell><Button variant="contained" color='error' onClick={() => deleteMovie(row._id)}>Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default View;
