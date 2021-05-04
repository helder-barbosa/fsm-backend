
const home = (req, res) => {
  res.render('home', {
    time: 10,
    num: ['One', 'Two', 'Three'],
    fruit: [
      { name: 'Apple' },
      { name: 'Banana' },
      { name: 'Grape' },
      { name: 'Orange' }
    ]
  })
}

const pagina1 = (req, res) => {
  res.send('pagina1')
}

const calc = (req, res) => {
  if (req.query.num1 && req.query.num2) {
    const { num1, num2 } = req.query
    const soma = parseFloat(num1) + parseFloat(num2)
    res.render('calc', { soma })
  } else {
    res.render('erro')
  }
}

const par = (req, res) => {
  const isPar = (req.params.num % 2) === 0
  if (isPar) {
    res.send('Numero é Par !')
  } else {
    res.send('Numero é Impar !')
  }
}

module.exports = {
  home,
  pagina1,
  calc,
  par
}