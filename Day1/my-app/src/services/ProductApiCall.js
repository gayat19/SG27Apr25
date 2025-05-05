import axios from "axios"

export const getProduct=()=>{
   return  fetch("https://fakestoreapi.com/products/1")
}

export const getProducts =()=>{
   return axios.get('https://fakestoreapi.com/products')
}

export const getUsers=()=>{
   return axios.get('https://fakestoreapi.com/users')
}
