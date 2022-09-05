import React from 'react'
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom'


const ListPets = (props) =>{
    const [petsList, setPetsList] = React.useState([])
    const [isLoaded, setLoaded] = React.useState(false);
    const history = useHistory();

    React.useEffect(()=> {
        axios.get("http://localhost:8000/api/pet").then((res) =>{
            setTimeout(() => {
                console.log(res.data.pets)
                setPetsList(res.data.pets);
                // .sort((a, b) => a.title.localeCompare(b.title))
                setLoaded(true);
                // history.push('/');
               
            }, 1000);
        })
    },[isLoaded]);

    // const handleDelete = (pet) => {
    //     axios.delete("http://localhost:8000/api/pet/delete/"+ pet._id).then(res => {
    //         setPetsList(petsList.filter((p) => p.id !== pet.id));
    //         setLoaded(false)
    //   })
    // }

    return(
        <>
            <h1>Pet Shelter</h1>
            <Link to={`pet/new`}>Add a pet to the shelter</Link>
            <h3>These pets are looking for a good home</h3>
            <table className='table'>
                        <thead>
                            <tr>
                                <th className='col'>Name</th>
                                <th className='col'>Type</th>
                                <th className='col'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                    {petsList.sort((a,b)=>a.type > b.ype ? 1 : -1 ).map((pet, index) => (
                        <tr key={index}>
                            <td className='mb-3'>
                                <div>{pet.Name}</div>
                            </td>
                            <td className='mb-3'>
                                <div>{pet.Type}</div>
                            </td>
                            <td>
                                <button className='btn btn-primary' onClick={(e) => history.push('/pet/detail/' + pet._id)}>Detail</button>&nbsp;
                                <button className='btn btn-primary' onClick={(e) => history.push('/pet/edit/' + pet._id)}>Edit</button>&nbsp;
                            </td>
                        </tr>
                    ))}
                        </tbody>
                    </table>
        </>
    )

}

export default ListPets;