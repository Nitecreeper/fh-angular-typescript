interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

let skills: string[] = ['Bash', 'Counter', 'Healing'];

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
}

strider.hometown = 'Rivendell';

console.table(strider);


export{};