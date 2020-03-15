exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          email: 'test@users.com',
          password: '$2a$12$VJZEnCbayaKScgtZ4LpJRehX/L4i.f6DrirY0vdO.j9Rc5/d/V66K',
        }
      ])
    })
    .then(() => knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))"))
}
