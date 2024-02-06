import React from 'react';
import sanitas from './img/sanitas.svg';
import axa from './img/axa.svg';
import maphre from './img/maphre.svg';
import adeslas from './img/adeslas.svg';
import allianz from './img/allianz.svg';
import { MDBBtn } from 'mdb-react-ui-kit';
export default function portada() {
    return (
        <div>

            
            <h1 class="subtitulo"> Bienvenid@ a Cuerpo Escombro</h1>
            <p class="descripcion">La Clínica de Fisioterapia "Cuerpo Escombro" se destaca como un espacio dedicado a la recuperación y bienestar físico integral. Con un enfoque especializado en la rehabilitación musculoesquelética, nuestro equipo de fisioterapeutas altamente capacitados trabaja de la mano con los pacientes para superar lesiones, mejorar la movilidad y promover la salud general.</p>
            <p id="tituloP">Aseguradoras que trabajan con nosotros</p>
            <div id="divTabla">
            <table class="tablaP">
                <thead>
                    <tr>
                        <td class="tg-0lax"><a href="https://www.sanitas.es"><img class="seguros" src={sanitas} /></a></td>
                        <td class="tg-0lax"><a href="https://www.axa.es"><img class="seguros" src={axa} /></a></td>
                        <td class="tg-0lax"><a href="https://segurosmapfre.mapfre.es/"><img class="seguros" src={maphre} /></a></td>
                        <td class="tg-0lax"><a href="https://www.segurcaixaadeslas.es"><img class="seguros" src={adeslas} /></a></td>
                        <td class="tg-0lax"><a href="https://www.allianz.es"><img class="seguros" src={allianz} /></a></td>
                    </tr>
                </thead>
            </table>
            <a href='#formulario'><MDBBtn id='botonP'>Pide cita ya </MDBBtn></a>
            </div>
        </div>

    )
}
