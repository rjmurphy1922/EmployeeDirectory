import React from 'react'
import Header from "./components/Header";
import Body from "./components/Body";
import Search from "./components/Search";


class App extends React.Component {

  state = {
    users: [
   
  //  {
  //    "results": [
{
     "gender": "female",
     "name": {
     "title": "Mrs",
     "first": "Tracy",
     "last": "James"
     },
     "location": {
     "street": {
     "number": 717,
     "name": "Springfield Road"
     },
     "city": "Stirling",
     "state": "Cambridgeshire",
     "country": "United Kingdom",
     "postcode": "SD75 1PB",
     "coordinates": {
     "latitude": "10.3911",
     "longitude": "122.6415"
     },
     "timezone": {
     "offset": "-6:00",
     "description": "Central Time (US & Canada), Mexico City"
     }
     },
     "email": "tracy.james@example.com",
     "login": {
     "uuid": "f7831cd1-e90c-4704-aec7-f8089e886285",
     "username": "heavywolf556",
     "password": "sesame",
     "salt": "KaVCbqx5",
     "md5": "3ff173c07b49a4b951782d5ed2c67c0d",
     "sha1": "4ed386777aa8967aec8a934eacd1a0c0e28a7238",
     "sha256": "1db94b0d234864985526056784dc89cac8e608497c32b2ff8cc22cccfdf321c1"
     },
     "dob": {
     "date": "1946-11-15T21:39:47.969Z",
     "age": 75
     },
     "registered": {
     "date": "2011-09-18T22:41:54.585Z",
     "age": 10
     },
     "phone": "016977 67659",
     "cell": "0705-919-257",
     "id": {
     "name": "NINO",
     "value": "MN 18 18 75 F"
     },
     "picture": {
     "large": "https://randomuser.me/api/portraits/women/58.jpg",
     "medium": "https://randomuser.me/api/portraits/med/women/58.jpg",
     "thumbnail": "https://randomuser.me/api/portraits/thumb/women/58.jpg"
     },
    //  "nat": "GB"
     
     
     "info": {
     "seed": "8861747a78980586",
     "results": 1,
     "page": 1,
     "version": "1.3"
     }
   }
    ]}





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

