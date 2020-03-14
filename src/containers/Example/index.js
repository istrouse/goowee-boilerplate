import React from 'react'

import { ExampleWrapper } from '../../components'
import api from '../../api'

function Example() {
  const [exampleMessage, setExampleMessage] = React.useState(null)

  React.useEffect(() => {
    api.accounts.getExample()
      .then(res => setExampleMessage(res.msg))
  }, [])

  return (
    <ExampleWrapper>
      <h1>Example Component</h1>
      <p>Message: {exampleMessage}</p>
    </ExampleWrapper>
  )
}

export default Example
