
function Body({users}){
    return(

<div class="card" style={{width: "18rem;"}}>
  {/* <img src={props.src} className="card-img-top" alt={props.Title}></img> */}
    <h4>Name:{users.name.first} {users.name.last}</h4>
    <h4>Gender:{users.name,gender}</h4>
    {/* <h4>Age:{props.dob.age}</h4> */}
    <h4>Email:{users.email}</h4>

  
 </div>
  

  
  );
    }


    
    
    export default Body;