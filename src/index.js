import saudacao from './saudacao';

document.querySelector('.button').addEventListener('click', () => {
    console.log(saudacao('isaque'));
})

const nomes = ['ana', 'bruna', 'carla', 'erick'];

nomes.forEach((item) => console.log(item));
