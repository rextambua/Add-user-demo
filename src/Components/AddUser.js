import React, {useState} from "react";
import classes from "./AddUser.module.css";


function AddUser(props){
    const [userName, setUserName] = useState('Jack')
    const [age, setAge] = useState('10')

    const userNamehandler = (event) => {
        setUserName(event.target.value)
    }
    const agehandler = (event) => {
        setAge(event.target.value)
    }

    const formSubmitHandler =(event)=>{
        event.preventDefault()
        if(userName.trim().length === 0 || age.trim().length ===0 ) {
            return
        }
        if( +age<1 ) {
            return
        }
        props.onSaveData(userName, +age)
        setUserName('')
            setAge('')
    }

    return (
        <div className={classes.input}>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor='userName'> UserName</label>
                    <input onChange={userNamehandler} value={userName} type='text' id='userName' name='userName'/>
                    <label htmlFor='age'> Age(Years) </label>
                    <input onChange={agehandler} value={age} type='number' id='age' name='age'/>
                </div>
                <button type='submit'> Add User</button>
            </form>
        </div>
    )
}

export default AddUser;