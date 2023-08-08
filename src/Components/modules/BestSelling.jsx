import {React,useState} from 'react'
import Paper from '@mui/material/Paper';
import { Grid,} from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material'

const BestSelling = () => {

    const productsData = [
        { id: 1, name: 'Product 1', description: 'Description 1', price: '8.9$', imageUrl: 'https://wbm.com.pk/public/uploads/all/T3SAyT5bpAAoC8OnLUXbRi1yQpIXh3tHxtuINVxO.jpg' },
        { id: 2, name: 'Product 2', description: 'Description 2', price: '9.9$', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtLyNznmWX_fB9tKYSWeL7Ji9CzCItElSqBA&usqp=CAU' },
        { id: 3, name: 'Product 3', description: 'Description 3', price: '7.9$', imageUrl: 'https://viseartofficial.in/cdn/shop/products/VGW01-1.jpg?v=1655387239' },
        { id: 4, name: 'Product 4', description: 'Description 4', price: '6.9$', imageUrl: 'https://www.exportleftovers.com/cdn/shop/products/4_50b2248f-c953-4bbf-b57d-bb93320cb81a_1200x.jpg?v=1666652716' },
        { id: 5, name: 'Product 1', description: 'Description 1', price: '8.9$', imageUrl: 'https://static-01.daraz.pk/p/bfef4b27cb7ba4ff2c5ed3f34c5b76bf.jpg' },
        { id: 6, name: 'Product 2', description: 'Description 2', price: '9.9$', imageUrl: 'https://gophersport.com/media/wysiwyg/BasketballSystem-Cat.png' },
        { id: 7, name: 'Product 3', description: 'Description 3', price: '7.9$', imageUrl: 'https://image.made-in-china.com/202f0j00QtmqrNicbLpj/Ypoo-Home-Gym-Fitness-DC-Motor-Gym-Sports-Equipment-Running-Machine-Fitness-Cheap-Price-Treadmill-with-Free-Yifit-APP.webp' },
        { id: 8, name: 'Product 4', description: 'Description 4', price: '6.9$', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcVeekVhpnpcLmnkh-Z-uwCQyy7YErOaNbD6z9cMbkyb5rM0IFsgp4ptXFzi8twBg40XQ&usqp=CAU' },
      ];
  return (<>
  <Container sx={{paddingLeft:'20px', paddingRight:'20px'}}>
 
  <Grid container spacing={5} marginTop={5} >
      {productsData.map((product) => (
        <Grid item xs={12} sm={12} md={6} lg={3}  key={product.id}>
          <Paper elevation={9}  sx={{
  '&:hover': {
    transform: 'scale(0.9,0.9)', 
    transition: 'transform 0.7s ease', 
    cursor: 'pointer', 
  }
}}>
            <img className='img' src={product.imageUrl} alt={product.name} />
            <Box sx={{ p: 2,width: '200px', height: '40px' }} >
              <Typography variant='h6' component='h5'>
                {product.name}
              </Typography>
              </Box>
              <Box sx={{marginTop:'1',p:2}}>  
              <Typography variant='subtitle2' component='p'>
                {product.price}
              </Typography>             
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
    </Container>
  </>
      )
}

export default BestSelling