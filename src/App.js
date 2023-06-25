import React, {useState} from 'react';
import UserList from "./Components/UserList";
import AddUser from "./Components/AddUser";


function App() {
    const [data, setData] = useState([])
    const saveData = (uName, uAge) => {
       setData((prevList)=>{
           return [...prevList, {name:uName, age: uAge, id:Math.random().toString()}];
       })
    }

  return (
    <div>
        <AddUser onSaveData={saveData} />
        <UserList users={data}/>
    </div>
  );
}

export default App;
