import { users } from '../../static.json'
import { useState } from 'react'

export default function UsersList() {
  const [userIndex, setUserIndex] = useState(0)

  return (
    <ul className="users items-list-nav">
      {users.map((user, i) => (
        <li key={user.id} className={i === userIndex ? 'selected' : null}>
          <button className="btn" onClick={() => setUserIndex(i)}>
            <h3>{user.name}</h3>
          </button>
        </li>
      ))}
    </ul>
  )
}
