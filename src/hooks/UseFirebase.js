import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseAuth from "./FirebaseAuth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";


firebaseAuth();


const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLog, setIsLog] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUseingGoogle = () => {
    setIsLoading(true)
    return signInWithPopup(auth, googleProvider)
      .finally(() => setIsLoading(false))
      
      .catch(error => {
      setError(error.message)
    })
  }


  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      }
      else {
        setUser({})
      }
      setIsLoading(false)
    })
    return () => unsubscribed;
  }, []);

  // //////////////////////////////////////////////////////////////////////////////////////////////////////
  

  const handleRegistation = e => {
    e.preventDefault();
    if (password.length < 6) {
      setError('password must be at least 6 characters long')
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('password must contain two uppercase');
      return;
    }
    

    isLog ? processLogin(email, password) : createNewUser(email, password)

  }

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        setError('')
      })
      .catch(error => {
        setError(error.message)
      })
  }


  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        setError('')
        verifyEmail();
        setUserName();
      })
      .catch(error => {
        setError(error.message)
      })
  }


  const handleNameChange = e => {
    setName(e.target.value)
  }
  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const toggleLogin = e => {
    setIsLog(e.target.checked)
  }

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
      //mail send
    })
  }

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(result => {
      //name
    })
  }

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(result => {
      
    })
  }




  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  const Logout = () => {
    setIsLoading(true)
    signOut(auth).then(() => {
      setUser({})
      // .finally(() => setIsLoading(false));
    })
  }

  return {
    user, signOut, signInUseingGoogle, error, Logout, isLoading, handleResetPassword,  toggleLogin , handlePasswordChange, handleEmailChange, handleNameChange , handleRegistation, isLog, email, password
  }


}
export default useFirebase;
