//Typescript es igual que Javascript pero con algunos cambios como que las variables estan estáticamente tipadas, aquí se veran todas las diferencias en cuanto a Javascript
//Typescript usa nodejs para compilar los archivos .ts a .js (no se puede ejecutar un archivo .ts directamente) (comando tsc)
console.log("hola");

//Las estructuras son iguales que en Javascript
if (2 > 1) {
  console.log("si");
}

//Tipos (en la mayoria de casos, si no se especifica se infiere o se usa any):
let numero:number = 10;
//numero = "hola"; //Imposible
let otroNumero = 10; //Supone el tipo
let imprimible:number|string = "aa"; //Una variable que puede ser de uno de varios tipos, util para parametros en funciones
console.log(typeof imprimible); //Devuelve un string con el tipo
let unoOtro:3 | 4 = 3; //Solo puede ser uno de esos
type Par = 2 | 4 | 6 | 8; //Todos los tipos se pueden guardar en type
let numeroPar:Par = 2; 
let opcional:number | null | undefined = null; //Puede ser null
//numero = "3" as number; //Forzar tipos de variables, puede dar error
//numero = <number>"3"; //Lo mismo

let numeroLargo:number = 123_456_789; //Separador visual
//let numeroGrande:bigint = 1234567890123456789012345678901234567890n; //Numero grande
let numeroBinario:number = 0b101010; //Binario
let numeroOctal:number = 0o1234567; //Octal
let numeroHexadecimal:number = 0x12345678; //Hexadecimal
let numeroDecimal:number = 123456789.123456789; //Decimal

let texto:string = "aaa";
let textoLargo:string = `Ho\nla
mundo`; //Multilinea
let textoLargo2:string = `Ho\${numero}la`; //Interpolación de variables
let booleano:boolean = true;

let cualquiera:any; //Variable de cualquier tipo, igual que en Javascript (tambien puede tener null o undefined)
//Se pueden usar como tipos: unknown, null, undefinied, any

let array:number[] = [1, 2, 3]; //Array de numeros (solo de numeros), la forma de usar el array es la misma que en Javascript
let array2:Array<number> = [1, 2, 3]; //Igual
let array3:[number, string] = [1, "hola"]; //Array exactamente igual que los tipos especificados

enum Cual {este = 'a', otro = 'b', aquel = 'c'}; //Enum, igual que en Javascript
let variableEnum:Cual = Cual.este;

let objeto:Object = {nombre: "hola", edad: 30};
//objeto.numero = 5; //No se pueden usar valores que no ese han especificado
type Persona = { //Objeto que servira como plantilla
  nombre: string;
  edad?: number;
  readonly id: number;
  funcion: (date: Date) => void;
};
let objetoPlantilla: Persona = { //Declarando un objeto que tiene que cumplir la plantilla
  nombre: "hola",
  id: 1,
  funcion: (date: Date) => { console.log(date); }
};
let varios:Persona & {extra: string} = { nombre: "hola", id: 1, funcion: (date: Date) => { console.log(date); }, extra: "a"} //Variable que es de dos tipos, debiendo cumplir ambos

interface AlgoConTamagno { tamagno: number; };
interface Objeto extends AlgoConTamagno { nombre: string;};
let objeto2:Objeto = { nombre: "hola", tamagno: 10}; //Se puede usar la interface como plantilla para tipos

//Las funciones tambien tienen tipos fijos, tanto de entrada como de salida
function suma(a:number, b:number, opcional?:number, porDefecto=10):number { //Si no devolviese nada seria (): void, si la funcion fuese infinita seria (): never
    return a + b + (opcional || 0) + porDefecto;
}
console.log(suma(1, 2));

//La mayoria de cosas en general funcionan igual que en Javascript, con la principal diferencia de los tipos
