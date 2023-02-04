import React ,{useState} from 'react'
import { useEffect } from 'react'
import FullHeart from "../../img/heart.png"
import EmptyHeart from "../../img/heart0.png"
import ApiService from '../ApiService'
const Liked =() => {

    const [liked, setLike] = useState(false)
    

    const img = liked ? FullHeart : EmptyHeart;

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

    <button onClick={() => setLike(!liked)} style={{marginTop :"20px", backgroundColor :"transparent", border :"none"}}>
        
        <img src = {img} style={{width :"25px", height :"25px", opacity :"0.7", border : "none", marginTop:"-0px", zIndex :"3000"}}></img>
        
    </button>
)
   
}
export default Liked;