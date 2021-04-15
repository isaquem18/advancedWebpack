import './index.scss';
import image from './bob.jpg';

const title = document.createElement('h1');
title.innerHTML = 'este e o titulo';
document.querySelector('body').appendChild(title);

const p = document.createElement('p');
p.innerHTML = 'Lorem ipsum dolor sit amet <span>consectetur adipisicing elit</span>. Officia labore ipsam omnis, ducimus praesentium architecto laboriosam necessitatibus nesciunt aut placeat ad voluptatem repudiandae tempora fugit quidem. Dolorum iure debitis quaerat!';
document.querySelector('body').appendChild(p);

const bob = document.createElement('img');
bob.setAttribute('src', image);
document.querySelector('body').appendChild(bob);