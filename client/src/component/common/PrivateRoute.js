import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAdmin = useSelector(state => state.auth.isAdmin)
    return (
        <Route
            {...rest}
            render={props =>
                isAdmin ? <Component {...props} /> : <Redirect to='/' />
            }
        />
    )
}

export default PrivateRoute
