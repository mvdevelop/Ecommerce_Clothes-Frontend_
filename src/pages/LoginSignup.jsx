
import styles from './LoginSignup.module.css';

import { useState } from 'react';

function LoginSignup() {

    const [ state, setState ] = useState("Login");
    const [ formData, setFormData ] = useState({
        username:"",
        password:"",
        email:""
    });

    const changeHandler = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value});
    }  
    
    const login = async () => {
        console.log("Login Function Executed",formData);
        let responseData;
        await fetch('http://localhost:4000/login',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => responseData=data);

        if(responseData.success) {
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        } else {
            alert(responseData.errors);
        }
    }

    const signup = async () => {
        console.log("Signup Function Executed",formData);
        let responseData;
        await fetch('http://localhost:4000/signup',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => responseData=data);

        if(responseData.success) {
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        } else {
            alert(responseData.errors);
        }
    }

    return (
        <>
            <div className={styles.logSig_container}>
                <div className={styles.loginSignup_container}>
                    <h1>{state}</h1>
                    <div className={styles.loginSignup_fields}>
                        {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name'/>:<></>}
                        <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email address'/>
                        <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password'/>
                    </div>
                    <button onClick={() => {state==="Login"?login():signup()}}>Continue</button>
                    <div className={styles.p}>
                    {state==="Sign Up"?
                        <p className={styles.loginSignup_login}>
                        Already have an account? 
                        <span onClick={() => {setState("Login")}}>Login here</span>
                        </p>:
                        <p className={styles.loginSignup_login}>
                        Create an account? 
                        <span onClick={() => {setState("Sign Up")}}>Click here</span>
                        </p>}
                    </div>
                    <div className={styles.loginSignup_agree}>
                        <input type="checkbox" name='' id=''/>
                        <p>By continuing, i agree to the terms of use & privacy policy.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginSignup;
