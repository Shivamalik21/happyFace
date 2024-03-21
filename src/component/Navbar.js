import React from 'react'

const Navbar = () => {
  return (
    <div>
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
      <div>
        <input placeholder='Search' style={{width:"40vw", height:"6vh",borderRadius:"50px", backgroundColor:"lightgray", border:"none", paddingLeft:"2vw"}} onchange></input>
        <button style={{width:"8vw", marginLeft:"2vw", height:"2.5vw", borderRadius:"50px", color:"white", backgroundColor:"orange", border:"none"}}>Search</button>
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