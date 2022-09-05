import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Switch , BrowserRouter, Link, useParams, useHistory} from 'react-router-dom';

function Details(props){
    const {id} = useParams();
    const history = useHistory();
    const [likes, setLikes] = useState({click: 0,disabled:false})
    const [pet, setPet] = useState({
        Name:"",
        Type:"",
        Desc:"",
        Skill1:"",
        Skill2:"",
        Skill3:"",
    });

    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/"+ id)
            .then(response => {
                console.log(response.data.pet)
                setPet(response.data.pet);
            });
    }, [])
    const handleLikes = (e) => {
        setLikes({ click: likes.click + 1,disabled : true})
        
    }
    const handleDelete = (pet) => {
        axios.delete("http://localhost:8000/api/pet/delete/"+ pet._id).then(res => {
            history.push('/')
      })
    }
    return (
        <div className='container mt-5'>
            <h1>Pet Shelter</h1>&nbsp; <span> <Link to={`/`}>Back to home</Link> </span>
            <h3>Details about: {pet.Name}</h3>
            <span><button className='btn btn-danger' onClick={(e) => handleDelete(pet)}>Adopt {pet.Name}</button></span>
            <div className='mt-5 border border-dark'>
                <p>Name: {pet.Name}</p>
                <p>Type: {pet.Type}</p>
                <p>Description: {pet.Desc}</p>
                <p>Skills: {pet.Skill1}<br></br> {pet.Skill2}<br></br> {pet.Skill3}</p>
                <br></br>
                <button className='btn btn-success' disabled={likes.disabled} onClick={(e) => handleLikes()}>Like {pet.Name}</button> 
                <p>{likes.click} like(s)</p>

            </div>
        </div>
    )
}

export default Details;