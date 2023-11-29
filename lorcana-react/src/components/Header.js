import './Header.css';
import logo from '../images/the-ink-meta-icon.png'

function Header() {
    return (
      <div className='header'>
        <div className='title'>
        <img className='logo' src={logo} alt='The Ink Meta Logo' />
            <a href='/'>
              <h3>TheInkMeta.com</h3>
            </a>
        </div>
      </div>
    );
  }
  
  export default Header;