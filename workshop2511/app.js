const loginButton = document.getElementById('loginbutton');
const loginSection =  document.getElementById('login');
const formLogin = document.querySelector('.loginform');
const user = document.getElementById('user');
const pass = document.getElementById('pass');
const name = document.getElementById('name');
const description = document.getElementById('description');
const price = document.getElementById('price');
const button = document.getElementById('button');
const form = document.getElementById('productForSale');

let contador = 2;
loginButton.addEventListener('click',()=>{
    if(contador%2===0){
        loginSection.style.display= "block"
        contador++;
    }else{
        loginSection.style.display= "none"
        contador++;
    }
}
);

formLogin.addEventListener('submit', function(ev){
    formProduct.style.display= "block";
    ev.preventDefault();
    const user = createUser();
    const options = {
        method: 'post',
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch('http://localhost:3000/users', options).then(response => response.json())
                                        .then(data => console.log(data))
                                        //en lugar del console.log(data) cuando sepamos el endpoint del users seria localStorage.setItem("idUser",data.userid)
})


form.addEventListener('submit', function(ev){
    console.log(name.value);
    createProduct(name,description,price);
    ev.preventDefault();
    const product = createProduct();
    const options = {
        method: 'post',
        body: JSON.stringify(product),
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch('http://localhost:3000/products', options).then(response => response.json()).then(data => console.log(data))

}
)

function createProduct() {
    
    const product = {
        idUser: localStorage.getItem("idUser"),
        name: name.value,
        description: description.value,
        precio: price.value
    }
    return product;
}

function createUser() {
    const usuario = {
        user: user.value,
        pass: pass.value
    }
    console.log(usuario);
    return usuario
}







