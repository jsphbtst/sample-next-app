// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// sequelize nodejs ORM - pg, mysql
// mongodb
export default (req, res) => {
  const method = req.method
  if (method === 'GET') {
    res.send({ hello: 'world' })
    return
  }

  if (method === 'POST') {
    // query the db
    const { body } = req
    res.send(body)
  }
}
