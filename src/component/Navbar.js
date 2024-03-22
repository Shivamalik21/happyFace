import React from 'react'
import {useState} from 'react'

const Navbar = ({setvalue}) => {
 const[text,settext]=useState("")
 
    
  async function myfun(){

  
  setvalue(`https://api.unsplash.com/search/photos?page=1&query=${text}&&client_id=oWE1E5b4kNNHZoy0f1lvMbmzm5__MItcAwQFJKTNY0c`)
      
     
  }

 return (
    <div>
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
      <div>
        <input placeholder='Search' style={{width:"40vw", height:"6vh",borderRadius:"50px", backgroundColor:"lightgray", border:"none", paddingLeft:"2vw"}} onChange={(e)=>{
         settext(e.target.value)
        }}></input>
        <button style={{width:"8vw", marginLeft:"2vw", height:"2.5vw", borderRadius:"50px", color:"white", backgroundColor:"orange", border:"none"}} onClick={()=>{
        if(text===""){
          alert("Please input in search")
        }else{
          myfun()
        }
        }}>Search</button>
        </div>
        <ul style={{display:"flex", gap:"5vw",listStyle:"none", }}>
            <li>Explore</li>
            <li>Advertise</li>
            <li>Unsplash+</li>
           </ul>
           </div>
           <hr></hr>
        
    </div>
  )
}

export default Navbar