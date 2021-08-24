import { useState, useEffect } from 'react';
import { getData } from '../services';


export default function Skills() {
    const[skills, setSkills] = useState([])

useEffect(() => {
    const fetchSkills = async () => {
        const res = await getData();
        // console.log (res)
        setSkills(res)
    }
    fetchSkills();
}, [])

    return (
        <div>
            {skills.map((skill) => {
                return (
                    <div>
                        {skill.fields.skills}
                    </div>
                )
            })}
        </div>
    )
}
