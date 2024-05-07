import React, { useContext } from 'react'
import userContext from '../context/UserContext'

const Profile = () => {

    const { user } = useContext(userContext)

    if (!user) return <p>Please Login</p>

    return <p>Welcome {user.username}</p>
}

export default Profile
