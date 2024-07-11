import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Add = () => {
    return (
        <div>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Stack spacing={2} direction="column">
                    <TextField id="name-label" label="Name" variant="standard" />
                    <TextField id="director-label" label="Director" variant="standard" />
                    <TextField id="category-label" label="Category" variant="standard" />
                    <TextField id="releaseyear-label" label="ReleaseYear" variant="standard" />
                    <TextField id="iamge-label" label="ImageURL" variant="standard" />

                    <Button variant="contained">Submit</Button>
                </Stack>
            </Box>
        </div >
    )
}

export default Add
