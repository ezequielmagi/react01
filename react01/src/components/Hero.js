import './hero.css'
import arduino from '../assets/img/arduinor1.png'

function Hero() { 
  return(
    <div className='hero-container'>
      <div className="hero">
        <img src={arduino} alt="" />
        <h1>Funciones en Arduino</h1>
      </div>
    </div>
  )
 }

export default Hero