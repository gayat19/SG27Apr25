
import {  useSelector } from "react-redux"
import DeleteUser from "./DeleteUser"


export default function User(){
    const names = useSelector((state:any)=>{return state.users}) 

    return (<section>
        
        {
            (names as any).map((name:string,index:any)=><li key={index}>{name}<DeleteUser name={name}/></li>)
           
        }
    </section>)
}