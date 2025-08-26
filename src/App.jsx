import './App.css'
import logoUts from './assets/img/logo_uts.png'
import chicaUteista from './assets/img/chica-uteista.png'
import imgSection2 from './assets/img/imgsection2.jpg'
import profile1 from './assets/img/perfil2.jpg'
import profile2 from './assets/img/perfil1.jpg'
import profile3 from  './assets/img/perfil3.jpg'
import { useState } from 'react'


function App() {

  const [frase, setFrase] =  useState('Click Aqui')

    async function getAphrase() {
    const result = await fetch('https://api.adviceslip.com/advice')
    const data =await result.json();
    const {advice} = data.slip;
    setFrase(advice);
    console.log(advice);
    console.log(data);
  }

  // const getData = async () => {
  //   const result = await fetch('https://api.adviceslip.com/advice')
  //   const data = await result.json();
  //   const {advice} = data.slip;
  //   setFrase(advice)
  //   console.log(advice);
  //   console.log(data);
  // }


  return (
    <>
      {/* header de la pagina */}
      <header className='bg-gray-100 flex justify-evenly shadow-xl pb-3'>
        <img className='w-[200px]' src={logoUts} alt="Logo UTS" />

        {/* barra de navegacion del sitio web */}
        <nav className='flex justify-between gap-10 p-10 items-center'>

          <a className="hover:bg-green-400 hover:text-whipx-6 py-2 rounded-[15px] transition-all duration-300 ease-out hover:bg-green-400 hover:text-white motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.02] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-600te px-10 py-2 rounded-[15px]" href="">
            Inicio
            </a>
          <a className="px-6 py-2 rounded-[15px] transition-all duration-300 ease-out hover:bg-green-400 hover:text-white motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.02] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-600" href="">
            Estudiantes
            </a>
          <a className="px-6 py-2 rounded-[15px] transition-all duration-300 ease-out hover:bg-green-400 hover:text-white motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.02] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-600" href="">
            Docentes
            </a>
          <a className="px-6 py-2 rounded-[15px] transition-all duration-300 ease-out hover:bg-green-400 hover:text-white motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.02] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-600" href="">
            Nosotros
          </a>
          <a className="px-6 py-2 rounded-[15px] transition-all duration-300 ease-out hover:bg-green-400 hover:text-white motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.02] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-600" href="">
            Investigacion
          </a>
        </nav>
        <button  className='bg-green-600 hover:bg-green-800 px-5 py-2 h-10 mt-10 rounded-[15px] hover:text-white'>soy Uteista</button>
      </header>

      {/* este es el cuerpo del sitio */}
      <main className='flex flex-col items-center gap-20'>

        {/* esta es la primera seccion en la cual se encuentra la chica uteista y el buttom de doy uteista */}
        <div className='flex justify-center items-center my-[40px] mx-[60px] gap-40'>
          <section className='w-[400px] flex flex-col gap-[20px]'>
            <h1 className='text-4xl'>construimos los futuros lideres del país</h1>
            <p>
              Las unidades Tecnologícas de santander se dedicara a la formacion de persona con sentido etico. 
              Pensamiento logico y critico
            </p>
            <button onClick={getAphrase} className='text-white bg-green-700 rounded-[25px] py-[15px] text-center shadow-xl transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-green-800 hover:text-white' href="#">{frase}</button>
          </section>
          <img className='w-50% h-[500px] rounded-[15px] shadow-xl'src={chicaUteista} alt="imagen de una chica-uteista"  
          />
        </div>

        {/* esta es la segunda secccion en la cual se encuentra un panel con una imagen y una frase de Donald Trump */}
        <section className='grid bg-green-700 w-[1025px] rounded-[15px] gap-[20px] text-white p-[20px] mb-[40px] shadow-xl transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-green-800 '>
          <div>
            <img className='rounded-[15px]' src={imgSection2} alt="convenios internacionales" height="315" />
          </div>
          <h2>Convenios internacionales</h2>
          <p>
            Intercambio de estudiantes de pregrado y posgrado, personal academico, investigador y administrativo. 
            Desarrollo de proyectos y conjuntos de carácter académico cultural
          </p>
          <p><em>-Donald Trump</em></p>
        </section>

        {/* esta es la tercera seccion en la cual se responde el porque la generacion uteista es especial*/}
        <section className='w-[1050px] mb-[40px] '>
          <h2 className='text-4xl'>Porque la generación uteista es especial</h2>
          <div className='flex justify-between mt-[20px] ml-[20px] '>

            <div className='p-[20px] w-[250px] h-[250px] flex flex-col bg-black-300 rounded-[15px] gap-1 bg-gray-300 shadow-xl transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02]'>
              <p>🧪</p>
              <h3 className='text-2xl'>Sentido Etico</h3>
              <p>Cuenta con un comportamiento etico y empatico con cociencia de aportar y no afectar a otras personas</p>
            </div>

            <div className='p-[20px] w-[250px] h-[250px] flex flex-col bg-white rounded-[15px] gap-1 bg-gray-300 shadow-xl transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02]'>
              <p>🙂</p>
              <h3 className='text-2xl'>Pensamiento critico</h3>
              <p>Tiene el deseo de buscar, la paciencia para dudar, la aficion de meditar</p>
            </div>

            <div className='p-[20px] w-[250px] h-[250px] flex flex-col  rounded-[15px] gap-1 bg-gray-300 shadow-xl transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02]'>
              <p>❤️</p>
              <h3 className='text-2xl'>emprendimiento</h3>
              <p>Con un espiritu inquieto, usando su creatividad y viendo la oportunidad de ofrecer una solución</p>
            </div>
          </div>
        </section>

{/* este es el section 3, donde se encuentra la bolsa de empleo */}
<section className='w-[1050px] mb-[40px]'>
  <h2 className='text-3xl'>Bolsa de Empleo - Mejores estudiantes</h2>
  <div className='flex justify-between mt-[20px] ml-[20px]'>
    {/* perfil numero 1(Kevin Mejia) */}
    <div className='m-[20px] p-[15px] w-[250px] h-[400px] rounded-[15px] gap-3 bg-gray-200 shadow-xl'>
      <div className="flex items-center justify-center h-[150px]">
        <img
          className="rounded-[15px] w-[150px] h-[150px]"
          src={profile1}
          alt="Kevin Mejia"
        />
      </div>
      <h3 className='text-2xl'>Kevin Mejia</h3>
      <ul>
        <li className='flex items-center gap-2'><span aria-label="Node.js">🟢</span> Node JS</li>
        <li className='flex items-center gap-2'><span aria-label="React">⚛️</span> React JS</li>
        <li className='flex items-center gap-2'><span aria-label="Java">☕</span> Java</li>
        <li className='flex items-center gap-2'><span aria-label="Vue">🟩</span> Vue</li>
      </ul>
      <div className='flex justify-between'>
        <p>$50/h</p>
        <button className='bg-green-700 text-white rounded-[15px] px-[8px] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02]'>CONTRATAR</button>
      </div>
    </div>

    {/* perfil numero 2(Andres Felipe Galvis) */}
    <div className='m-[20px] p-[15px] w-[250px] h-[400px] rounded-[15px] bg-gray-200 shadow-xl'>
      <div className="flex items-center justify-center h-[150px]">
        <img
          className="rounded-[15px] w-[150px] h-[150px]"
          src={profile2}
          alt="Andres Felipe Galvis"
        />
      </div>
      <h3 className='text-2xl'>Andres Felipe Galvis</h3>
      <ul>
        <li className='flex items-center gap-2'><span aria-label="Python">🐍</span> Python</li>
        <li className='flex items-center gap-2'><span aria-label="Angular">🅰️</span> Angular</li>
        <li className='flex items-center gap-2'><span aria-label="SQL">🗄️</span> SQL</li>
        <li className='flex items-center gap-2'><span aria-label="MongoDB">🍃</span> MongoDB</li>
      </ul>
      <div className='flex justify-between'>
        <p>$50/h</p>
        <button className='bg-green-700 text-white rounded-[15px] px-[8px] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02]'>CONTRATAR</button>
      </div>
    </div>

    {/* perfil numero 3(Nicolas Picon) */}
    <div className='m-[20px] p-[10px] py-[15px] w-[250px] h-[400px] rounded-[15px] bg-gray-200 shadow-xl '>
      <div className="flex items-center justify-center h-[150px]">
        <img
          className="rounded-[15px] w-[150px] h-[150px]"
          src={profile3}
          alt="Nicolas Picon"
        />
      </div>
      <h3 className='text-2xl'>Nicolas Picon</h3>
      <ul>
        <li className='flex items-center gap-2'><span aria-label="English C1">🇬🇧</span> Bilingüe English C1</li>
        <li className='flex items-center gap-2'><span aria-label="React">⚛️</span> React JS</li>
        <li className='flex items-center gap-2'><span aria-label="Laravel">🧱</span> Laravel</li>
        <li className='flex items-center gap-2'><span aria-label=".NET">🟣</span> .NET</li>
      </ul>
      <div className='flex justify-between'>
        <p>$60/h</p>
        <button className='bg-green-700 text-white rounded-[15px] px-[8px] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02]'>CONTRATAR</button>
      </div>
    </div>
  </div>
</section>

      </main>

      <footer className='bg-green-700 flex justify-center gap-2 rounded-[15px] p-[10px] m-[50px] shadow-xl text-white '>
        <p>Copyright &copy; Unidades Tecnologícas de Santander</p>
      </footer>
    </>
  )
}

  
export default App
