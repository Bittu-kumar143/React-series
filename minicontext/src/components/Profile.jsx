import React, {useContext, userName} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {User} = useContext(UserContext)
  if(!user) return <div>pleqase login</div>

  return <div>Welcom {user.userName}</div>
}

export default Profile
