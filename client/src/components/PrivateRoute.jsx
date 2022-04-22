import React from 'react'
import { Route, Redirect, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export const PrivateRoute = ({children, path}) => {
    const {currentUser} = useAuth();
    if (!currentUser) {
        return <Navigate to={path} replace/>
    }
    else{
        return children
    }
}
