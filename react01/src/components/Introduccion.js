import './introduccion.css'

function Intro(){
  return(
    <div className='intro-container'>
      <div id='intro' className="intro">
        <h1>Introduccion</h1>
        <h2>Definición:</h2>
        <p>Una función es un bloque de código que tiene un nombre y un conjunto de instrucciones que son ejecutadas cuando se llama a la función. Son funciones <b>setup()</b>  y <b>loop()</b>  de las que ya se ha hablado. Las funciones de usuario pueden ser escritas para realizar tareas repetitivas y para reducir el tamaño de un programa. Segmentar el código en funciones permite crear piezas de código que hacen una determinada tarea y volver al área del código desde la que han sido llamadas.</p>
        <br />
        <br />
      </div>
        <h1 className='ejemplo'><span className='red'>tipo</span> nombreDeLaFuncion( argumento1, argumento2... argumento_n)</h1>
        <br />
        <br />
        <p>Las funciones se declaran asociadas a un tipo de valor. Este valor será el que devolverá la función, por ejemplo <b>int</b> se utilizará cuando la función devuelva un dato numérico de tipo entero. Si la función no devuelve ningún valor entonces se colocará delante la palabra <b>void</b>, que significa “función vacía”</p>
        <br />
        <br />
        <h1 className='ejemplo'><span className='red'>int</span> sumaDeValores(int a, int b) </h1>
    </div>
  )
}

export default Intro