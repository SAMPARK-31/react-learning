import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
function MYapp(){
  return(
    <div>
    <h1>custom app</h1>
    
    </div>
  )
}
const user= "nigga"



const reactelement= React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  user
)






const  anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
 <App/>
  
)
