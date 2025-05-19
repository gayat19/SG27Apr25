import { useDispatch } from "react-redux"
//import { addUser } from "../redux/userSlice";
import { useState } from "react";

export default function AddUser(){
        const [newName,setNewName] = useState("");
    const dispatch = useDispatch();
    const addName = ()=>{
        //dispatch(addUser(newName as any));
    }
    return(<div>
            <input type="text" value={newName} onChange={(event)=>{setNewName(event.target.value);}}/>
            <button onClick={addName}>Add</button>
        </div>)
}