import { useEffect, useState } from "react";
import "./App.css";


function App() {
  const [count, setCount] = useState();

  useEffect(() => {}, [count]);

  return (
    <div className="App">
      <body>
        <header>
          <h1>Temas Destacados</h1>
          <nav>
            <ul>
              <li onClick={()=>setCount(0)} className={`${ count===0 && 'style1' }`}>
                <a >
                  Aplicación del Enfoque Sistémico
                </a>
              </li>
              <li onClick={()=>setCount(1)} className={`${ count===1 && 'style1' }`}>
                <a >
                  Diferencia entre Datos e Información
                </a>
              </li>
              <li onClick={()=>setCount(2)} className={`${ count===2 && 'style1' }`}>
                <a >Sistemas de Información</a>
              </li>
              <li onClick={()=>setCount(3)} className={`${ count===3 && 'style1' }`}>
                <a >Cibernética</a>
              </li>
              <li onClick={()=>setCount(4)} className={`${ count===4 && 'style1' }`}>
                <a >Teoría de la Información</a>
              </li>
              <li onClick={()=>setCount(5)} className={`${ count===5 && 'style1' }`}>
                <a>Teoría de Juegos</a>
              </li>
              <li onClick={()=>setCount(6)} className={`${ count===6 && 'style1' }`}>
                <a>Teoría de la Decisión</a>
              </li>
              <li onClick={()=>setCount(7)} className={`${ count===7 && 'style1' }`}>
                <a>Ingeniería de Sistemas</a>
              </li>
              <li onClick={()=>setCount(8)} className={`${ count===8 && 'style1' }`}>
                <a>
                  Investigación de Operaciones
                </a>
              </li>
              <li onClick={()=>setCount(9)} className={`${ count===9 && 'style1' }`}>
                <a>Informática</a>
              </li>
              <li onClick={()=>setCount(10)} className={`${ count===10 && 'style1' }`}>
                <a>Teoría de la Automatización</a>
              </li>
              <li onClick={()=>setCount(11)} className={`${ count===11 && 'style1' }`}>
                <a>Simulación</a>
              </li>
              <li onClick={()=>setCount(12)} className={`${ count===12 && 'style1' }`}>
                <a>Programación Neuro-Lingüística (PNL)</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section  id="enfoque-sistemico"  className={`${count===0 && 'style'}`} >
            <h2>Aplicación del Enfoque Sistémico</h2>
            <p>
              En esta sección se hablará sobre la definición del enfoque
              sistémico y cómo se aplica en diferentes campos, como la gestión
              empresarial, la planificación urbana y la ingeniería de sistemas.
            </p>
          </section>
          <section className={`${count===1 && 'style'}`} id="datos-e-informacion">
            <h2>Diferencia entre Datos e Información</h2>
            <p>
              En esta sección se explicará la diferencia entre los datos y la
              información, y por qué es importante entender esta diferencia en
              el contexto de los sistemas de información.
            </p>
          </section>
          <section className={`${count===2 && 'style'}`} id="sistemas-informacion">
            <h2>Sistemas de Información</h2>
            <p>
              En esta sección se hablará sobre la importancia de los sistemas de
              información en la sociedad actual, cómo funcionan y algunos
              ejemplos de sistemas de información comunes.
            </p>
          </section>
          <section className={`${count===3 && 'style'}`} id="cibernetica">
            <h2>Cibernética</h2>
            <p>
              En esta sección se presentará una breve historia de la
              cibernética, sus principales exponentes y su relación con la
              teoría de la información.
            </p>
          </section >
          <section id="teoria-informacion" className={`${count===4 && 'style'}`}>
            <h2>Teoría de la Información</h2>
            <p>
              En esta sección se explicará la teoría de la información y cómo se
              aplica en la comunicación, la estadística, la criptografía y otros
              campos relacionados.
            </p>
          </section>
          <section id="teoria-juegos" className={`${count===5 && 'style'}`}>
            <h2>Teoría de Juegos</h2>
            <p>
              En esta sección se hablará sobre la teoría de juegos y cómo se
              utiliza para modelar situaciones de conflicto y cooperación en la
              economía, la política y otros campos.
            </p>
          </section>
          <section id="teoria-decision" className={`${count===6 && 'style'}`}>
            <h2>Teoría de la Decisión</h2>
            <p>
              En esta sección se presentará la teoría de la decisión y su
              aplicación en la toma de decisiones en diferentes campos, como la
              economía, la psicología y la ingeniería.
            </p>
          </section>
          <section id="ingenieria-sistemas" className={`${count===7 && 'style'}`}>
            <h2>Ingeniería de Sistemas</h2>
            <p>
              En esta sección se hablará sobre la ingeniería de sistemas y cómo
              se aplica en la planificación, diseño, implementación y
              mantenimiento de sistemas complejos en diferentes campos, como la
              industria, la salud y la energía.
            </p>
          </section>
          <section id="investigacion-operaciones" className={`${count===8 && 'style'}`}>
            <h2>Investigación de Operaciones</h2>
            <p>
              En esta sección se explicará qué es la investigación de
              operaciones y cómo se utiliza en la optimización de procesos y la
              toma de decisiones en diferentes campos, como la logística, la
              producción y el transporte.
            </p>
          </section>
          <section id="informatica" className={`${count===9 && 'style'}`}>
            <h2>Informática</h2>
            <p>
              En esta sección se hablará sobre la informática y sus principales
              áreas de estudio, como la programación, la base de datos, la
              inteligencia artificial y la seguridad informática.
            </p>
          </section>
          <section id="teoria-automatizacion" className={`${count===10 && 'style'}`}>
            <h2>Teoría de la Automatización</h2>
            <p>
              En esta sección se presentará la teoría de la automatización y
              cómo se aplica en el control de procesos industriales y en la
              robótica.
            </p>
          </section>
          <section id="simulacion" className={`${count===11 && 'style'}`}>
            <h2>Simulación</h2>
            <p>
              En esta sección se explicará qué es la simulación y cómo se
              utiliza en la modelación de sistemas complejos en diferentes
              campos, como la ingeniería, la medicina y la economía.
            </p>
          </section>
          <section id="pnl" className={`${count===12 && 'style'}`}>
            <h2>Programación Neuro-Lingüística (PNL)</h2>
            <p>
              En esta sección se hablará sobre la programación neuro-lingüística
              y cómo se utiliza para mejorar la comunicación, el liderazgo y el
              aprendizaje.
            </p>
          </section>
        </main>
        <footer>
          <p>Derechos reservados © </p>
        </footer>
      </body>
    </div>
  );
}

export default App;
