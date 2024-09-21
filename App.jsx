import { useState } from 'react'
import './App.css'


function App() {
  const images =["https://images.unsplash.com/photo-1515940175183-6798529cb860?q=80&w=1629&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675800005357-364e12c70511?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664803966238-4deaa1d6ad84?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664803966338-0c6fc7214f3a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664803534733-ec2cee267e21?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]
const [currentImage,setCurrentImage]= useState(0);
const handlePrevious=()=>{
  if(currentImage==0)
 { setCurrentImage(images.length-1)}
  else{
    setCurrentImage(currentImage-1)
  }

}
const handleNext=()=>{
  if(currentImage==images.length-1){
    setCurrentImage(0)
  }
  else{
    setCurrentImage(currentImage+1)
  }
 
  
}
  return (
    <>
    <div style={{"display":"flex"}}>
    <button onClick={handlePrevious}>Previous</button>
    <img style={{"width":"500px","height":"auto"}}  src={images[currentImage]} />
    <button onClick={handleNext}>Next</button>
    </div>
     
    </>
  )
}

export default App
