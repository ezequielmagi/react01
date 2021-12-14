import './header.css'

function Header(){
  return(
    <div className='header-container'>
      <div className="header">
        <h1>LoTo</h1>
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