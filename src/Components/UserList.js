import React from "react";
import classes from "./UserList.module.css";
import Card from "./Card";


function UserList(props){

    return (
        <div >
        <div className={classes.title}>
            <h1>Users</h1></div>
        <Card  className={classes.users}>

            <ul>
                {props.users.map((user) => (
                <li key={user.id}>
                    {user.name} ({user.age} years old)
                </li>) )}
            </ul>
        </Card>
        </div>
    )
}

export default UserList;