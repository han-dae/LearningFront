import React ,{useState} from 'react'
import { useEffect } from 'react'
import FullHeart from "../../img/heart.png"
import EmptyHeart from "../../img/heart0.png"
const Liked =() => {

    const [liked, setLike] = useState(false)
    const img = liked ? FullHeart : EmptyHeart;
return(

    <button onClick={() => setLike(!liked)}>
        
        <img src = {img} style={{width :"25px", height :"25px", opacity :"0.7", border : "none"}}></img>
        <div style={{fontWeight :"bold", fontSize :"10px"}}>좋아요</div>
    </button>
)
   
}
export default Liked;