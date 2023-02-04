import React ,{useState} from 'react'
import { useEffect } from 'react'
import FullHeart from "../../img/heart.png"
import EmptyHeart from "../../img/heart0.png"
import ApiService from '../ApiService'
const Liked =({test_seq_id}) => {

    const [liked, setLike] = useState(false)
    const [likeCheck, setLikeCheck] = useState(0)

    ApiService.recommendCheck(test_seq_id)
    .then((res)=>{
        console.log("좋아요체크 : ", res.data);
        setLikeCheck(res.data);
    })
    .catch((err) => {
        console.log("recoCheck() 에러", err);
    });

    console.log("라잌쳌 들어갓나", likeCheck);
    const img = likeCheck == 1 ? FullHeart : EmptyHeart;
    console.log("넘어오나", test_seq_id.test_seq, test_seq_id.user_id);
    const addDel = () => {
        likeCheck == 1 ? ApiService.recommendDelete(test_seq_id)
            .then((res)=>{
            console.log("좋아요 삭제 됨");
            setLikeCheck(0);
        })
        .catch((err) => {
            console.log("recoCheck() 에러", err);
        }) : ApiService.recommendADD(test_seq_id).then((res)=>{
            console.log("좋아요 추가 됨");
            setLikeCheck(1);
        })
        .catch((err) => {
            console.log("recoCheck() 에러", err);
        })
    }
    // LikeCheck 1일 때 온클릭하면 좋아요 삭제, 0일 때 온클릭하면 좋아요 추가

    // const LikeTest=()=>{
    //     liked ? 
    //     ApiService.showComment(test_seq)
    //     .then((res) => {
    //         console.log("좋아요 갯수를 늘려!");
    //         console.log();
            
    //     })
    //     .catch((err) => {
    //         console.log("show() 에러", err);
    //     });
//};
   // }
return(

    <button onClick={addDel} style={{marginTop :"20px", backgroundColor :"transparent", border :"none"}}>
        
        <img src = {img} style={{width :"25px", height :"25px", opacity :"0.7", border : "none", marginTop:"-0px", zIndex :"3000"}}></img>
        
    </button>
)
   
}
export default Liked;