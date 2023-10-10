//En el archivo utils.js va a crear una clase llamada Titulo:
export class Título{
    texto = "";

//Al constructor le va a llegar un parámetro llamado texto. Guarde este parámetro en un atributo publico:
constructor(texto) { 
    this.texto = texto;
}

//Dentro de la clase va a crear una función pública llamada render. 
//Esta función va a crear un elemento de tipo <p> usando document.createElement. 
//Al elemento creado va a asignarle el valor del atributo texto. 
//Finalmente la función render debe retornar el elemento creado.
render () {
	const elemento = document.createElement ('p');
    elemento.textContent = this.texto;
    return elemento;
}
}

