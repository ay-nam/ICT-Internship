import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Add = () => {

  const [form, setForm] = useState(
    {
      fname: "",
      department: "",
      semester: ""
    }
  )
  function valueCap(e) {
    console.log(e)
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
          <TextField id="name-input" label="Name" variant="standard" name="fname" onChange={valueCap} />
          <br />
          <TextField id="department-input" label="Department" variant="standard" name="department" onChange={valueCap} />
          <br />
          <TextField id="semester-input" label="Semester" variant="standard" name="semester" onChange={valueCap} />
          <br />
          <Button variant="contained" color='success'>Add</Button>
        </Stack>
      </Box>
    </>
  );
}

export default Add;
