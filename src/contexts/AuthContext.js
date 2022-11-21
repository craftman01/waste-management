import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  
  signInWithPopup,
  

  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth } from '../firebase';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

      const signIn = ( email, password) => {
          return signInWithEmailAndPassword(auth ,email, password)
      }

      const logout = () =>{
        return signOut(auth)
      }
 

  useEffect(() =>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
        console.log(currentUser)
        setUser(currentUser)
      })
      return() => {
        unsubscribe();
      }
  },[])

  // -------------GoogleAuth----------------

  const provider = new GoogleAuthProvider()

  const signInWithGoogle = ( )=> {
    signInWithPopup(auth, provider )
    .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL

        localStorage.setItem ('photo' , profilePic)
        localStorage.setItem("name" , name);
        localStorage.setItem("email" , email);
    
       
      
    }).catch ((error) => {
      console.log(error)
    })
    
  }





  // ---------------------------------------

  

 
  return (
    <UserContext.Provider value={{ createUser, user , logout, signIn, signInWithGoogle }}>
      {children}
    </UserContext.Provider>
  );




  
};

export const UserAuth = () => {
  return useContext(UserContext);
}


 

