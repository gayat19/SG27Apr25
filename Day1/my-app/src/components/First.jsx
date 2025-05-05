
import { useState } from "react";
import { getProduct } from "../services/ProductApiCall";
import { Product } from "../models/Product";

export default function First(){

    //var welcomeMsg = "This is my first para";
    const [welcomeMsg,setWelcomeMsg] = useState("This is my first para")
    const [message,setMessage] = useState("I can also have a div inside")
    const [product,setProduct] = useState(new Product());
    const changeMsg = ()=>{
        
        setWelcomeMsg("Changed when button clicked");   
        setMessage("We have changed the div as well")
        getProduct()
        .then((data)=>{
            return data.json()
           })
           .then((json)=>{
              setProduct(json)
           })
    }

    
    return(
      <section>
        <p>
            {/* interpollation */}
            {welcomeMsg}
        </p>
        {
            product.id!=0?<img src={product.image} height="200" width="200"/>:"image coming up"
        }
        <div>
            {product?.title}
        </div>
        <hr/>
        <div>
            {
                product.id!=0?product.title:"Product yet to loaded"
            }
        </div>
        <button onClick={changeMsg}>Click to change</button>
      </section>
    );

}