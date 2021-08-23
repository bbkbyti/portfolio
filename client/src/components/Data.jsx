import { getData } from '../services';
import { useState, useEffect } from 'react'



export default function Data() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchInfo = async () => {
            const res = await getData();
            // console.log(res)
            setData(res)
        }
        fetchInfo();
    }, [])


    return (
        <div>
            {data.map((dat) => {
                return (
                    <div>
                        <img src={dat.fields.pic} alt={dat.fields.name}/>
                        <p>{dat.fields.name}</p>
                        <p>{dat.fields.last}</p>
                        <p>{dat.fields.email}</p>
                        <p>{dat.fields.phone}</p>
                        <p>{dat.fields.address}</p>
                    </div>
                )
            })}

        </div>
    )
}
