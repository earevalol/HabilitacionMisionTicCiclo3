import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
const PrivateRouter = ({children}) => {
    const {isAuthenticated}= useAuth0();
    return isAuthenticated? (
        <div>
            {children}
        </div>
    ):
    <div>
        <h1>No tiene permiso</h1>
    </div>
}

export default PrivateRouter
