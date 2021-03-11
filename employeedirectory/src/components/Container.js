import React from 'react'
import Body from "./Body"
import API from "../utils/API"





class Container extends React.Component {

  state = {
    users: [],
    search: ""
  }
  
  componentDidMount(){
    this.searchEmployees("")
  }

  searchEmployees = () => {
    API.searchEmployees(25)
    .then(res => {
      console.log(res);
      this.setState({ users: res.data.results })
      console.log(this.state.users)
    })
    .catch(err => console.log(err));
    
  }





  
  render(){
    return (
        <div className Container>
            <Body data={this.state.data.name}/>
          </div>
      )
    }
  }
  
  export default Container;
