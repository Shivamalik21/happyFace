import React from 'react'
import {useState} from 'react'

import axios from 'axios';

const Navbar = () => {
  const[text,settext]=useState("")
  const[data,setdata]=useState([])
    
  async function myfunction(){

  
  try {
      const response = await axios.request(`https://api.unsplash.com/search/photos?page=1&query=${text}&&client_id=oWE1E5b4kNNHZoy0f1lvMbmzm5__MItcAwQFJKTNY0c`);
     setdata(response.data)
      
     
  } catch (error) {
      console.error(error);
  }
}

 return (
    <div>
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
      <div>
        <input placeholder='Search' style={{width:"40vw", height:"6vh",borderRadius:"50px", backgroundColor:"lightgray", border:"none", paddingLeft:"2vw"}} onChange={(e)=>{
         settext(e.target.value)
        }}></input>
        <button style={{width:"8vw", marginLeft:"2vw", height:"2.5vw", borderRadius:"50px", color:"white", backgroundColor:"orange", border:"none"}} onClick={()=>{
          myfunction()
        }}>Search</button>
        </div>
        <ul style={{display:"flex", gap:"5vw",listStyle:"none", }}>
            <li>Explore</li>
            <li>Advertise</li>
            <li>Unsplash+</li>
           </ul>
           </div>
           <hr></hr>
           <div style={{display:"flex",flexDirection:"row", flexWrap:"wrap", }}>
       {data.map((e)=>{
    return(
       <div key={e.id} style={{width:"20%", height:"20vw" , margin:"6%", textAlign:"center", marginLeft:"7%"}}>
            <img src={e.urls.raw} alt="img" style={{width:"100%",height:"100%", borderRadius:"20px"}}></img>
            <p style={{fontSize:"20px",textDecoration:"underLine"}}>{e.alt_description}</p>
            
        </div>
       
    )

})}
    </div>
    </div>
  )
}

export default Navbar