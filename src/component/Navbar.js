import React from 'react'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
        <input style={{width:"40vw", height:"6vh",borderRadius:"50px", backgroundColor:"lightgray", border:"none"}}></input>
        <ul style={{display:"flex", gap:"5vw",listStyle:"none", }}>
            <li>Explore</li>
            <li>Advertise</li>
            <li>Unsplash+</li>
           </ul>
           
    </div>
  )
}

export default Navbar