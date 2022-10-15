import React, {useEffect, useState} from "react";
import axios from "axios";
import './Components/Curriculum.css';

const JsonData = () =>{
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
        <br/>

        <div className="row">
            <div className="column">
                <h2 className='hr'>// PROFILE</h2>
                <p>{m.profile}</p>
            </div>
                            
            <div className="column">
                <h2 className='hr'>// EXPERIENCE</h2>
                <h2 className='subtitle'>{m.company}</h2>
                <h3>{m.position}</h3>
                <h3>Duration: {m.duration}</h3>
                <p>{m.experience}</p>
            </div>
        </div>

        <div className='row'>
            <div className="column">

                <h2 className='hr'>// SPECIFIC TECHNOLOGIES AND PROFICIENCY LEVEL</h2>
                <h3 className='subtitle'>- Programming languages</h3>
                <p className='subtitle'>{m.langTime}</p>
                <h4>{m.languages}</h4>
                <h3 className='subtitle'>- Databases</h3>
                <p className='subtitle'>{m.dbTime}</p>
                <h4>{m.databases}</h4>
                <h3 className='subtitle'>- Development tools</h3>
                <p className='subtitle'>{m.devtTime}</p>
                <h4>{m.devtools}</h4>
            </div>
                            
            <div className="column">
                <h2 className='hr'>// DEGREE</h2>
                <p>{m.degrees}</p>
            </div>
        </div>
    </div>
    ))}
  </>)

}

export default JsonData;