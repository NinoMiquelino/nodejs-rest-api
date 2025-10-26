## 👨‍💻 Autor

<div align="center">
  <img src="https://avatars.githubusercontent.com/ninomiquelino" width="100" height="100" style="border-radius: 50%">
  <br>
  <strong>Onivaldo Miquelino</strong>
  <br>
  <a href="https://github.com/ninomiquelino">@ninomiquelino</a>
</div>

---

# 📚 API RESTful de Livros (CRUD com Node.js e Express)

![Made with Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Framework Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)
![RESTful API](https://img.shields.io/badge/API-RESTful-ff6f00)
![License MIT](https://img.shields.io/badge/License-MIT-green)
![Status Stable](https://img.shields.io/badge/Status-Stable-success)
![Version 1.0.0](https://img.shields.io/badge/Version-1.0.0-blue)
![GitHub stars](https://img.shields.io/github/stars/NinoMiquelino/nodejs-rest-api?style=social)
![GitHub forks](https://img.shields.io/github/forks/NinoMiquelino/nodejs-rest-api?style=social)
![GitHub issues](https://img.shields.io/github/issues/NinoMiquelino/nodejs-rest-api)

Este projeto implementa uma API RESTful completa (CRUD - Create, Read, Update, Delete) para gerenciar uma coleção de livros. Ele serve como uma introdução prática ao ecossistema Node.js, utilizando o framework **Express** e persistência de dados em um arquivo JSON local, simulando um banco de dados simples.

---

## 🚀 Arquitetura e Destaques

* **Express.js:** Framework minimalista e flexível para criação de APIs em Node.js.
* **RESTful Design:** Os endpoints (`/api/v1/books`) respeitam os métodos HTTP padrão (GET, POST, PUT, DELETE) para as operações CRUD.
* **Persistência de Arquivo (`fs`):** O módulo `books.model.js` utiliza o módulo nativo `fs/promises` do Node.js para ler e escrever dados de forma assíncrona no arquivo `src/data.json`.
* **Modularização:** O código é organizado em *Controller* (lógica de rotas e requisição) e *Model* (lógica de dados e persistência).
* **Middlewares:** Utilização de middlewares do Express para validação de dados (`validateBookData`) e processamento de JSON (`express.json`).

---

## 🛠️ Tecnologias Utilizadas

* **Runtime:** Node.js
* **Framework:** Express.js
* **Ferramentas:** npm (Node Package Manager), nodemon (para desenvolvimento).
* **Persistência:** JSON (File System - `fs`).

---

## ⚙️ Configuração e Instalação

### Pré-requisitos

1.  Node.js (versão 14+) e npm instalados.

### 1. Inicialização do Projeto

Abra o terminal na pasta raiz do projeto (`/nodejs-rest-api`) e execute:

# 1. Inicializa o projeto Node.js (cria o package.json)
npm init -y

# 2. Instala o framework Express como dependência principal
npm install express

# 3. Instala o nodemon para reiniciar o servidor automaticamente em mudanças
npm install -D nodemon

---

## 🧩 Estrutura do Projeto

Certifique-se de que sua estrutura de arquivos está organizada da seguinte forma:

```
nodejs-rest-api/
├── app.js
├── package.json
├── README.md
├── .gitignore
└── 📁 src/
         ├── data.json          
         ├── books.model.js      
         └── books.controller.js 
```
---

## 🤝 Contribuições
Contribuições são sempre bem-vindas!  
Sinta-se à vontade para abrir uma [*issue*](https://github.com/NinoMiquelino/nodejs-rest-api/issues) com sugestões ou enviar um [*pull request*](https://github.com/NinoMiquelino/nodejs-rest-api/pulls) com melhorias.

---

## 💬 Contato
📧 [Entre em contato pelo LinkedIn](https://www.linkedin.com/in/onivaldomiquelino/)  
💻 Desenvolvido por **Onivaldo Miquelino**

---
