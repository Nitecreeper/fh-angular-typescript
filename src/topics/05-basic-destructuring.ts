interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const song = 'New Song';

const { song: anotherSong, songDuration: duration, details } = audioPlayer;
const { author } = details;


console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author: ', author);

// Desestructuración de arreglos.

// Sin desestructuración...
// const dbz: string[] = ['Goku', 'Vegetta', 'Trunks'];
// const trunks = dbz[3] || 'No existe personaje';
// console.log('Pers onaje 3: ', trunks);

// Con desestructuración...
const [, , trunks = 'Not found']: string [] = ['Goku', 'Vegetta', 'Trunks'];

console.log('Personaje 3: ', trunks);









export{};