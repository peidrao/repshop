const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const sendMail = require('./config/email');

const App = express();

App.use(
  session({
    secret: 'repshop',
    resave: true,
    saveUninitialized: true
  })
);

App.use(bodyParser.urlencoded({ extended: true }));
App.use(bodyParser.json());

App.use(express.urlencoded({ extended: false }));
App.use(express.json());

// Handlebars
App.engine(
  'handlebars',
  handlebars({
    defaultLayout: 'main'
  })
);
App.set('view engine', 'handlebars');

// Public (arquivos estáticos)
App.use(express.static(path.join(__dirname, 'public')));

// Rota Início
App.get('/', (req, res) => {
  res.render('index');
});

/* PARTE DO EMAIL */
App.post('/email', (req, res) => {
  const { subject, email, text } = req.body;
  /* console.log('Data: ', req.body); */
  sendMail(subject, email, text, (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Internal error' });
    } else {
      res.json({ message: 'mensagem enviada' });
    }
  });
});

// Rota: Quem somos
App.get('/sobre', (req, res) => {
  res.render('sobre/index');
});

// Rota: contato
App.get('/contato', (req, res) => {
  res.render('contato/index');
});

const PORT = process.env.PORT || 8080;
App.listen(PORT, () => {
  console.log(`Servidor funcionando na porta: ${PORT}`);
});
