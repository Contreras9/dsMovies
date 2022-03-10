import { ReactComponent as GithubIcon } from '../../assets/img/github.svg';
import { ReactComponent as Logo } from '../../assets/img/cinema.svg';
import './styles.css';

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <Logo className='cinema' />
          <a href="/">
           <h1>Rotten Potatoes</h1>
          </a>
          <a href="https://github.com/limatainer" target="_blank" rel="noreferrer">
            <div className="dsmovie-contact-container">
              <p className="dsmovie-contact-link"></p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  )
}
export default Navbar;