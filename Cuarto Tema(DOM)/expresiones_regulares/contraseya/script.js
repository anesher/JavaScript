/*Validación de contraseñas: Crea una expresión regular que verifique si una
contraseña cumple ciertos requisitos (por ejemplo, al menos 8 caracteres,
    una mayúscula al comienzo y un número al final).*/
    
let regex=/^([A-Z][a-zA-Z0-9@!/?]{6,}[0-9])$/;
console.log(regex.test("Aouuuuuuuu!8"));