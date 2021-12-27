// Idioma 
const IngresarIdioma = prompt ("elija el idioma que prefiera")
const Idioma = "Español"
const Idioma1 = "Ingles"
const Idioma2 = "Frances"

if (IngresarIdioma == Idioma) {
    alert ("Traducido al Español")
} else if (IngresarIdioma == Idioma1) {
    alert ("Traducido al ingles")
} else if (IngresarIdioma == Idioma2){
    alert("Traducido al Frances")
}


//formulario 
function ValorString (DatosDelUsuario) {
    let Registrar = prompt (DatosDelUsuario)
    alert(Registrar)
}

ValorString("Nombre");
ValorString("Apellido");
ValorString("Edad");
ValorString("Documento");
ValorString("mail");


let  IngresarNombre = prompt ("ingresar nombre de usuario") 
let  IngresarContraseña = prompt ("ingresar contraseña") 

function IngresarCuenta () {
    alert( IngresarNombre + " " + IngresarContraseña)
}

IngresarCuenta ();
 

//productos
let IngreseUnProducto = prompt ("ingrese el producto deseado")
let  producto1 ="juegos"
let  producto2 ="articulos"
let  producto3 ="cuadros"
let  producto4 ="figuritas"
let  producto5 ="empresas"
let  producto6 
 
if (IngreseUnProducto == producto1) {
    alert ("MIR4, juego de accion pura")
} else if (IngreseUnProducto == producto2) {
    alert ("Nyan Cat, meme de un gato volador")
} else if (IngreseUnProducto == producto3) {
    alert ("Morons (white» de Banksy), pintura anonima")
} else if (IngreseUnProducto == producto4) {
    alert ("compilado de las mejores jugadas de Messi, representacion visual y sonora")
} else if (IngreseUnProducto == producto5) {
    alert ("Chakra, superheroe de marvel")
} else {
    alert ("Ya no se venden mas tipos de NFTS")
} 

const CantidadDeProductos = (parseInt ("SeisProductos"))
  for (let i=1; i<=6; i=i+1) {
  console.log(i);
}

function Precios (PreciosDeLosProductos) {
    const Precios = prompt (PreciosDeLosProductos)
    console.log(Precios)
}

Precios ("1000, juegos")
Precios ("1500, articulos")
Precios ("2000, cuadros")
Precios ("2500, figuritas")
Precios ("3000, empresas")

let Entrada = prompt ("ingrese el caso de NFT para invertir o comprar")
switch (Entrada) {
    case "A":
        alert ("comprar el NFT uno de la lista")
        break
    
    case "B":
        alert ("comprar el NFT dos de la lista")
        break
    
    case "C":
        alert ("comprar el NFT tres de la lista")
        break
    
    case "D":
        alert ("comprar el NFT cuatro de la lista")
        break
    
    case "E":
        alert ("comprar el NFT cinco de la lista")
        break
} let seguir = true
do {
seguir = prompt("Debe seguir en el bucle")
} while (seguir!== "no quiero comprar mas")


let Descuentos = parseFloat ( prompt ("INGRESE UN PRECIO") )
DescuentoJuegos = Descuentos - (Descuentos * 0,90)
DescuentoArticulos = Descuentos - (Descuentos * 0,50)
DescuentoCuadros = Descuentos - (Descuentos * 0,30)
DescuentoFiguritas = Descuentos - (Descuentos * 0,70)
DescuentoEmpresas = Descuentos - (Descuentos * 0,80)
console.log(DescuentoJuegos)
console.log(DescuentoArticulos)
console.log(DescuentoCuadros)
console.log(DescuentoFiguritas)
console.log(DescuentoEmpresas)

let Rebajas = prompt ("ingrese el descuento que desea")
switch (Rebajas) {
    case "F":
        alert ("Descuento de juegos")
        break

    case "G":
        alert ("Descuento de articulos")
        break

    case "H":
        alert ("Descuento de cuadros")
        break

    case "I":
        alert ("Descuento de figuritas")
        break

    case "J":
        alert ("Descuento de empresas")
        break
} let proceder = true 
do {
proceder = prompt ("Debe seguir en el bucle")
} while (proceder!== "no quiero mas descuentos")


