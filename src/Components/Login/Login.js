import React from 'react'; 
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const url = location?.state?.from || '/' ;
    const {signInUsingGoogle,setUser,setError} = useAuth();

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result => {
            console.log(result.user)
            setUser(result.user)
            history.push(url)
        })
        .catch(error => {
            setError(error.message)
        }) 
    }

    return (
        <div>
            <div className="w-50 mx-auto py-5">
                <h3 className="text-center">--Login With --</h3>
                <div className="text-center">
                <button onClick={handleGoogleLogin} className="btn btn-outline-success mt-3">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;

