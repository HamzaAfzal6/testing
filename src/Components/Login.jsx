import React from 'react'
import { FormGroup,TextField,Button,Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
   <>
   <Container>
    <div className="form-wrapper" >
   <div className='form'>
        <h1><b>Login</b></h1>
   <TextField id="UserName" label="Username" variant="outlined" />
   <TextField id="Password" label="Password" variant="outlined" />
   <Button  variant="contained">Login</Button>
   <p >Don't have an account?..<Link to={'/signup'} >signup</Link></p>
  
   </div>
     </div>
   </Container>
   
   
   
   </>
  )
}

export default Login
