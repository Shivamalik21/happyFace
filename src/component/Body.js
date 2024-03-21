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
    useEffect(()=>{
        myfunction()
    },[])

  return (
    <div>
{data.map((e)=>{
    return(
       <div key={e.id} style={{display:"flex",flexWrap:"wrap"}}>
            <img src={e.urls.raw} alt="img"></img>
            <p>{e.slug}</p>
        </div>
       
    )

})}
    </div>
  )
}

export default Body