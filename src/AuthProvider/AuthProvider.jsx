import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";

export const  AuthContext = createContext(null)
const AuthProvider = ({children}) => {
     const googleProvider = new GoogleAuthProvider();
     const [user,setUser] = useState(null)
     const [loading,setLoading] = useState(true)

     //singUp setup
     const singUp = (email,password) =>{
          setLoading(true)
         return createUserWithEmailAndPassword(auth,email,password)
     }

     //Google Account setup
     const signInWithGoogle = () => {
          setLoading(true)
         return signInWithPopup(auth, googleProvider)
     }

     useEffect(()=>{
          const unSubscribe = onAuthStateChanged(auth,currentUser=>{
               setUser(currentUser)
               setLoading(false)
          })
          return()=>{
          unSubscribe();
          }
     },[])

      //Update User Profile
      const updateUser = (name,img) =>{
          setLoading(true)
         return updateProfile(auth.currentUser, {
          displayName:name, photoURL:img
        })
     }


       // LogIn setup
       const logIn = (email,password) =>{
          setLoading(true)
         return signInWithEmailAndPassword(auth, email, password)
     }

      //LogOut
      const logOut =()=> { 
          setLoading(true)
         return signOut(auth)
          
     }

     const authInfo = {user,logIn,singUp,logOut,signInWithGoogle,loading,updateUser}
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;