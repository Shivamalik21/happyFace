import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';
const Body = ({value}) => {
  const[data,setdata]=useState([])
    
      async function myfunction(){
 try {
          const response = await axios.request(value);
         if(response.data.results){
          setdata(response.data.results)
         }else{
          setdata(response.data)
         }
         
      } catch (error) {
          console.error(error);
      }
    }
   
    useEffect(()=>{
        myfunction()
    },[value])

  return (
    
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
  )
}

export default Body