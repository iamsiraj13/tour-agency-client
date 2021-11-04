import React from 'react';
import { Link,useHistory } from 'react-router-dom'; 
import useAuth from '../../Hooks/useAuth';

const Header = () => {

    const propic = { 
        width:'25px',
        borderRadius:'50%',
        border:'3px solid #fff',
        marginRight:'8px'
    };

    const history = useHistory();
    const { logout, user,setUser } = useAuth();

    const handleLogin = () => {
        logout()
            .then(() => {
                setUser({});
                history.push('/')
            }) 
    }
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark text-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Tour Agency</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            { user.email &&
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/manageorder">Manage All Orders</Link>
                            </li> }
                            { user.email &&
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/order">My Order</Link>
                            </li> }
                            { user.email &&
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/addPakage">Add Pakage</Link>
                            </li> }
                            
                            {!user.email &&
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                                </li>
                            }
                            { user.email &&
                            <button className="ms-3 nav-item dropdown btn btn-outline-warning btn-sm">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   {user.email && <span><img style={propic} src={user.photoURL} alt="" /></span>} {user.email && user.displayName}
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {user.email &&
                                        <li><Link className="dropdown-item" to="#" onClick={handleLogin} >Log Out</Link></li>
                                    }
                                </ul>
                            </button>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;