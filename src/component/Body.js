import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';
const Body = () => {
  const[data,setdata]=useState([])
    
      async function myfunction(){

      
      try {
          const response = await axios.request("https://api.unsplash.com/photos/?client_id=oWE1E5b4kNNHZoy0f1lvMbmzm5__MItcAwQFJKTNY0c");
          setdata(response.data)
         
      } catch (error) {
          console.error(error);
      }
    }
    console.log(data)
    useEffect(()=>{
        myfunction()
    },[])

  return (
    
    <div style={{display:"flex",flexDirection:"row", flexWrap:"wrap", position:"relative" }}>
{data.map((e)=>{
    return(
       <div key={e.id} style={{width:"20%", height:"20vw" , margin:"6%", textAlign:"center"}}>
            <img src={e.urls.raw} alt="img" style={{width:"100%",height:"100%", borderRadius:"20px"}}></img>
            <p style={{fontSize:"20px",textDecoration:"underLine"}}>{e.alt_description}</p>
            
        </div>
       
    )

})}
    </div>
  )
}

export default Body