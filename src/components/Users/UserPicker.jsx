import Spinner from '../UI/Spinner'
import { useEffect, useState } from 'react'

export default function UserPicker() {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    async function getUsers() {
      const resp = await fetch('http://localhost:3001/users')
      const data = await resp.json()
      setUsers(data)
    }

    getUsers()
  }, [])

  if (users === null) {
    return <Spinner />
  }

  return (
    <select>
      {users.map((user) => (
        <option key={user.id}>{user.name}</option>
      ))}
    </select>
  )
}
