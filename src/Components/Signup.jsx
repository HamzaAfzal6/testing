import React from 'react'
import { FormGroup,TextField,Button,Container } from '@mui/material';


const Signup = () => {
  return (
    <>
     <Container>
    <div className="form-wrapper" >
    <div className='signupform'>
  <h1><b>SignUp</b></h1>
  <div className="form-row">
    <TextField id="UserName" label="Username" variant="outlined" />
    <TextField id="FirstName" label="FirstName" variant="outlined" />
  </div>
  <div className="form-row">
    <TextField id="LastName" label="LastName" variant="outlined" />
    <TextField id="Email" label="Email" variant="outlined" />
  </div>
  <div className="form-row">
    <TextField id="Password" label="Password" variant="outlined" />
    <TextField id="ConfirmPassword" label="ConfirmPassword" variant="outlined" />
  </div>
  <div className="form-row">
  <textarea
        rows={4} // Number of visible rows for the textarea
        cols={40} // Number of visible columns for the textarea
      
        placeholder="Address..."
      />
  </div>
  <Button variant="contained">Submit</Button>
</div>

     </div>
   </Container>
    </>
  )
}

export default Signup
