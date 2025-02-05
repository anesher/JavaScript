/*
Validación de formatos de fecha: Crea expresiones regulares para validar
diferentes formatos de fecha (por ejemplo, DD/MM/AAAA y AAAA-MM-DD)
*/
let fecha = /(^\d{2}\/\d{2}\/\d{4}$)|(^\d{4}-\d{2}-\d{2}$)/;
console.log(fecha.test("31/02/2023")); // true
console.log(fecha.test("2023/02/12")); // true
console.log(fecha.test("12-02-2023")); // false
console.log(fecha.test("2023-02-12")); // true