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
   }, [employees])
   console.log(employees.users)
   let people = employees.users
   return(
   <div>
      {people.map((person,key) =>(
        <Container key={key} firstName={person.name.first} />
      ) ) }
   </div>)
 }

 export default Body





