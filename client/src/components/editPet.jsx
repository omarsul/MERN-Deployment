import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory, useParams,Link } from "react-router-dom";



const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [desc, setDesc] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');
    const history = useHistory();
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res => {
                setName(res.data.pet.Name);
                setType(res.data.pet.Type);
                setDesc(res.data.pet.Desc);
                setSkill1(res.data.pet.Skill1);
                setSkill2(res.data.pet.Skill2);
                setSkill3(res.data.pet.Skill3);
            })
    }, []);
    
    const updatePet = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pet/update/' + id, {
            Name:name,
            Type:type,
            Desc:desc,
            Skill1:skill1,
            Skill2:skill2,
            Skill3:skill3
        })
            .then(res => {
                history.push('/')
                console.log(res)})
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Pet shelter</h1>
            <span><Link to={`/`}>Back to home</Link></span>
            <h3>Edit {name}</h3>
            <form onSubmit={updatePet}>
                <p>
                    <label>Name:</label><br />
                    <input type="text" 
                    name="Name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <p>
                    <label>Type:</label><br />
                    <input type="text" 
                    name="Type" 
                    value={type} 
                    onChange={(e) => { setType(e.target.value) }} />
                </p>
                <p>
                    <label>Description:</label><br />
                    <input type="text" 
                    name="Desc" 
                    value={desc} 
                    onChange={(e) => { setDesc(e.target.value) }} />
                </p>
                <p>
                    <label>Skill 1:</label><br />
                    <input type="text" 
                    name="Skill1" 
                    value={skill1} 
                    onChange={(e) => { setSkill1(e.target.value) }} />
                </p>
                <p>
                    <label>Skill 2:</label><br />
                    <input type="text" 
                    name="Skill2" 
                    value={skill2} 
                    onChange={(e) => { setSkill2(e.target.value) }} />
                </p>
                <p>
                    <label>Skill 3:</label><br />
                    <input type="text" 
                    name="Skill3" 
                    value={skill3} 
                    onChange={(e) => { setSkill3(e.target.value) }} />
                </p>
                <button onClick={(e) => history.push('/')}>Cancel</button>&nbsp;
                <input type="submit" /> 
            </form>
        </div>
    )
}
    
export default Update;

