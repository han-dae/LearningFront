import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8081/users/users";

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
    return axios.put(USER_API_BASE_URL + "/" + user.id, user);
  }
  loginUser(user) {
    return axios.post(USER_API_BASE_URL + "/" + user.id, user.pw)
  }
}
export default new ApiService();
