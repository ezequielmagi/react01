import './header.css'
import imgctab from '../assets/img/imgctab.png'

function Header(){
  return(
    <div className='header-container'>
      <div className="header">
        <img src={imgctab} alt="logo" />
      <nav>
        <ul>
          <li>Iniciar Sesion</li>
          <li>Registrarse</li>
        </ul>
      </nav>
      </div>
    </div>
  )
}

export default Header