import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  




const ImageSlider = () => {

  return (
    <>
   <div>  
         
       <div className='container-fluid'  >            
        <OwlCarousel items={1}  
          className="owl-theme"  
          loop autoplay >  
           <div ><img  className="sliderimg" src= {'https://img.freepik.com/free-vector/gradient-shopping-center-facebook-cover_23-2149336458.jpg?w=2000'}/></div>  
           <div><img  className="sliderimg" src= {'https://img.freepik.com/premium-vector/fashion-sale-social-media-facebook-cover-instagram-cover-web-banner-design-template_445252-36.jpg?w=2000'}/></div>  
           <div><img  className="sliderimg" src= {'https://img.freepik.com/free-vector/flat-shopping-center-social-media-cover-template_23-2149320097.jpg?w=2000'}/></div>  
            
      </OwlCarousel>  
      </div>  
  
      </div>  
    
    
    </>
  )
}

export default ImageSlider