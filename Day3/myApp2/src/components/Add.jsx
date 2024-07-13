import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {useNavigate,useLocation} from 'react-router-dom'

const Add = () => {

    const [form, setForm] = useState(
        {
            name: '',
            director: '',
            category: '',
            releaseYear: 0
        }
    )

    var navigate = useNavigate();

    function valueFetch(e) {
        // console.log(e)
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const location = useLocation()
    let sendData = () => {
        // console.log(form)
        if (location.state != null) {
            axios.put('http://localhost:4000/movieupdation/' + location.state.movie._id, form).then((res) => {
                alert('Data updated');
                navigate('/')
            }).catch((error) => {
                console.log(error);
            })
        }
        else {
            axios.post('http://localhost:4000/newmovie', form).then((res) => {
                alert('Data added')
                navigate('/')

            }).catch((error) => {
                console.log(error)
            })
        }
    }
    useEffect(() => {
        if (location.state != null) {
            setForm({
                ...form,
                name: location.state.movie.name,
                director: location.state.movie.director,
                category: location.state.movie.category,
                releaseYear: location.state.movie.releaseYear
            })
        }
    }, [])

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Stack spacing={2} direction="column">
                    <TextField id="name-input" label="Name" variant="standard" name="name" value={form.name} onChange={valueFetch} />
                    <br />
                    <TextField id="director-input" label="Director" variant="standard" name="director" value={form.director} onChange={valueFetch} />
                    <br />
                    <TextField id="category-input" label="Category" variant="standard" name="category" value={form.category} onChange={valueFetch} />
                    <br />
                    <TextField id="releaseyear-input" label="ReleaseYear" variant="standard" name="releaseYear" type='number' value={form.releaseYear} onChange={valueFetch} />
                    <br />
                    <Button variant="contained" color='success' onClick={(sendData)}>Add</Button>
                </Stack>
            </Box>
        </>
    );

}

export default Add
