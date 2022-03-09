import { ReactComponent as GithubIcon } from '../../assets/img/github.svg';
import { ReactComponent as Logo } from '../../assets/img/cinema.svg';
import './styles.css';

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <Logo className='cinema' />
          <h1>DSMovie</h1>
          <a href="https://github.com/limatainer" target="_blank" rel="noreferrer">
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/limatainer</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  )
}
export default Navbar;