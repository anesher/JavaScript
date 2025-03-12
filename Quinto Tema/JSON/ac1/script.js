"use strict"

const objJson=`{
  "libros": [
    {"titulo": "El Principito", "autor": "Antoine de Saint-Exupéry", "año": 1943},
    {"titulo": "1984", "autor": "George Orwell", "año": 1949}
  ]
}`;

const libro=JSON.parse(objJson);
console.log(libro);

libro.libros.forEach(libro => {
    console.log(`Titulo: ${libro.titulo}, Autor: ${libro.autor}`);
});
