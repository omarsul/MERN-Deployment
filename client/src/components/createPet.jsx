import React from "react";
import axios from 'axios';
import {useHistory, Link} from 'react-router-dom';
const CreatePet = (props) => {

    // const [title, setTitle] = useState("");
    // const [price, setPrice] = useState("");
    // const [desc, setDesc] = useState("");
    const [pet, setPet]= React.useState({
        Name:"",
        Type:"",
        Desc:"",
        Skill1:"",
        Skill2:"",
        Skill3:"",
    });
    
    const [productCreated, setProductCreated]=React.useState(false)
    const history = useHistory();
    const [errors, setErrors] = React.useState([]);

    const handleChange = (e) => {
        setPet({ ...pet, [e.target.name]: e.target.value });
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        setProductCreated(false)
        setErrors([])
        axios.post("http://localhost:8000/api/pet/new", pet)
            .then( (res) => {
                setProductCreated(true);
                history.push('/')
                // window.location.reload(false);
                console.log(res) 
            })
            .catch( (err) => console.log(err) )
    }

    return (
        <div>
            <div className='container' style={{width:'300px'}}>
            <h1>Pet shelter</h1>
            <div>know a pet needing a home?</div>&nbsp;
            <span><Link to={`/`}>Back to home</Link></span>
                <form className="mb-3" style={{backgroundColor: '#d0d0d0'}} onSubmit={ handleSubmit }>
                    <div className='mb-3 mt-4'>
                        <label className='form-label'>Name:</label>&nbsp;
                        <input className='form-control' style={{width:'250px', marginLeft:'13px'}} type="text" name='Name' onChange={handleChange}></input>
                    </div>
                    <div className='mb-3 mt-4'>
                        <label className='form-label'>Type:</label>&nbsp;
                        <input className='form-control ' style={{width:'250px', marginLeft:'13px'}} type="text" name='Type' onChange={handleChange}></input>
                    </div>
                    <div className='mb-3 mt-4'>
                        <label className='form-label'>Description:</label>&nbsp;
                        <input className='form-control' style={{width:'250px', marginLeft:'13px'}} type="text" name='Desc' onChange={handleChange}></input>
                    </div>
                    <div className='mb-3 mt-4'> skills (optional)<br></br>
                        <label className='form-label'>skill 1:</label>&nbsp;
                        <input className='form-control' style={{width:'250px', marginLeft:'13px'}} type="text" name='Skill1' onChange={handleChange}></input>
                    </div>
                    <div className='mb-3 mt-4'>
                        <label className='form-label'>skill 2:</label>&nbsp;
                        <input className='form-control' style={{width:'250px', marginLeft:'13px'}} type="text" name='Skill2' onChange={handleChange}></input>
                    </div>
                    <div className='mb-3 mt-4'>
                        <label className='form-label'>skill 3:</label>&nbsp;
                        <input className='form-control' style={{width:'250px', marginLeft:'13px'}} type="text" name='Skill3' onChange={handleChange}></input>
                    </div>
                    <button className='btn btn-primary 'style={{width:'100px'}}>create</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePet;

