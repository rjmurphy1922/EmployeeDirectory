import React, {Component} from "react";
import Header from "./Header";
import Users from ".components/Body";
import Search from "./Search";
import API from "../utils/API";



// class Container extends Component {

//     state = {

//         results: {},
//         search: ""
//     };

    

// componentDidMount = () => {
//     API.search()
//     .then(res => {
//         const newEmployee = res.data.results;
//         const employeeArray = []

//     for(let i = 0; i < newEmployee.length; i++){
//          const info = {
            
//          }
         
//          }





// searchEmployees = query => {
//     API.search()
//     .then(res => this.setState({ result: res.data }))
//     .catch(err => console.log(err));
// };


handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    })}
  

handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
    
};





render(){
    return (
      <div className="container">
          <Header/>
          <Users
              firstName = {this.state.first} 
              lastName = {this.state.last}
              gender ={this.state.gender}
            //   Age = {this.state.dob.age}
              email ={this.state.email}
          />
          <Search value = {this.state.search}/>
         
         
      </div>
    );

}
}
  
    
  

export default Container;
