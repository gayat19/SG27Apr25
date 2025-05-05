import { useState } from "react";

const Login = ()=>{
    
    const [username,setUsername] = useState()
    const [password,setPassword] = useState()
    const[user,setUser] = useState({
        username:'',
        password:''
    })

    const handleUserChange = (event)=>{
        if(event.target.name=="username")
            setUser({...user,username:event.target.value})
        else if(event.target.name=="password")
            setUser({...user,password:event.target.value})
    }
    const login =()=>{
        event.preventDefault();
        console.log(user)
    }
    return(
        <section>
            <h2>Login</h2>
            <form style={{width:'40%'}}>
                <label>Username</label>
                <input name="username" className="form-control" placeholder="username"
                onChange={handleUserChange} value={user.username} type="text"/>
                <label>Password</label>
                <input name="password" className="form-control"
                onChange={handleUserChange} value={user.password} type="password"/>
                <button  type ="submit" className="btn btn-success" onClick={login}>Login</button>
            </form>
        </section>
    )
}
export default Login;