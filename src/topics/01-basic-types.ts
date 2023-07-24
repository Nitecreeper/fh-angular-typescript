let name: string = 'Jorge';

name = '123';

const constante: string = 'Texto';

console.log({name, constante});

let hpPoints: number | 'FULL' = 95;

hpPoints = 'FULL';

let isAlive: boolean = true;

console.log({hpPoints, isAlive});

const isVisible: boolean = false;
const tamaño: number = 6;
const nombre: string = 'Jorge'
const list: (number)[] = [1,2,3];
const cualquiera: any = 4;  // Aquí infiere el tipo de dato.

function saludo(): void{
    console.log( isVisible, typeof(isVisible));
    console.log( tamaño, typeof(tamaño));
    console.log( nombre, typeof(nombre));
    console.log( list, typeof(list));
    console.log( cualquiera, typeof(cualquiera));

}

saludo();

export{};