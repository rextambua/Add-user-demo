import React from "react";
import classes from "./UserList.module.css";


function UserList(props){

    return (
        <div  className={classes.users}>
            <ul>
                {props.users.map((user) => (
                <li key={user.id}>
                    {user.name} ({user.age} years old)
                </li>) )}
            </ul>
        </div>
    )
}

export default UserList;