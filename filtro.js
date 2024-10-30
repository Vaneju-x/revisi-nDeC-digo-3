// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const li = document.getElementById("lista-de-productos"); //se coloco el ; se cambia 
const $i = document.querySelector('.input');
const botonDeFiltro = document.querySelector("button");

/* Se retira regla
for (let i = 0; i < productos.length; i++) {
  let d = document.createElement("div"); //se coloco el ;, var se cambia a let
  d.classList.add("producto"); //se coloco el ;

  let ti = document.createElement("p"); //se coloco el ; var se cambia a let
  ti.classList.add("titulo"); //se coloco el ;
  ti.textContent = productos[i].nombre
  
  let imagen = document.createElement("img"); //var se cambia a let
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
} */

/* displayProductos(productos) no hay una funcion   */
/* const botonDeFiltro = document.querySelector("button"); */

/* se cambia la funcion 
botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    let d = document.createElement("div");//se coloco el ;, var se cambia a let
    d.classList.add("producto");//se coloco el ;
  
    let ti = document.createElement("p");//se coloco el ;, var se cambia a let
    ti.classList.add("titulo");//se coloco el ;
    ti.textContent = productosFiltrados[i].nombre;//se coloco el ;
    
    let imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img); //var se cambia a let
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
} */

/* hace visible los productos */ 
function renderizarProductos(productos) {
  li.innerHTML = ''; // Limpia el contenedor
  productos.forEach(producto => {
    let d = document.createElement("div");
    d.classList.add("producto");

    let ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = producto.nombre;

    let imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    d.appendChild(ti);
    d.appendChild(imagen);

    li.appendChild(d);
  });
}

renderizarProductos(productos);

botonDeFiltro.onclick = function() {
  const texto = $i.value;
  const productosFiltrados = filtrado(productos, texto);
  renderizarProductos(productosFiltrados);
};



/* Filtra las opciones */

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  