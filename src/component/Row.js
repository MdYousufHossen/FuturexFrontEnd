import { Button, TableCell, TableRow } from '@mui/material';
import React, { useState } from 'react';
const Row = ({rowData,index,setCallServer}) => {
    const [editable, setEditable] = useState(false);
    const [first, setFirst] = useState(rowData.first);
    const [last, setLast] = useState(rowData.last);
    const [email, setEmail] = useState(rowData.email);
    const [salary, setSalary] = useState(rowData.salary);
    const [date, setDate] = useState(rowData.date);

    const handleEdit = () => {
        setEditable(false);
    
        fetch(`http://localhost:9000/data/${rowData.id}`, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({first,last,email,salary,date})
          }).then(res => {
            console.log("Request complete! response:", res);
          });
            setCallServer(true)
    }

    const handleDelete = () => {
        fetch(`http://localhost:9000/data/${rowData.id}`, {
            method: "DELETE",
           
          }).then(res => {
            console.log("Request complete! response:", res);
          });
            setCallServer(true)

    }
    setCallServer(false)
    return (
      
        <TableRow
        key={rowData.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
         
        <TableCell  >
          {index}
        </TableCell>
        <TableCell >{editable?<input onChange={(e)=>setFirst(e.target.value)} defaultValue={rowData.first
        }/>:rowData.first}</TableCell>

        <TableCell >{editable?<input onChange={(e)=>setLast(e.target.value)} defaultValue={rowData.last
        }/>:rowData.last}</TableCell>

        <TableCell >{editable?<input onChange={(e)=>setEmail(e.target.value)} defaultValue={rowData.email
        }/>:rowData.email}</TableCell>

        <TableCell >{editable?<input onChange={(e)=>setSalary(e.target.value)} defaultValue={rowData.salary
        }/>:"$"+ rowData.salary}</TableCell>

        <TableCell >{editable?<input onChange={(e)=>setDate(e.target.value)} defaultValue={rowData.date
        }/>:rowData.date}</TableCell>


        <TableCell align='center' >
         { !editable?<Button variant="outlined"  onClick={()=>setEditable(true)
        } color="success" size="small" style={{marginRight: 10}}>Edit</Button>
          :<Button variant="outlined" onClick={handleEdit} color="success" size="small" style={{marginRight: 10}}>Submit</Button>}


          <Button variant="outlined" onClick={handleDelete} color="success" size="small" style={{marginRight: 10}}>Delete</Button>
        </TableCell>
       
      </TableRow>
     
    );
};

export default Row;