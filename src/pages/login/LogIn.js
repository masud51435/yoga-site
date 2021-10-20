import React from 'react';
import { Form } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import google from '../image/google.png';
import './LogIn.css'
import useAuth from '../../context/UseAuth';
import Button from '@restart/ui/esm/Button';


const LogIn = () => {
  const { signInUseingGoogle, handleResetPassword,  toggleLogin, handlePasswordChange, handleEmailChange, handleNameChange,  handleRegistation, isLog, error } = useAuth();
  
  const location = useLocation();
  const history = useHistory()

  const handleGoogle = () => {
    signInUseingGoogle()
      .then(result => {
        history.push(location.state?.from || '/home');
      })
  }


  return (
    <div className=" bg-light ">
       <div className="forms my-5 py-4 container">
      <Form onSubmit={handleRegistation}>

        <h1 style={{color:"#484338", marginBottom:"20px"}}>Please {isLog ? 'Login' : 'Register'}</h1>

        <h6 className={{color:"#484338", marginBottom:"20px"}}>{isLog ? 'Login' : 'Register'} With Email & Password</h6>

        {!isLog && <input className="int-field" onBlur={handleNameChange} type="text" name="text" id="1" placeholder=' Enter Your Name' required />}

        <br />
        <input className="int-field" onBlur={handleEmailChange} type="email" name="email" id="2" placeholder=' Enter Your Email' required />

        <br />
        <input className="int-field" onBlur={handlePasswordChange} type="password" name="password" id="3" placeholder="Enter Your Password" required />
        <br />
        <h1 className="text-danger">{error}</h1>

        <input className="int-field" className="btn-sub" type="submit" value={isLog ? 'Login' : 'Register'} />
        <br />
        <input className="my-4" onChange={toggleLogin} type="checkbox" name="checkbox" id="" />
        <label htmlFor="">Already register?</label>
        
        <p>Forget password? <Button className="btn-chng" onClick={handleResetPassword}  variant="link">click here</Button> </p>
        <h6>or</h6>
        <h6>Login with</h6>
        <div>
          <img className="google" onClick={handleGoogle} src={google} alt="" />
        </div>
      </Form>
    </div>
   </div>
  );
};

export default LogIn;