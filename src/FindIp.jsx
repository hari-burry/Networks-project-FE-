import './Ip.css';
import { useState , useEffect } from 'react';

function FindIp()
{
    const [domain ,setD] = useState('');
    const [ip ,setIp] = useState('');

       const lookup= ()=>
        {
            setIp('');
            fetch(`http://localhost:3000/lookup?domain=${domain}`)
            .then(res => {
                if(!res.ok){
                    console.log("invalid");
                    setIp("Invalid Domain");
                }
                else{
                console.log(res);
                return res.json();
                }
        })
        .then(data =>{ 
            console.log(data.ip);
            setIp(data.ip)
        })
        .catch(err => err)

        }
        


    return (
    
    <div className = "Ip"> 
        <input placeholder = "google.com" type="text" onChange ={(e) => setD(e.target.value)}/>
        <button type="button" className="btn btn-primary" onClick = {lookup}>Find Ip</button>      
        <p>{ip}</p>
    </div>
    )

}


export default FindIp;