function addNumbers(a: number, b: number): number{
    return a + b;
}

const addNumbersArrow = (a: number, b:number): string => {
    return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number{
    return firstNumber * base;
}

const result: string = addNumbers(1,2).toString();
const result2: string = addNumbersArrow(3,4);
const multiplyResult: number = multiply(2);

console.log({result, result2, multiplyResult});


interface Character{
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number): void => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

strider.showHp();

healCharacter(strider, 10);

strider.showHp();


export{}