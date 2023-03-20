
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { Fragment, useEffect } from 'react';
import AddEmployeeModal from './AddEmployeeModal';
import Row from './Row';

export default function TableData
() {

 
const [data,setData] = React.useState([])
const [callServer,setCallServer] = React.useState(false)

 useEffect(() => {
  fetch('http://localhost:9000/data').then(res=>res.json()).then(data=>setData(data))
 }, [callServer])
  return (
    <Fragment>
    <AddEmployeeModal setCallServer={setCallServer}/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{fontWeight:"bold"}}>
          <TableRow>
            <TableCell>No</TableCell>
          
            <TableCell >First&nbsp;Name</TableCell>
            <TableCell >Last&nbsp;Name</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >Salary</TableCell>
            <TableCell >Date</TableCell>
            <TableCell align='center' >Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,index) => (
            <Row setCallServer={setCallServer} rowData={row} index={index+1}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </Fragment>
  );
}