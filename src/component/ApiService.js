import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8081/users/users";
const TEST_API_BASE_URL = "http://localhost:8081/users/test";
const GUIDE_API_BASE_URL = "http://localhost:8081/users/guide";
class ApiService {
  fetchUser() {
    return axios.get(USER_API_BASE_URL);
  }
  fetchUserByID(userID) {
    return axios.get(USER_API_BASE_URL + "/" + userID);
  }

  deleteUser(userID, user) {
    return axios.delete(USER_API_BASE_URL + "/" + userID.id,user);
  }
  addUser(user) {
    return axios.post(USER_API_BASE_URL, user);
  }
  editUser(user) {
    return axios.post(USER_API_BASE_URL +  "/users" , user);
  }
  loginUser(userID, userPW) {
    return axios.post(USER_API_BASE_URL + "/" + userID+"&"+ userPW);
  }
  loginConfirm(){
    return axios.get(USER_API_BASE_URL+"/");
  }
  cuesheet(){
    return axios.get(GUIDE_API_BASE_URL);
  }



  loadTest(){
    return axios.get(TEST_API_BASE_URL);
  }
}
export default new ApiService();
