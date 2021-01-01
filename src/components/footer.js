import global from './global.png';
import github from './github.png';
import instagram from './instagram.png';

export default function  Footer() {
    return(
        <div className="footer-glob">
        <div className="footer">
            <a href="https://abdrahmanbadou-14cc8.web.app/" target="_blank"><img src={ global } alt="web"/></a>
            <a href="https://github.com/abdrahman04" target="_blank"><img src={ github } alt="git"/></a>
            <a href="https://www.instagram.com/abdrahmanbadou/" target="_blank" ><img src={ instagram } alt="insta" /></a>
        </div>
        <p>&copy; <span>abdrahman badou 2020</span></p>
        </div>
    );
}