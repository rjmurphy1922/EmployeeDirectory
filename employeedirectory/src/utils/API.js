import axios from "axios";
const BASEURL = "https://randomuser.me/api/";

const API = {

  search: function(numberUsers) {
    return axios.get(BASEURL + `?results=${numberUsers}`);
  
  }
};
export default API 