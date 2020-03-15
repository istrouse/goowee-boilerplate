import React from 'react'

import { ExampleWrapper } from '../../components'
import api from '../../api'

function Example() {
  const [exampleMessage, setExampleMessage] = React.useState(null)
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    api.accounts.getExample()
      .then(res => {
        setExampleMessage(res.msg)
        setUsers(res.users)
      })
  }, [])

  return (
    <ExampleWrapper>
      <h1>Example Component</h1>
      <p>Message: {exampleMessage}</p>
      <ul>Users:
        {users.map(user =>
          <li key={user.email}>{user.email}</li>
        )}
      </ul>
    </ExampleWrapper>
  )
}

export default Example
