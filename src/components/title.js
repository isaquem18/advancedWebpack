import './title.css';

class Title {
    create(text) {
        const h1 = document.createElement('h1');
        h1.setAttribute('id', 'title');
        h1.innerText = text;
        document.querySelector('body').appendChild(h1);
        const image = document.createElement('img');
        image.setAttribute('src', 'https://www.bambui.ifmg.edu.br/portal_padrao_joomla/joomla/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png');
        document.querySelector('body').appendChild(image);
    }
}

export default Title;
