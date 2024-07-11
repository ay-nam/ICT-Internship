import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,Paper } from '@mui/material'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

const DemoAxios = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/users').then((res) => {
            setRows(res.data.users)
        })
    }, [])

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 450 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Firstname</TableCell>
                            <TableCell >Lastname</TableCell>
                            <TableCell >Gender</TableCell>
                            <TableCell >Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.firstName}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.firstName}
                                </TableCell>
                                <TableCell>{row.lastName}</TableCell>
                                <TableCell >{row.gender}</TableCell>
                                <TableCell >{row.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default DemoAxios
