import React, {useState} from "react";
import classes from "./AddUser.module.css";

const formSubmitHandler =(event)=>{
    event.preventDefault()
}

function AddUser(){
    return (
        <div className={classes.input}>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label for='userName'> UserName</label>
                    <input type='text' id='userName' name='userName'/>
                </div>
                <div>
                    <label htmlFor='age'> Age(Years) </label>
                    <input type='number' id='age' name='age'/>
                </div>
                <button type='submit'> Add User</button>
            </form>
        </div>
    )
}

export default AddUser;