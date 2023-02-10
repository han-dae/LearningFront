import axios from "axios";

const USER_API_BASE_URL = "https://3.35.132.238:8080/users/users";
const TEST_API_BASE_URL = "https://3.35.132.238:8080/users/test";
const GUIDE_API_BASE_URL = "https://3.35.132.238:8080/users/guide";
const COMMENT_API_BASE_URL = "https://3.35.132.238:8080/users/comment";
const TFIDF_API_BASE_URL = "https://3.35.132.238:8080/users/tfidf";
const STT_API_BASE_URL = "https://3.35.132.238:8080/users/sttchart";
const RECOMMEND_API_BASE_URL = "https://3.35.132.238:8080/users/recommend"
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

  review(guide_seq){
    console.log("review axios",guide_seq);
    return axios.post(STT_API_BASE_URL + "/", guide_seq);
  }
 
  comment(comment){
    console.log(comment.cmt_content+'박상현메롱')
    console.log(COMMENT_API_BASE_URL+"/");
    return axios.post(COMMENT_API_BASE_URL + "/", comment);
  }
  showComment(test_seq){
    console.log("쇼코멘트 api 이동 ",COMMENT_API_BASE_URL + "/" + test_seq);
    
    return axios.get(COMMENT_API_BASE_URL + "/" +test_seq);
  }

  recommendADD(test_seq_id){
    console.log('api 들어옴 좋아요 넣을거야')
    return axios.post(RECOMMEND_API_BASE_URL+"/add",test_seq_id);
  }

  recommendDelete(test_seq_id){
    console.log('api 들어옴 좋아요 지울거야')
    return axios.post(RECOMMEND_API_BASE_URL+"/del",test_seq_id);
  }
  
  recommendCheck(test_seq_id){
    console.log('api 들어옴 좋아요 눌렀나 체크할거야')
    return axios.post(RECOMMEND_API_BASE_URL+"/check",test_seq_id);
  }
  loadMyComment(user_id){
    return axios.post(COMMENT_API_BASE_URL + "/comment", user_id);
  }
  commentDelete(cmt_seq){
    return axios.post(COMMENT_API_BASE_URL + "/deleteComment", cmt_seq);
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
 posiBarChart(category_seq){
  console.log("api 이동", category_seq);
  return axios.post(TFIDF_API_BASE_URL + "/barChart", category_seq);
 }
 negaBarChart(category_seq){
  console.log("nega", category_seq);
  return axios.post(TFIDF_API_BASE_URL + "/NegabarChart", category_seq);
 }
}

export default new ApiService();
