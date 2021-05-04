const indexController = require('./index')
const expect = require('chai').expect
const sinon = require('sinon')

describe('index controller', () => {
  it('home', () => {
    let res = {
      render: function () { }
    }
    let data = {
      time: 10,
      num: ['One', 'Two', 'Three'],
      fruit: [
        { name: 'Apple' },
        { name: 'Banana' },
        { name: 'Grape' },
        { name: 'Orange' }
      ]
    }
    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('home', data)
    indexController.home({}, res)
  })
  it('calc - query empty', () => {
    let res = {
      render: function () { }
    }
    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('erro')
    indexController.calc({ query: {} }, res)
  })
  it('calc - query full', () => {
    let res = {
      render: function () { }
    }
    let req = {
      query: {
        num1: '10',
        num2: '20'
      }
    }
    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('calc', { soma: 30 })
    indexController.calc(req, res)
  })
  it('calc - only num1', () => {
    let res = {
      render: function () { }
    }
    let req = {
      query: {
        num1: '10'
      }
    }
    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('erro')
    indexController.calc(req, res)
  })
  it('calc - only num2', () => {
    let res = {
      render: function () { }
    }
    let req = {
      query: {
        num2: '10'
      }
    }
    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('erro')
    indexController.calc(req, res)
  })

})