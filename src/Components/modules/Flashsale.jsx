import React, { useState, useEffect, useRef } from "react";
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {Grid, Container} from '@mui/material';
import { red } from "@mui/material/colors";

const Flashsale = () => {
    let refInstance = useRef(null);
    let [counter, setCountdown] = useState('00:00:00');
  
    let getCounter = (targetTime) => {
      let all = Date.parse(targetTime) - Date.parse(new Date());
      let s = Math.floor((all / 1000) % 60);
      let m = Math.floor((all / 1000 / 60) % 60);
      let h = Math.floor((all / 1000 / 60 / 60) % 24);
      return { all, s, m, h };
    };
  
    let initCounter = (targetTime) => {
      let { all, h, m, s } = getCounter(targetTime);
      if (all >= 0) {
        setCountdown(
          `${h > 0 ? (h > 9 ? h : '0' + h) : '00'}:${
            m > 9 ? m : '0' + m
          }:${s > 9 ? s : '0' + s}`,
        );
      }
    };
  
    let reset = (targetTime) => {
      if (refInstance.current) clearInterval(refInstance.current);
      initCounter(targetTime);
      let id = setInterval(() => {
        initCounter(targetTime);
      }, 1000);
      refInstance.current = id;
    };
  
    let voidTime = () => {
      let voidZone = new Date();
      voidZone.setHours(voidZone.getHours() + 1); // Add 1 hour
      voidZone.setMinutes(voidZone.getMinutes() + 20); // Add 20 minutes
      voidZone.setSeconds(voidZone.getSeconds() + 30); // Add 30 seconds
      return voidZone;
    };
  
    useEffect(() => {
      reset(voidTime());
      return () => {
        // Cleanup the interval on component unmount
        if (refInstance.current) clearInterval(refInstance.current);
      };
    }, []); 
 
    const saleItems=[
        {image:'https://workspace.com.pk/wp-content/uploads/2023/01/IMG_6410.jpg',
         title:'Sofa Set', Price:'45,000pkr' },
        {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_cy5ehWScF59rYgL_Uq1l0LX-tCrUQqzfA&usqp=CAU', 
        title:'EliteBook', Price:'50,000pkr' },
        {image:'https://hdwallsource.com/img/2020/7/sony-ps5-black-edition-wallpaper-72043-74585-hd-wallpapers.jpg',
         title:'Sony PS5', Price:'150,000pkr' },
        {image:'https://static.toiimg.com/thumb/msid-87274609,width-400,resizemode-4/87274609.jpg',
         title:'Smart Refrigrator', Price:'68,000pkr' }
                    ]

    return (
   <>
   <Container>
   <Paper elevation={22}  sx={{ marginLeft: { sm: 4, lg: 12 },marginRight:{sm:2,xs:8,lg:0} }}>
    <h3 className="h1 alert alert-info text-center"><Typography sx={{color:red}} variant="h4" component="div">Sale Ends in</Typography>{counter}</h3>
     
    <Grid container spacing={3}  marginBottom={3}   >

    {saleItems.map((item)=>(
        <Grid item xs={12} sm={6} md={6} lg={3} key={item.title} >
     
     <Card
      sx={{
        maxWidth: 345,
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.1)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
      }} onClick={console.log('card clicked')} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={item.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {item.title}
          </Typography>  
          <Typography gutterBottom variant="BUTTON TEXT" component="div">
            {item.Price}
          </Typography>       
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>

      ))}
 
    </Grid>
    
   </Paper>
   </Container>   
   </>
  )
}

export default Flashsale
