import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8081/users/users";
const TEST_API_BASE_URL = "http://localhost:8081/users/test";
const GUIDE_API_BASE_URL = "http://localhost:8081/users/guide";
const COMMENT_API_BASE_URL = "http://localhost:8081/users/comment";
const TFIDF_API_BASE_URL = "http://localhost:8081/users/tfidf";
const STT_API_BASE_URL = "http://localhost:8081/users/stt";
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
    return axios.get(GUIDE_API_BASE_URL+"/");
  }

  review(){
    return axios.post(GUIDE_API_BASE_URL + "/review");
  }
  stt(){
    return axios.get(STT_API_BASE_URL);
  }
  likeselect(){
    return axios.post(TEST_API_BASE_URL + "/likeselect");
  }
  // sendComment(value) {
  //   return axios.get(COMMENT_API_BASE_URL);
  // }
  comment(comment){
    console.log(comment.cmt_content+'박상현메롱')
    console.log(COMMENT_API_BASE_URL+"/");
    return axios.post(COMMENT_API_BASE_URL + "/", comment);
  }
  showComment(test_seq){
    console.log("쇼코멘트 api 이동 ",COMMENT_API_BASE_URL + "/" + test_seq);
    
    return axios.get(COMMENT_API_BASE_URL + "/" +test_seq);
  }
  review(){
    return axios.get(TFIDF_API_BASE_URL + "/review");
  }
 


  loadTest(){
    return axios.get(TEST_API_BASE_URL);
  }
  loadMyTest(user_id) {
    console.log(TEST_API_BASE_URL + "/Mypage");
    console.log(user_id);

    console.log(typeof(user_id));
    return axios.post(TEST_API_BASE_URL + "/Mypage", user_id);
  }
  detailTest(test_seq) {
    console.log("api 이동 ",TEST_API_BASE_URL + "/" + test_seq);
    return axios.get(TEST_API_BASE_URL + "/" + test_seq);
  }
  
}

export default new ApiService();
