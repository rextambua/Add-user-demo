import React, {useState} from "react";
import classes from "./AddUser.module.css";
import Card from "./Card";
import Button from "./Button";
import ErrorModal from "./ErrorModal";


function AddUser(props){
    const [userName, setUserName] = useState('Jack')
    const [age, setAge] = useState('10')
    const [error, setError] = useState('')

    const userNamehandler = (event) => {
        setUserName(event.target.value)
    }
    const agehandler = (event) => {
        setAge(event.target.value)
    }

    const formSubmitHandler =(event)=>{
        event.preventDefault()
        if(userName.trim().length === 0 || age.trim().length ===0 ) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            })
            return
        }
        if( +age<1 ) {
            setError({
                title: 'Invalid age',
                message: 'Pplease enter a valid age (>0)'
            })
            return
        }
        props.onSaveData(userName, +age)
        setUserName('')
            setAge('')
    }

    const errorHandler =()=>{
        setError(null)
    }

    return (
        <div>
            {error && <ErrorModal title={ error.title} message={ error.message} onConfirm={errorHandler} onClick={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={formSubmitHandler}>
                    <div>
                        <label htmlFor='userName'> UserName</label>
                        <input onChange={userNamehandler} value={userName} type='text' id='userName' name='userName'/>
                        <label htmlFor='age'> Age(Years) </label>
                        <input onChange={agehandler} value={age} type='number' id='age' name='age'/>
                    </div>
                    <Button type='submit'> Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;