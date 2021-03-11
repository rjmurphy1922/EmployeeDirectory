import React from 'react'
import Header from "./components/Header";
// import Search from "./components/Search";
// import Container from "./components/Body";
import API from "./utils/API"
import Body from "./components/Body"



class App extends React.Component {

  state = {
  users: {},
  search: ""

  }

  componentDidMount(){
    this.searchEmployees()
  }

  searchEmployees = () => {
    API.searchEmployees()
    .then(res => this.setState({ users: res.data }))
    .catch(err => console.log(err));
    
};




  




render(){
  return (
      <div className Container>
          <Header />
          <Body />


      </div>

  )
}
}

export default App;




  



