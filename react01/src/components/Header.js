import './header.css'

function Header(){
  return(
    <div className='header-container'>
      <div className="header">
        <img src="./assets/img/imgctab.png" alt="" />
      <nav>
        <ul>
          <li>Iniciar sesion</li>
          <li>Registrarse</li>
        </ul>
      </nav>
      </div>
    </div>
  )
}

export default Header