import { useState, Fragment, useEffect } from 'react'
import Spinner from '../UI/Spinner.jsx'
import getData from '../../utils/api.js'

export default function UsersList() {
  const [users, setUsers] = useState(null)
  const [userIndex, setUserIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setIsLoading(true)
    getData('http://localhost:3001/users')
      .then((users) => setUsers(users))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false))
  }, [])

  const user = users && users[userIndex]

  if (error) {
    return <p>{error.message}</p>
  }

  if (isLoading) {
    return (
      <p>
        <Spinner /> Loading users...
      </p>
    )
  }

  return (
    <Fragment>
      <ul className="users items-list-nav">
        {users.map((user, i) => (
          <li key={user.id} className={i === userIndex ? 'selected' : null}>
            <button className="btn" onClick={() => setUserIndex(i)}>
              {user.name}
            </button>
          </li>
        ))}
      </ul>
      {user && (
        <div className="bookable-details">
          <div className="item">
            <div className="item-header">
              <h2>{user.name}</h2>
            </div>
            <div className="item-details">
              <h3>{user.title}</h3>
              <p>{user.notes}</p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}
