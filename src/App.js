
import './App.css';
import Navbar from './component/Navbar';
import Body from './component/Body';
import {useState} from 'react'
function App() {
  const[value,setvalue]=useState("https://api.unsplash.com/photos/?client_id=oWE1E5b4kNNHZoy0f1lvMbmzm5__MItcAwQFJKTNY0c")
 
  return (
    <div className="App">
   <Navbar setvalue={setvalue}/>
   <Body value={value}/>
    </div>
  );
}

export default App;
