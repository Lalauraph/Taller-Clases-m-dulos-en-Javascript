
import { Título } from "./utils.js";

const render = () => {
//Itere por el siguiente arreglo de elementos e inyectelos a un divisor/section 
//del HTML usando una instrucción for y la creación de instancias.

const textos = ["Texto número 1", "Texto número 2", "Texto número 3"];
const contenedor = document.querySelector (".contenedor");

for (const texto of textos){
    const miTítulo = new Título(texto);
    const elementoRenderizado = miTítulo.render();

    contenedor.appendChild(elementoRenderizado);
}

}
window.onload = render;