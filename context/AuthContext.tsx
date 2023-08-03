import React, { useContext, useState, useRef, useEffect } from 'react'
import { auth, db } from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const userInfo = useRef()

    function signup(email: string, password: string) {
        createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email: string, password: string) {
        signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, async (user) => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubcribe;
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        userInfo
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

