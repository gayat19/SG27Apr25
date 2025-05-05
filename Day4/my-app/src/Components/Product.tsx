// import { useEffect } from "react"
import { ProductModel } from "../Models/ProductModel";

type Props ={
    product:ProductModel,
    key:Number
}

export default function Product(args:Props){
    // useEffect(()=>{
    //     console.log(args )
    // });
    return(
        <section>
            <div className="card myCard" >
            <img className="card-img-top" src={args.product.image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{args.product.title}</h5>
                <p className="card-text">{args.product.description}</p>
                <button  className="btn btn-primary">Buy for </button>
            </div>
            </div>
        </section>
    )
}