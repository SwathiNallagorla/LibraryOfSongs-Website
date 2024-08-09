
import { useEffect , useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Librarylist(){
    const [songs , setSongs] = useState([]);
    const navigate=useNavigate();


    useEffect(()=> {
       fetchSongs()
    },[])

    function fetchSongs(){
        axios.get('http://localhost:5000/songs/')
        .then(response=>{
            setSongs(response.data);
        })
        .catch(error=>{
            console.log('There was an error fetching the Songs data!',error);
        })
    }


    function handleDelete(id){
        axios.delete(`http://localhost:5000/songs/${id}`)
        .then(()=>{
            fetchSongs();
        })
        .catch(error=>{
            console.log('There was an error deleting the Songs data!',error);
        })
    }


    return(
        <>
             <div >
        <div >
            <h2 className=" text-center border-bottom mb-5"  >Songs List</h2>
            <div className="row"  >
                {songs.map(song => (
                    <div className="col-md-4" key={song.id}>
                        <div className="card mb-5" style={{backgroundImage:'url("https://images.pexels.com/photos/163185/old-retro-antique-vintage-163185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'}}>
                            <img src={song.image} className="card-img-top" height={250} alt={song.name}/>
                            <img src={"https://www.shutterstock.com/shutterstock/videos/3444869925/thumb/1.jpg?ip=x480"}  height={160} alt={song.name}/>
                            <div className="card-body"  style={{width:"18rem"}}>
                                <h5 className="card-title" style={{color:"white"}}>{song.name}</h5>
                                <p className="card-text" style={{color:"white"}}>Singer : {song.singer}</p>
                                <p className="card-text" style={{color:"white"}}>MusicDirector : {song.musicDirector} </p>
                                <p className="card-text" style={{color:"white"}}>ReleaseDate: {song.releaseDate} </p>
                                <p className="card-text" style={{color:"white"}}>Album: { song.album} </p>

                                
                                <button className="btn btn-danger me-2" onClick={()=>{handleDelete(song.id)}}>Delete</button>
                                <button className="btn btn-primary me-2" onClick={()=>{navigate(`/updatesong/${song.id}`)}}>Update</button>


                            </div>
                        </div>


                    </div>


                ))}
            </div>


        </div>
        </div>

        </>
    )
}

export default Librarylist;