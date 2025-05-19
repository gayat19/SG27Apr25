import { useDispatch } from "react-redux";
//import { deleteUser } from "../redux/userSlice";

export default function DeleteUser(prop:any){
     // const dispatch = useDispatch();
      const deleteName = ()=>{
            //dispatch(deleteUser(prop.name));
        }
    return(<button onClick={deleteName}>Delete</button>)
}