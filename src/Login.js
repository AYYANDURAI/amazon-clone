import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './Firebase';
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            history.push("/");
        }).catch((err) => alert(err.message));
    }
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            history.push("/");
        }).catch((err) => alert(err.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" values={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="login_siginButton" onClick={login}>Sign in</button>
                </form>
                <p>By signing in, you agree to Amazon's Conditions of Use and Privacy Notice,out Cookies Notice and  our Interest-Based Ads Notice.</p>
                <button className="login_registerButton" onClick={register}>Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login;
