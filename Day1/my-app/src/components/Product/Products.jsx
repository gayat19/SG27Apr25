import { useEffect, useState } from 'react';
import {StyledCard,StyledContainer} from '../../mis/StyledComponents'
import { getProducts } from '../../services/ProductApiCall';
import Product from '../Product';
 const Products =()=>{
    // const products = [
    //     {id:101,title:"Product1",price:200},
    //     {id:102,title:"Product2",price:150},
    //     {id:103,title:"Product3",price:210},
    // ];
    const [products,setProducts] = useState([])
    const [count,setCount] = useState(0)
    useEffect(()=>{
        getProducts().
        then((result)=>{
            if(result.status==200)
            {
                setProducts(result.data)
            }
                
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
    const handleLikeCount =(status)=>{
        if(status)
            setCount(count+1)
        else    
            setCount(count-1)
    }
    return(
        <StyledContainer>
            <p> Number of liked products - {count}</p>
            {
                products.length>0?
                products.map((product)=>
                    <Product key={product.id} prod={product} onChangeLike={handleLikeCount}/>
                ):<div className="spinner-border text-success" role="status"></div>
            }
           
        </StyledContainer>
    );
}

export default Products;