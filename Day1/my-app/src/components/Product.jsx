import { useState } from "react"


export default function Product(props){
    const [product,setProduct] = useState(props.product)
    const [like,setLike] = useState(true)
    const [heart,setHeart] = useState('bi bi-heart')
    const handleClick=()=>{
        setLike(!like);
        if(like)
            setHeart('bi bi-heart-fill');
        else
            setHeart('bi bi-heart');
        props.onChangeLike(like);
    }
    return(
        <div>
            <h1> Hello - {props.prod.title} <i className={heart} onClick={handleClick}></i></h1>
            
        </div>
    )
}