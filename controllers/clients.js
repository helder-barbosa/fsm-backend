
const list = (req, res) => {
  res.send('clients/list')
}

const newCreate = (req, res) => {
  res.send('clients/create')
}

module.exports = {
  list,
  newCreate
}