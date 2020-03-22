# Reputação Verde
> Uma plataforma simples, para mostrar ao consumidor os serviços que são oferecidos pelo empreendedor.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
[![GitHub version](https://badge.fury.io/gh/peidrao%2Fpeidrao.github.io.svg)](https://badge.fury.io/gh/peidrao%2Fpeidrao.github.io)

Primeiro trabalho realizado de modo autônomo. Com um maior trabalho no gerenciamento de e-mails. 
Usando NODE.JS em todas as istâncias do código, desde o backend (que seria o mais usual) até o frontend.

![](teste.png)

## Instalação:

```sh
yarn install
```

Rodar a aplicação:

```sh
yarn start
```

Logo após, abra o navegador e digite:

```sh
localhost:8080
```

## Backend
**Express:** Usada para criação de rotas. No projeto, foram usadas três:
- **/**:   _Rota inicinal._
- **/sobre**: _Responsável para levar o usuário as informações sobre a empresa._
- **/contato**: _Onde o usuário entraria em contato com a empresa através de um formulário de e-mail._

**Handlebars:** Diferente de frameworks como _angular_, _react_ e tantos outros. Handlebars é um template engine. Vale acrescentar que ele tem uma performace bem melhor comparado ao _Mustache_. Ele é o que trabalha com toda a parte do frontend. Gera os arquivos a partir das rotas do express. 

**Body Parser**: O body parser faz a “simples” conversão de arquivos que estão no corpo da minha requisição para vários formatos. Que no nosso caso pode ser um .json

Foram usados outras duas bibliotecas que fazem o gerenciamento dos e-mails que são enviados do site até a empresa.

**Nodemailer:** Que de uma maneira bem simples, é o responsável por enviar os e-mails.

**Nodemailer Mailgun Transport:** Reponsável usando o MailGun de enviar os e-mails para qualquer gerenciando de e-mails (_Gmail, Yahoo, Outlook_)

Existem outras bibliotecas do próprio node que foram usadas no decorrer desse projeto, contudo as mais impirtantes foram essas.

## Frontend
Na parte do frontend, foi preenchido com o **bootstrap** (pois o próprio cliente queria uma aplicação simplória). Salvo alguns efeitos como o  texto inicial Reputação Verde e o carousel de depoimentos que foram retirados da web. (O crédito dos mesmos estão no fim dessa documentação)


## Deploy
O deploy dessa aplicação foi feita pelo [Heroku](https://dashboard.heroku.com/), aplicação essa que não só suporta o Node.js como também várias outras. Usando ainda uma extensão PointDNS para fazer o link entre o domínio e heroku

## Domínio:
[Registro.br](https://registro.br/)

## Agradecimentos finais
Esse site não seria construindo sem meu conhecimento da faculdade (mentira esquece essa parte).
Graças ao curso ministrado pelo [Victor Lima](https://www.youtube.com/channel/UC_issB-37g9lwfAA37fy2Tgs) consegui fazer toda essa aplicação, claro que, muitas outra s incrementações foram feitas por outras fontes, mas a base de toda aplicação foi feita a través do conhecimento que adquiri de suas aulas no YouTube e de graça. 

## Contribuia

1. Fork (<https://github.com/yourname/yourproject/fork>)
2. Crie sua própria branch (`git checkout -b feature/novaBrach`)
3. Faça o commit de suas alterações (`git commit -am 'Add some novaBrach'`)
4. Dê o push em sua branch (`git push origin feature/novaBrach`)
5. Crie um novo Pull Request


## Links
[**Victor Lima**](https://www.youtube.com/channel/UC_issB-37g9lwfAA37fy2Tg)

[**Express**](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introdu%C3%A7%C3%A3o)

[**Handlebars**](https://handlebarsjs.com/)

[**Body Parser**](https://www.npmjs.com/package/body-parser)

[**Nodemailer**](https://nodemailer.com/about/)

[**Nodemailer Mailgun Transport**](https://github.com/orliesaurus/nodemailer-mailgun-transport)

### Ferramentas usadas

[**Testimonial Showcase 64**](https://www.bestjquery.com/labs/testimonial-showcase-64/)

[**Text Animation: Montserrat**](https://codepen.io/ClaireLarsen/pen/XmVyVX)

