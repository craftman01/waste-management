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
        console.log("Email", email)
          return signInWithEmailAndPassword(auth ,email, password)
      }

      const logout = () =>{
        return signOut(auth)
      }
 

  useEffect(() =>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser) 
               console.log('User', currentUser)

      })
      return() => {
        unsubscribe();
      }
  },[])

  // -------------GoogleAuth----------------

  

  function googleSignIn(){
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider) 
    .then((result) => {
      
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL
      const UID = result.user.uid

      localStorage.setItem("Uid", UID)
      localStorage.setItem ('photo' , profilePic)
      localStorage.setItem("name" , name);
      localStorage.setItem("email" , email);
       

    
        }).catch ((error) => {
          console.log(error)
        })
  }





  // const signInWithGoogle = ( )=> {
  //   signInWithPopup(auth, provider )
  //   .then((result) => {
      
    
       

      
  //   }).catch ((error) => {
  //     console.log(error)
  //   })
    
  // }

    // const name = result.user.displayName;
    //     const email = result.user.email;
    //     const profilePic = result.user.photoURL

    //     localStorage.setItem ('photo' , profilePic)
    //     localStorage.setItem("name" , name);
    //     localStorage.setItem("email" , email);
  
  // ---------------------------------------

  

 
  return (
    <UserContext.Provider value={{ createUser, user , logout, signIn, googleSignIn }}>
      {children}
    </UserContext.Provider>
  );

};

export const UserAuth = () => {
  return useContext(UserContext);
}


 

