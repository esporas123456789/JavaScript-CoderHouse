//formulario 
function ValorString (DatosDelUsuario) {
    let IngreseSusDatos = prompt (DatosDelUsuario)
    alert(IngreseSusDatos)
}

ValorString("Nombre");
ValorString("Apellido");
ValorString("Edad");
ValorString("Documento");
ValorString("mail");



let NombredelUsuario = prompt ("ingrese su nombre de usuario")
let Contraseña = prompt ("ingrese su contraseña")
let Ingresando = NombredelUsuario + " " + Contraseña;
console.log(Ingresando)



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
} function CasosdelNFT (CasosDeLosProductos) {
    const ElegirCaso = prompt (CasosDeLosProductos)
    console.log (ElegirCaso)
}

Precios("ingrese el caso de nft");
Precios("ingrese el caso de nft");
Precios("ingrese el caso de nft");
Precios("ingrese el caso de nft");
Precios("ingrese el caso de nft");

function Precios (PreciosDeLosProductos) {
    const Precios = prompt (PreciosDeLosProductos)
    console.log(Precios)
}

Precios (1000)
Precios (1500)
Precios (2000)
Precios (2500)
Precios (3000)

const CantidadDeProductos = (parseInt ("SeisProductos"))
  for (let i=1; i<=6; i=i+1) {
  console.log(i);
}



//switch
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
} let NoRepetir = false
do {
  alert("limite de NFTS: 5")
} while (NoRepetir)