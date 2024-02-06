import React, { PureComponent } from 'react'
import { MDBBadge } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import Slide from 'react-reveal/Slide';
export default class precios extends PureComponent {
  render() {
    return (
      <Slide bottom>
      <div>
         <h6 class="titulo">Nuestros precios</h6>
            <h1 class="subtitulo">Elige la tarifa que mejor se adapte a ti</h1>
            <p class="descripcion">En la Clínica de Fisioterapia "Cuerpo Escombro", 
            cada nivel ha sido cuidadosamente creado para adaptarse a diversas necesidades, garantizando que nuestros pacientes encuentren 
            el plan de atención que mejor se ajuste a sus objetivos de salud y bienestar.</p>
       <div id="precios">
        <div >
            <h3>Cuidado Esencial - Nivel Básico</h3>
            <h2>90€/mes</h2>
            <hr></hr>
                <h4>Incluye:</h4>
                <ul>
                    <li>Evaluación inicial por un fisioterapeuta.</li>
                    <li>Sesiones de fisioterapia personalizadas.</li>
                    <li>Orientación sobre ejercicios para el cuidado continuo en el hogar.</li>
                    <li>Acceso a instalaciones modernas y un entorno acogedor.</li>
                </ul>
                <MDBBtn id='esencial'>Informate</MDBBtn>
        </div>
        <div id="mejor">
            <h3>Recuperación Integral - Nivel Intermedio</h3>
            <h2>120€/mes</h2> <MDBBadge className='ms-2' id='etiquet'>MEJOR PRECIO</MDBBadge>
            <hr></hr>
                <h4>Incluye:</h4>
                <ul>
                    <li>Evaluaciones detalladas para comprender las necesidades específicas.</li>
                    <li>Sesiones de fisioterapia avanzada.</li>
                    <li>Técnicas especializadas según sea necesario.</li>
                    <li>Seguimiento continuo del progreso.</li>
                    <li>Acceso a instalaciones modernas y un entorno acogedor.</li>
                </ul>
                <MDBBtn id="bMejor">Informate</MDBBtn>
        </div>
        <div>
            <h3>Maestria en Rehabilitación - Nivel Avanzado</h3>
            <h2>200€/mes</h2>
            <hr></hr>
                <h4>Incluye:</h4>
                <ul>
                    <li>Evaluaciones exhaustivas para un diagnóstico preciso.</li>
                    <li>Sesiones de fisioterapia avanzada y especializada.</li>
                    <li>Utilización de tecnologías innovadoras para la rehabilitación.</li>
                    <li>Enfoque integral en la recuperación.</li>
                    <li>Seguimiento constante del progreso y ajuste del plan de tratamiento.</li>
                    <li>Acceso a instalaciones modernas y atención personalizada de un equipo altamente especializado.</li>
                </ul>
                <MDBBtn id="avan">Informate</MDBBtn>
        </div>
        </div>
      </div>
      </Slide>
    )
  }
}
