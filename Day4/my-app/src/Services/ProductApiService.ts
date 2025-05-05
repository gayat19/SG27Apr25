import axios from "axios";

export function getProducts():Promise<any>{
    return axios.get("https://fakestoreapi.com/products");
}