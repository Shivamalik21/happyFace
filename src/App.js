
import './App.css';
import Navbar from './component/Navbar';
import Body from './component/Body';
import {useState} from 'react'
function App() {
  const[head,sethead]=useState("Home")
  const[value,setvalue]=useState("https://api.unsplash.com/photos/?client_id=oWE1E5b4kNNHZoy0f1lvMbmzm5__MItcAwQFJKTNY0c")
 
  return (
    <div className="App">
   <Navbar setvalue={setvalue} sethead={sethead} head={head}/>
   <Body value={value} head={head}/>
    </div>
  );
}

export default App;
