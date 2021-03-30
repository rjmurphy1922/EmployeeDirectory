import React from "react"
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"

function Container({key, firstName, lastName, phoneNumber, age, image, }){

return(

  <table className="table table-striped">
  <thead>
    <tr>
      {/* <th scope="col">#</th> */}
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Age</th>
      <th scope="col">Photograph</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      {/* <th scope="row">1</th> */}
      <td key ={key}>{`${firstName}`}</td>
      <td key ={key}>{`${lastName}`}</td>
      <td key ={key}>{`${phoneNumber}`}</td>
      <td key ={key}>{`${age}`}</td>
      <td><img src ={image} alt = "image"/></td>
      
    </tr>
    {/* <tr>
      <th scope="row">2</th>
      <td key ={key}>{`${lastName}`}</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>



);
}


  export default Container
