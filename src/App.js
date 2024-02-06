import './App.css';

import Test from './navegacion'
import Portada from './portada';
import Formulario from './formulario';
import Pie from './footer'
import Trabajos from './trabajos';
import Equipo from './equipo'
import Mapa from './mapa'
import Precios from './precios'
import Fade from 'react-reveal/Fade';
import Particulas from './particulas';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "leaflet/dist/leaflet.css";
import { useState, useEffect, CSSProperties } from "react";
import RiseLoader from "react-spinners/GridLoader";
function App() {


  const [loading,setLoading] = useState(false)
  useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{
  setLoading(false)
  
  },3000)
  
  },[])

  return (
    
    <div className="App">
      {
              loading?
              <RiseLoader
                color={'#ffffff'}
                loading={loading}
                size={100}
                margin={100}
                id='loader'
              />:
              <div>
              <Particulas></Particulas>  
              <div id="navegador">
                <Test />
              </div>
              <Fade>
              <div id="portada">
                <Portada />
              </div>
        
              <div id="servicios">
                <Trabajos />
              </div>
        
              <div id="personal">
                
                <Equipo />
              </div>
        
              <div id="pricing">
        
                <Precios />
              </div>
        
              <div id="lugar">
                <Mapa />
              </div>
              
              <div id="contacto">
                <Formulario />
              </div>
        
              <div id="pie">
                <Pie></Pie>
        
              </div>
              </Fade>
              </div>
      }

    </div>
    
  );
}

export default App;
