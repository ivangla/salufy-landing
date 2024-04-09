import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="logo_blanco_salufy.png" />
      </header>
      <main>
        <section className="section-main">
          <h2 className="mb-4">Gestiona tu negocio de forma sencilla</h2>
          <p>
            Si administras todo con un excel... ¡Esta es tu app! Salufy te
            ofrece una herramienta para gestionar agenda, citas, reservas y
            además te conectamos con nuevos usuarios.
          </p>
          <p>¡Prueba ahora nuestra App y comienza a mejorar tu negocio!</p>
          <button className="button-68 my-4">Quiero probar la App</button>
        </section>
        <svg
          class="editorial"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 150 28 "
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 
    58-18 88-18s
    58 18 88 18 
    58-18 88-18 
    58 18 88 18
    v44h-352z"
            />
          </defs>
          <g class="parallax1" transform="rotate(180 75 22)">
            <use xlinkHref="#gentle-wave" x="50" y="-2" fill="#58abc6" />
          </g>
          <g class="parallax2" transform="rotate(180 75 22)">
            <use xlinkHref="#gentle-wave" x="50" y="0" fill="#7ed3ed" />
          </g>
          <g class="parallax3" transform="rotate(180 75 22)">
            <use xlinkHref="#gentle-wave" x="50" y="-5" fill="#2481b2" />
          </g>
        </svg>

        <section className="section-how">
          <h3>¿Cómo funciona?</h3>
          <div className="d-flex flex-row">
            <div>
              <img src="https://placehold.co/32"></img>
            </div>
            <div className="flex-column">
              <h5>Crea tu perfil profesional</h5>
              <p>
                Dile a los usuarios qué servicios ofertas con todo tipo de
                detalle. Titualciones, especialidades, tipo de pago, precios,
                ubicaciones y muchas cosas más.
              </p>
            </div>
          </div>
          <div className="d-flex flex-row">
            <div>
              <img src="https://placehold.co/32"></img>
            </div>
            <div className="flex-column">
              <h5>Crea tu perfil profesional</h5>
              <p>
                Dile a los usuarios qué servicios ofertas con todo tipo de
                detalle. Titualciones, especialidades, tipo de pago, precios,
                ubicaciones y muchas cosas más.
              </p>
            </div>
          </div>
          <div className="d-flex flex-row">
            <div>
              <img src="https://placehold.co/32"></img>
            </div>
            <div className="flex-column">
              <h5>Crea tu perfil profesional</h5>
              <p>
                Dile a los usuarios qué servicios ofertas con todo tipo de
                detalle. Titualciones, especialidades, tipo de pago, precios,
                ubicaciones y muchas cosas más.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div>
              <h3>Empieza a descubrir los beneficios que aporta Salufy</h3>
              <img></img>
            </div>
            <div>
              <button>Empezar prueba gratis</button>
            </div>
          </div>
        </section>

        <section>
          <div>
            <img></img>
            <h3>Recordatorios</h3>
            <p>
              No tendrÃ¡s que volver a recordar la fecha y hora de la sesiÃ³n a
              tus usuarios. Salufy lo hace por tÃ­.
            </p>
          </div>
          <div>
            <img></img>
            <h3>Recordatorios</h3>
            <p>
              No tendrÃ¡s que volver a recordar la fecha y hora de la sesiÃ³n a
              tus usuarios. Salufy lo hace por tÃ­.
            </p>
          </div>
          <div>
            <img></img>
            <h3>Recordatorios</h3>
            <p>
              No tendrÃ¡s que volver a recordar la fecha y hora de la sesiÃ³n a
              tus usuarios. Salufy lo hace por tÃ­.
            </p>
          </div>
          <div>
            <img></img>
            <h3>Recordatorios</h3>
            <p>
              No tendrÃ¡s que volver a recordar la fecha y hora de la sesiÃ³n a
              tus usuarios. Salufy lo hace por tÃ­.
            </p>
          </div>
        </section>

        <section>
          <h2>Â¿QuÃ© opinan nuestros profesionales</h2>
          <div>Carrusel</div>
        </section>
      </main>
    </div>
  );
}

export default App;
