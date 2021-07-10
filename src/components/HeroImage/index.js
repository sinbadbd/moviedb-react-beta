import React from 'react';

 
const HeroImage = ({image, title, text}) => {
    return (
       <div className="img-fluid position-relative" 
            style={{ backgroundImage: `url(${image})`, repeat: false ,height:'50vh' , backgroundSize: 'cover'}}>  
          <div className="position-absolute top-50 start-50 translate-middle">
            <h1 className="text-white">{title}</h1>
           <p className="text-white">{text}</p>
          </div>
       </div>
    )
}

export default HeroImage;