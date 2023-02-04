import React ,{useState} from 'react'
import { useEffect } from 'react'
import FullHeart from "../../img/heart.png"
import EmptyHeart from "../../img/heart0.png"
const Liked =() => {

    const [liked, setLike] = useState(false)
    

    const img = liked ? FullHeart : EmptyHeart;

     
return(

    <button onClick={() => setLike(!liked)} style={{marginTop :"20px", backgroundColor :"transparent", border :"none"}}>
        
        <img src = {img} style={{width :"25px", height :"25px", opacity :"0.7", border : "none", marginTop:"-0px", zIndex :"3000"}}></img>
        
    </button>
)
   
}
export default Liked;