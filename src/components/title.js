import './title.css';
import './parag.scss';
import monkey from '../assets/monk.jpg'; 

//const { resolve } = require('path');

class Title {
    create(text) {
        const h1 = document.createElement('h1');
        h1.setAttribute('id', 'title');
        h1.innerText = text;
        document.querySelector('body').appendChild(h1);
        const image = document.createElement('img');
        image.setAttribute('src', 'https://www.bambui.ifmg.edu.br/portal_padrao_joomla/joomla/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png');
        document.querySelector('body').appendChild(image);

        const image2 = document.createElement('img');
        image2.setAttribute('src', monkey);
        document.querySelector('body').appendChild(image2);


        const lorem = document.createElement('p');
        lorem.innerHTML = 'Lorem ipsum dolor sit amet, consectetur <span>adipisicing elit. Mollitia</span> nihil quas impedit fuga quisquam! Sed cum minus ';
        document.querySelector('body').appendChild(lorem);
    }
}

export default Title;
