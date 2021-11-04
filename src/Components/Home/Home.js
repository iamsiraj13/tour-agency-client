import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    const [allPakages,setAllPakage] = useState([]);
   

    useEffect(() => {
        fetch('http://localhost:5000/allPakage')
            .then(res => res.json())
            .then(data => setAllPakage(data))
            
    }, []) 
    return (
        <div className="container">
            <div className="row py-5 ">
                {
                    allPakages.map(allPakage => <div key={allPakage._id} className="col-md-4 mb-4">
                        <div className="box p-3 shadow">
                            <img className="img-fluid" src={allPakage.photoUrl} alt="" />
                            <h2>{allPakage.name}</h2>
                            <p>{allPakage.descriptioni}</p>
                            <Link to={`/placeOrder/${allPakage._id}`}><button className="btn btn-outline-dark btn-sm">Book Now</button></Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;