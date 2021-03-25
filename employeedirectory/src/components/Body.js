import React,{useEffect,useState}from 'react'
import Container from "./Container"
import API from "../utils/API"

function Body(){


 
  let [employees, setEmployees] = useState({users:[],search: ""});
 
 
   useEffect(() => {
     API.searchEmployees(25).then(results => {
       setEmployees({
         users: results.data.results,
       });
     });
   }, [])
   console.log(employees.users)
   let people = employees.users
   return(
   <div>
     <ul>
      {people.map((person) =>(
        <Container key={person.login.uuid} firstName={person.name.first} lastName={person.name.last} image={person.picture.large}/>
      )
       )
        }
      </ul>
   </div>)
 }

 export default Body





