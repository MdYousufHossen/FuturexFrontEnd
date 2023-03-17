import { FormControl, Input } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
    borderRadius: 5,
  
  boxShadow: 24,
  p: 4,
};

export default function AddEmployeeModal({setCallServer}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const [first,setFirst] = React.useState('')
    const [last,setLast] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [salary,setSalary] = React.useState('')
    const [date,setDate] = React.useState('')
   
const handleAdd = (e) => {
  e.preventDefault()
  console.log("hello",{first,last,email,salary,date})
    fetch(`http://localhost:9000/data`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({first,last,email,salary,date})
      }).then(res => {
        console.log("Request complete! response:", res);
      });
      
        setCallServer(true)
        handleClose()
    }

  return (
    <div>
         <Button onClick={handleOpen} variant="contained" color="primary">Add Employee</Button>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography align='center' id="modal-modal-title" variant="h6" component="h2">
            Add Employe
          </Typography>
        
          <form onSubmit={handleAdd}>
          <FormControl  style={{gap:"20px",display:"flex", flexDirection:"column",justifyContent:"center"}}>
          
          <Input onChange={(e)=>setFirst(e.target.value)} style={{width:"100%"}} placeholder="First Name" />

           <Input onChange={(e)=>setLast(e.target.value)}  style={{width:"100%"}} placeholder="Last Name" />

           <Input onChange={(e)=>setEmail(e.target.value)}  style={{width:"100%"}} type='email' placeholder="Email" />

           <Input type='number' onChange={(e)=>setSalary(e.target.value)}  style={{width:"100%"}} placeholder="Salary" />

           <Input onChange={(e)=>setDate(e.target.value)} style={{width:"100%"}} placeholder="Date" />
           <Button type="submit" variant="contained" color="primary">Submit</Button>
          </FormControl>
          </form>
          
        </Box>
      </Modal>
    </div>
  );
}