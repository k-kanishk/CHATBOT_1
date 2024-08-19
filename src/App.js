import axios from "axios";
import { useState } from "react";
import "./App.css"
function App() {

    const [count,setcount] = useState("");

    const [answer,setanswer]=useState("");

    async function generate() { 
setanswer("Loading your response...");
      const response= await  axios({
            url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB5RwyMKT6qNJhxjHcWIm4CuFp73lE7MNk",
            method:"post",
            data : 
                {contents:[
                    {parts:[{text:count}]}]}
            
       
        })

setanswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
     }
    return (
      <div className="App">
      <h1 className="heading">CHATBOT</h1>
      
      <textarea rows={10} cols={30} className="area" value={count} onChange={(e)=>setcount(e.target.value)}></textarea>

<button className="bt" onClick={generate}> Generate Response</button>
<br/>
<p> {answer} </p>
      </div>
    );
  }
  
  export default App;