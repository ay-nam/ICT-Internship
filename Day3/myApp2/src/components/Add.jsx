import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import React,{useState} from 'react';
import axios from 'axios';

const Add = () => {

    const [form, setForm] = useState(
        {
            name: '',
            director: '',
            category: '',
            releaseYear: 0
        }
    )
    function valueFetch(e) {
        // console.log(e)
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    let sendData = () => {
        console.log(form)
        axios.post('http://localhost:4000/newmovie',form).then((res)=>{
            alert('Data added')
        }).catch((error)=>{
            console.log(error)
        })
    }

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
