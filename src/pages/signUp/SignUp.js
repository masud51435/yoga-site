// import React, { useState } from 'react';
// import { Container, Form } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import google from '../image/google.png';
// import git from '../image/git.png';
// import useAuth from '../../context/UseAuth';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import firebaseAuth from '../../hooks/FirebaseAuth';

// firebaseAuth();

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [user, setUser] = useState({});


//   const auth = getAuth();


//   const handleEmailChange = e => {
//     setEmail(e.target.value)
//   }
//   const handlePasswordChange = e => {
//     if (e.target.value.length < 6) {
//       console.log('hobe na')
//     }
//     else {
//       setPassword(e.target.value)
//     }
//   };

//   const handleRegistration = e => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(result => {
//         const { email, displayName, photoURL } = result.user;
//         const userInfo = {
//           name: displayName,
//           email: email,
//           photo: photoURL
//         };
//         setUser(userInfo);
//       })
//       .catch(error => {
//         console.log(error.message);
//     })
//   }
  


//   const { signInUseingGoogle} = useAuth();
//   return (
//     <div>
//         <form onSubmit={handleRegistration}>
//         <h1>Please Sign Up</h1>
//         <h6>Login With Email & Password</h6>
//         <input onBlur={handleEmailChange} type="email" name="email"  placeholder="Enter Your Email" required />
//         <br />
//         <input onBlur={handlePasswordChange} type="password" name="password"  placeholder="Enter Your Password" required />
//           {/* <h1>{ error}</h1> */}
//         <br />
//         <input type="submit" value="SignUp" />
//         <p>Already SignUp? <Link to="/login">please LogIn!</Link> </p>
//         <h6>or</h6>
//         <h6>Sign with</h6>
//         <div>
//           <img onClick={signInUseingGoogle} src={google} alt="" />
//         </div>
//         </form>
//     </div>
//   );
// };

// export default SignUp;