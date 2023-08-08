import {React,useState} from 'react'
import Paper from '@mui/material/Paper';
import { Grid, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Fab from '@mui/material/Fab';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container } from '@mui/material'

const Products = () => {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    const productsData = [
        { id: 1, name: 'Product 1', description: 'Description 1', price: '8.9$', imageUrl: 'https://cdn.pixabay.com/photo/2015/09/16/08/55/online-942408_960_720.jpg' },
        { id: 2, name: 'Product 2', description: 'Description 2', price: '9.9$', imageUrl: 'https://cdn.pixabay.com/photo/2015/09/16/08/55/online-942408_960_720.jpg' },
        { id: 3, name: 'Product 3', description: 'Description 3', price: '7.9$', imageUrl: 'https://cdn.pixabay.com/photo/2015/09/16/08/55/online-942408_960_720.jpg' },
        { id: 4, name: 'Product 4', description: 'Description 4', price: '6.9$', imageUrl: 'https://cdn.pixabay.com/photo/2015/09/16/08/55/online-942408_960_720.jpg' },
      ];
  return (<>
  <Container>
  <div className="form">

  <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
  </div>
   <Grid container spacing={5} marginTop={5} >
      {productsData.map((product) => (
        <Grid item xs={12} sm={12} md={6} lg={3}  key={product.id}>
          <Paper elevation={9}  sx={{
  '&:hover': {
    transform: 'scale(1.1)', // Increase the scale by 10% on hover
    transition: 'transform 0.7s ease', // Add a smooth transition effect
    cursor: 'pointer', // Change the cursor to indicate interactivity
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
              <Fab size="small" color="secondary" aria-label="add">
              <AddShoppingCartIcon />
              </Fab>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
    </Container>
  </>
      )
}

export default Products