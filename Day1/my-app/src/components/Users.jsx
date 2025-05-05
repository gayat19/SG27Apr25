import { useEffect, useState } from "react";

import { getUsers } from "../services/ProductApiCall";
import MapComp from "./MapComp";

export default function Users(){

    const [users,setUsers] = useState([])
    useEffect(()=>{
        getUsers()
        .then((userData)=>{
            if(userData.status==200)
                setUsers(userData.data)
        })
    })
    return(
        <div className="flex flex-wrap justify-center gap-6 p-6">
        {users.length > 0 &&
          users.map((user) => (
            <div
              key={user.id}
              className="w-80 border rounded-lg shadow-md p-4 bg-white hover:scale-105 transition-transform"
            >
              {/* Map section */}
              <div className="h-40 w-full mb-2 rounded overflow-hidden">
                <MapComp
                  lat={user.address.geolocation.lat}
                  long={user.address.geolocation.long}
                />
              </div>
    
              {/* User info */}
              <div className="text-sm">
                <div className="font-semibold">Username: {user.username}</div>
                <div>
                  Name: {user.name.firstname} {user.name.lastname}
                </div>
              </div>
            </div>
          ))}
      </div>
    )
}