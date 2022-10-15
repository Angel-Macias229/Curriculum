import React, {useEffect, useState} from "react";
import axios from "axios";
import './Curriculum.css';

const UsersList = () =>{
  const [data, setData] = useState([]);

  const getData = async () =>{
    try {
      const addedData = await
      axios.get("http://localhost:3000/users")
      console.log(addedData.data);
      setData(addedData.data.users);
    }catch(err){
      console.error(err.message);
    }
  };
  useEffect(() => {
    getData()

    const interval=setInterval(() =>{
      getData()
    },10000)

    return()=>clearInterval(interval)

  },[])


  return(
  <>
    {data.map((m) => (
    <div className="CV">
        <h1 className="username">{m.username}</h1>
    </div>
    ))}
  </>)

}

export default UsersList;