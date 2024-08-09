import {Link} from 'react-router-dom';

import {useContext} from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";

function Menu(){

  const {user,logout} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/Login');
  }

    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme="dark" >
  <div className="container-fluid" >
    <Link className="navbar-brand" to="/Home">Library</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link active" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Songs-List</Link>
        </li>


        {user ?.role === 'admin' && (
         
        <li className="nav-item">
          <Link className="nav-link" to="/addsongs">Add-Songs</Link>
        </li>
         
        )}
        <li className="nav-item">
          <Link className="nav-link" to="/addsongs">Add-Songs</Link>
        </li>
        

        <li className="nav-item">
          <Link className="nav-link" to="About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Blog">Blog</Link>
        </li>


        { !user ? (
          <>
        <li className="nav-item">
          <Link className="nav-link" to="/Register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/Login">Login</Link>
        </li>
          </>
        ):(
      
        
        <li className="nav-item">
          <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
        </li>
       )

        }
  

        
      </ul>
    </div>
  </div>
</nav>

        </>
    )
}

export default Menu;