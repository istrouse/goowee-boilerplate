const { getUsers } = require('../../../../database/queries/users')

async function exampleCtrl(req, res) {
  const users = await getUsers()

  return res.json({ success: true, msg: 'Hello, world!', users })
}

module.exports = exampleCtrl
