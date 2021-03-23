import React, {useState} from 'react';
import './App.css';

function App () {
    const [value,setValue] =useState("")
    const [results,setResults] =useState([])
    
    //i_oh4lo3pbmUEZbezfruX9tGdLEfYKNGrbif1_2poDA
    const fetchImages = () =>{
        fetch(`https://api.unsplash.com/search/photos?client_id=i_oh4lo3pbmUEZbezfruX9tGdLEfYKNGrbif1_2poDA&query=${value}&orientation=squarish`)
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            setResults(data.results)
        })
    }
     return (
            <div className="App">
                <h1 className="h1">Mystargram</h1>
                <div className="mydiv">
              <input 
               style={{width:"65%"}}
               type="text" 
               value={value} 
               onChange={(e)=>setValue(e.target.value)}/>
               <br></br>
               <button class="button button1" onClick={()=>fetchImages()}>Search</button>
                </div>
              <div className="gallery">
               <div>
                 {
                     results.map((item)=>{
                         
                     
                  return <div class="photofile-container">
                  <img src={item.urls.regular} alt="" class="photofile" />
                  {item.user.username}
                  {item.likes}
                  {item.alt_description}
                 </div>
})
}
                </div>
            </div>
          </div>
        );
    }
    
export default App;
