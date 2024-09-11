import "./ConcertList.css"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createTheme } from "@mui/material";


const stulzcolors = {
    black: "#141414",
    red: "#8f342280",
    white: "#f9f9f99F"
}


function createData(date, location, artist) {
    return { date, location, artist };
}

const rows = [
    createData('08.12.2024', "Krugahalle", "Bülent"),
    createData('09.12.2024', "Jahrhunderthalle", "Bülent"),
    createData('10.12.2024', "Jahrhunderthalle", "Bülent"),
    createData('11.12.2024', "Westfalenhalle", "Bülent"),
];


const ConcertList = () => {

    return (

        <>
            <TableContainer component={Paper} sx={{width: 0.6, boxShadow: 1, background: stulzcolors.red}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell sx={{fontWeight: 'bold', color:stulzcolors.white}}>Datum</TableCell>
                            <TableCell sx={{fontWeight: 'bold', color:stulzcolors.white}} >Location</TableCell>
                            <TableCell sx={{fontWeight: 'bold', color:stulzcolors.white}} align="center" >Artist</TableCell>
                       
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.date}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, color: stulzcolors.white }}
                            >
                                <TableCell component="th" scope="row" sx={{color: stulzcolors.white}}>
                                    {row.date}
                                </TableCell>
                                <TableCell sx={{color: stulzcolors.white}} >{row.location}</TableCell>
                                <TableCell align="center" sx={{color: stulzcolors.white}}>{row.artist}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </>
           

    )
}

export default ConcertList