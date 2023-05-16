import {useRef, useState, useEffect, useContext} from 'react';
import AuthContext from '../context/AuthProvider';
import axios from '../api/axios';
import '../styles/login.css';


const LOGIN_URL = '/user';


export default function Login () {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post(LOGIN_URL, JSON.stringify(email, pwd), {
                headers: { 'Content-Type': 'application/json'},
                withCredentials: true
            });
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;  
            setAuth({ email, pwd, accessToken});
            setEmail('');
            setPwd('');
        } catch (err){
            if(!err?.response){
                setErrMsg("No server response");
            } else if(err.response?.status === 400){
                setErrMsg("Missing Email or Password");
            } else if(err.response?.status === 404){
                setErrMsg("Unauthorized");
            } else {
                setErrMsg("Login Failed")
            }
            errRef.current.focus();
        }
    }

  return (
    <div className='loginSec' >
        <p ref={errRef} className={errMsg ? "errmsg" : 
        "offscreen"} aria-live='assertive'>{errMsg}</p>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit} className='loginSecForm'>
            <label htmlFor='email'>Email:</label>
            <input 
                type='text'
                id='email'
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                />

    <label htmlFor='password'>Password:</label>
            <input 
                type='password'
                id='password'
                autoComplete='off'
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                />
                <button style={{marginTop: 5}}>Sign In</button>
        </form>
        <p>
            Need an Account?
            <span className='line' style={{marginLeft: 5}}>
                <a href='/create'>Sign Up</a>
            </span>
        </p>
    </div>
  )
};