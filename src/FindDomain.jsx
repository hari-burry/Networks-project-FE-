import { useState , useEffect} from "react";
import './Ip.css';

function FindDomain() {

    const [data , setData] = useState('');
    const [click , setClick ] =useState(false);
    const [ip , setIp ] = useState('');
    const [domain , setDomain] = useState('');
    const [load , setL] = useState(false);

        
      const revlook= ()=>{
            setL(true);
            setDomain('');
            fetch(`http://localhost:3000/lookup?ip=${ip}`)
            .then(
                res => {
                    if(!res.ok){throw new Error('Cant find the given ip in the Database')}
                    setDomain("invalid ip")
                    return res.json();
                })
            .then(data => setDomain(data.name))
            .catch(err => setDomain(err.message))
            .finally(setL(false))

            setClick(false);
        }

    

    return <div className = "Ip">
            <input type="text" onChange = {(e) => setIp(e.target.value)} placeholder = "192.123.123.211"/>
            <button type="button" className="btn btn-primary" onClick = {revlook}>Find Domain</button>
            {load ? <p>loading</p> : <p>{domain}</p>}
    </div>;
}
export default FindDomain;