import React from 'react'
import Header from "./components/Header";
import Body from "./components/Body";
import Search from "./components/Search";


class Container extends React.Component {

componentDidMount() {
    this.searchEmployees("John Smith")
}

}

render(){
    return (
      <div className="container">
          <Header />
          <Search />
          <Body users = {this.state.users} />
         
      </div>
    );
  
  }
  
  }
    
  
  export default App;