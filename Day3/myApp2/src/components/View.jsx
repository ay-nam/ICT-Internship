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

const rows = [
    {
        Name: "Premam",
        Category: "Romantic Drama",
        Director: "Alphonse Puthren",
        ReleaseYear: "2015",
        Image: premamImage
    },
    {
        Name: "Banglore Days",
        Category: "Romantic Comedy-Drama",
        Director: "Anjali Menon",
        ReleaseYear: "2014",
        Image: bangloreDaysImage
    },
    {
        Name: "Aanandam",
        Category: "Adventure Comedy-Drama",
        Director: "Ganesh Raj",
        ReleaseYear: "2016",
        Image: aanandamImage
    },
];

const View = () => {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Director</TableCell>
                            <TableCell align="right">Release Year</TableCell>
                            <TableCell align="right">Image</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.Name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.Name}
                                </TableCell>
                                <TableCell align="right">{row.Category}</TableCell>
                                <TableCell align="right">{row.Director}</TableCell>
                                <TableCell align="right">{row.ReleaseYear}</TableCell>
                                <TableCell align="right">
                                    <img src={row.Image} alt={row.Name} style={{ width: 100, height: 'auto' }} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default View;
