import React from 'react'

function Container({key, firstName, lastName, image}){

return(

  <table className="table table-striped">
  <thead>
    <tr>
      {/* <th scope="col">#</th> */}
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      {/* <th scope="row">1</th> */}
      <td key ={key}>{`${firstName}`}</td>
      <td key ={key}>{`${lastName}`}</td>
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



  //   <li key={key}>
//        {`${firstName} ${lastName}`}
//        <img src ={image} alt = "image"/>
//       </li>
      
      
// )
// }