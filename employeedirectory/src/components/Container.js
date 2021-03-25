import React from 'react'

function Container({key, firstName, lastName, image}){

return(

  <li key={key}>
       {`${firstName} ${lastName}`}
       <img src ={image} alt = "image"/>
      </li>
      
      
)
}

  export default Container

