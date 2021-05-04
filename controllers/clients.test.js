const clientsController = require('./clients')
const expect = require('chai').expect
const sinon = require('sinon')

describe('clients controller', () => {
  it('create all clients', () => {
    let res = {
      send: function () { }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('clients/create')
    clientsController.newCreate({}, res)
  })
  it('list all clients', () => {
    let res = {
      send: function () { }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('clients/list')
    clientsController.list({}, res)
  })
})