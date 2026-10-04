"use client"
type User = {
    id: number;
    name: string;
    username:string;
    email: string;

}
import { useState } from "react";

export default function FilterUser({ users }: {users: User[] }) {

    const[searchTerm,setSearchTerm] = useState("");

    const filteredUsers = users.filter(User=>{
        return User.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    })
    return(
        <div>
            <input 
            type="text"
            placeholder="SearchUser"
            value={searchTerm}
            onChange={(data)=> setSearchTerm(data.target.value)}/>
            <ul>
                {filteredUsers.map((users:User)=>{
                    return(
                        <li key={users.id}>{users.name}{users.email}</li>
                    )
                })}
            </ul>
        </div>
        
    )
}