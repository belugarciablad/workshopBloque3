"use strict";

var loginButton = document.getElementById('loginbutton');
var loginSection = document.getElementById('login');
var formLogin = document.querySelector('.loginform');
var user = document.getElementById('user');
var pass = document.getElementById('pass');
var name = document.getElementById('name');
var description = document.getElementById('description');
var price = document.getElementById('price');
var button = document.getElementById('button');
var form = document.getElementById('productForSale');
var contador = 2;
loginButton.addEventListener('click', function () {
  if (contador % 2 === 0) {
    loginSection.style.display = "block";
    contador++;
  } else {
    loginSection.style.display = "none";
    contador++;
  }
});
formLogin.addEventListener('submit', function (ev) {
  formProduct.style.display = "block";
  ev.preventDefault();
  var user = createUser();
  var options = {
    method: 'post',
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  };
  fetch('http://localhost:3000/users', options).then(function (response) {
    return response.json();
  }).then(function (data) {
    return console.log(data);
  }); //en lugar del console.log(data) cuando sepamos el endpoint del users seria localStorage.setItem("idUser",data.userid)
});
form.addEventListener('submit', function (ev) {
  console.log(name.value);
  createProduct(name, description, price);
  ev.preventDefault();
  var product = createProduct();
  var options = {
    method: 'post',
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json"
    }
  };
  fetch('http://localhost:3000/products', options).then(function (response) {
    return response.json();
  }).then(function (data) {
    return console.log(data);
  });
});

function createProduct() {
  var product = {
    idUser: localStorage.getItem("idUser"),
    name: name.value,
    description: description.value,
    precio: price.value
  };
  return product;
}

function createUser() {
  var usuario = {
    user: user.value,
    pass: pass.value
  };
  console.log(usuario);
  return usuario;
}