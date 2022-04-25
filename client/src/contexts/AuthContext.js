import React, { useContext, useState } from 'react'
import { browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/Fbindex.js';


const AuthContext = React.createContext()


export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const login = (email, password) =>
        setPersistence(auth, browserSessionPersistence).then(async () => { //still not nesessory
            return signInWithEmailAndPassword(auth, email, password) //remove return state if session do not want
                .then((userCredential) => {
                    setCurrentUser(user => userCredential.user);
                    // console.log(userCredential.user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    alert(errorCode, ' Login faied');
                    // const errorMessage = error.message;
                    // console.log(errorCode, errorMessage);
                });
        }).catch((error) => { //not nesessory
            const errorCode = error.code;
            alert(errorCode, ' Login faied');
            // const errorMessage = error.message;
            // console.log(errorCode, errorMessage);

        })



    const value = {
        currentUser,
        login,

    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}