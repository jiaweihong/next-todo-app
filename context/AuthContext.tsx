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

    async function register(email: string, password: string) {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
            throw new Error("unable to register account")
        }
    }

    async function login(email: string, password: string) {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            throw new Error("incorrect email / password")
        }
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
        register,
        logout,
        userInfo
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

