const cuerpo = document.body
cuerpo.style.backgroundColor= "Pink";

//navbar
const cabecera = document.getElementById('header');
const navegacion = document.createElement('navbar');
const nav = document.createElement('nav');
const ul = document.createElement('ul');

cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';

const links = ["Index", "Servicios", ];

for (const link of links) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html" >${link} </a>`
    ul.appendChild(li);
}

cabecera.style.backgroundColor = '#e0b3b3';



