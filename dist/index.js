"use strict";
console.log("hola");
if (2 > 1) {
    console.log("si");
}
let numero = 10;
let otroNumero = 10;
let imprimible = "aa";
console.log(typeof imprimible);
let unoOtro = 3;
let numeroPar = 2;
let opcional = null;
let numeroLargo = 123456789;
let numeroBinario = 0b101010;
let numeroOctal = 0o1234567;
let numeroHexadecimal = 0x12345678;
let numeroDecimal = 123456789.123456789;
let texto = "aaa";
let textoLargo = `Ho\nla
mundo`;
let textoLargo2 = `Ho\${numero}la`;
let booleano = true;
let cualquiera;
let array = [1, 2, 3];
let array2 = [1, 2, 3];
let array3 = [1, "hola"];
var Cual;
(function (Cual) {
    Cual["este"] = "a";
    Cual["otro"] = "b";
    Cual["aquel"] = "c";
})(Cual || (Cual = {}));
;
let variableEnum = Cual.este;
let objeto = { nombre: "hola", edad: 30 };
let objetoPlantilla = {
    nombre: "hola",
    id: 1,
    funcion: (date) => { console.log(date); }
};
let varios = { nombre: "hola", id: 1, funcion: (date) => { console.log(date); }, extra: "a" };
;
;
let objeto2 = { nombre: "hola", tamagno: 10 };
function suma(a, b, opcional, porDefecto = 10) {
    return a + b + (opcional || 0) + porDefecto;
}
console.log(suma(1, 2));
//# sourceMappingURL=index.js.map