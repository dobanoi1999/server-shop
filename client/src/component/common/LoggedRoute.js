import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const LoggedRoute = ({ component: Component, ...rest }) => {
    const isLogged = useSelector(state => state.auth.isLogged)

    return (
        <Route
            {...rest}
            render={props => isLogged ? <Component {...props} /> : <Redirect to="/login" />}
        />
    )
}

export default LoggedRoute
