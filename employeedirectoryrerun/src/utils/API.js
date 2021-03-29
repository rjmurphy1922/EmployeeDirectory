import axios from "axios";
const BASEURL = "https://randomuser.me/api/";

const API = {

  searchEmployees: function(numberUsers) {
    return axios.get(BASEURL + `?results=${numberUsers}`);
  
  }
};
export default API 
