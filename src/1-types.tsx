import { useState } from 'react'

import './App.css'


interface AchildComponent{
  title:string,
  body:string,
}

function AchildComponent({title,body}){
  return( <>
  <h1>{title}</h1>
  <p>{body}</p>
  
  
  </>
  );
}

function App() {




  return (
    <div className="App">
      <AchildComponent title="HELLO" body="hello again"  />
    </div>
  )
}

export default App
