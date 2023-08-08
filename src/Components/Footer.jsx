import { Paper, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'
import './Footer.css'


function Footer() {
  return (<>
  
    <div class="skew-dvd dvd-theme footer"></div>
    <footer class="footer" >
        <Typography variant='BUTTON TEXT' component='h5'>

    &copy; 2023 Eshop. All rights reserved.

        </Typography>
  </footer>
  </>
  )
}

export default Footer
