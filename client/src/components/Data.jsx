import { getData } from '../services';
import { useState, useEffect } from 'react'
import './Data.css'



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
        <div className='page'>
            {data.map((dat) => {
                return (
                    <div className='row'>
                        <div className='about'><span id='aboutMe'>About Me</span><br/>{dat.fields.about}</div>  
                        <div className='column'>
                            <div className='container'>
                                <img className='pic' src={dat.fields.pic} alt={dat.fields.name} />
                                <div id='title'><p>{dat.fields.title}</p></div>
                                <div className='info'>
                                <p>{dat.fields.name}</p>
                                <p>{dat.fields.email}</p>
                                <p>{dat.fields.phone}</p>
                                <p>{dat.fields.address}</p>
                                </div>
                            </div>
                        </div>
                        <div className='column'>
                            
                            <div className='skills-card'>
                                <div className='skills'><span id='sk'>Skills</span></div>
                                <p>
                                    <span id='f'>Frontend Development</span>
                                    <br/>
                                {dat.fields.frontend}</p>
                                
                                <p>
                                    <span id='f'>Backend Development</span>
                                    <br/>
                                {dat.fields.backend}</p>
                                <p>
                                    <span id='f'>API Development</span>
                                    <br/>
                                    {dat.fields.api}</p>
                                
                            </div>
                        </div>
                        <div>
                            <h1>Projects</h1>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
