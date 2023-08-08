import React from 'react'
import ImageSlider from './modules/ImageSlider'
import { Container,Grid,Chip,Avatar } from '@mui/material'
import Flashsale from './modules/Flashsale'
import BestSelling from './modules/BestSelling'
import Footer from './Footer'

const Home = () => {
const categoryData=[{label:'Mart Items', image:"https://www.pngitem.com/pimgs/m/45-457113_transparent-cart-small-shopping-cart-icon-hd-png.png"},
{label:'Fashion', image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_fU15mM-h2lyLGP_H4WnhbEdw-bJBqp2kMg&usqp=CAU"},
{label:'Beauty', image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGhX8u79B-S01hE77Hx_K7_huWV4eENRdOQw&usqp=CAU"},
{label:'Home Decor', image:"https://cdn.pixabay.com/photo/2016/04/08/18/46/shopping-mall-1316787_1280.jpg"}
]

  return (
 <><div className="slide">

<ImageSlider/>

 </div>
<div className="chips">
  <Container sx={{paddingLeft:12,marginleft:15,marginRight:15,marginTop:10}}>
    <Grid container spacing={5} margintop={2}  marginBottom={4} sx={{ paddingLeft: { sm: 4, lg: 24 },paddingRight:{sm:2,xs:8,lg:0} }}>
{categoryData.map((category) => (
<Grid item xs={6} sm={6} md={3} lg={3} key={category.label}>
  <Chip  color="secondary" clickable avatar={<Avatar src={category.image} />} label={category.label} onClick={console.log('clicked')} />

</Grid>
))}

    </Grid>
   
<Flashsale/>
  </Container>
</div>
<Container>

<BestSelling/>
</Container>
<Footer/>

 </>
  )
}

export default Home
