import axios from 'axios'

export function getExample() {
  return axios('/api/accounts/example', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.data)
}

export default { getExample }
