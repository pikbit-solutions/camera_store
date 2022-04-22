import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext';
import {useNavigate} from 'react-router-dom'
const LoginPage =  () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const {login} = useAuth();
    const {currentUser} = useAuth();
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(currentUser)
            navigate('/admin');
    },[currentUser])

    const adminLogin = async (e) => {
        e.preventDefault();
        await login(emailRef.current.value, passwordRef.current.value);
    }

    return (
        <div className='login-main'>
            <div className='login-container'>
                <div className='login-title'>
                    Login
                </div>
                <form>
                    <div className='login-group'>
                        <label>Email : </label>
                        <input type="text" placeholder='Enter email' ref={emailRef}/>
                    </div>
                    <div className='login-group'>
                        <label>Password : </label>
                        <input type="password" placeholder='Enter password' ref={passwordRef}/>
                    </div>
                    <div className='login-group'>
                        <button onClick={adminLogin}>Login</button>
                    </div>
                    <div className='login-group'>
                        <label>Forgot your password?  <Link to='/'>Reset password</Link> </label>
                       
                    </div>
                </form>
                {/* <Form>
                    <Form.Group className='mb-3'>
                        <Form.Label>Email : </Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Password : </Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Enter password" />
                    </Form.Group>
                    <Button onClick={adminLogin} className='mb-4' variant="primary" type="submit">
                        Login
                    </Button>
                    <Form.Group className='mb-3'>
                        <div>Forgot password? <Link to='/'>Reset Password</Link></div>
                    </Form.Group>
                </Form> */}
            </div>
        </div>
    )
}

export default LoginPage