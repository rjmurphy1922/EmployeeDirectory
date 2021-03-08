
function Body({users}){
    return(

<div class="card" style={{width: "18rem;"}}>
  <img src="..." class="card-img-top" alt="..."></img>
  <div class="card-body"></div>
    {users.map(users => <p class="card-text">
        {users.name.first} 
        {users.name.last}
        {users.name.picture}
        </p> )}
</div>
  

  
  );
    }


    
    
    export default Body;