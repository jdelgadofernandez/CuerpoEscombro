import React, { PureComponent } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBPopover, MDBPopoverBody, MDBPopoverHeader
} from 'mdb-react-ui-kit';
import { MDBTooltip } from 'mdb-react-ui-kit';
import trabajador1 from './img/trabajador1.jpg'
import trabajador2 from './img/trabajador2.jpg'
import trabajador3 from './img/trabajador3.jpg'
import trabajador4 from './img/trabajador4.jpg'
import trabajador5 from './img/trabajador5.jpg'
import trabajador6 from './img/trabajador6.jpg'
import trabajador7 from './img/trabajador7.jpg'
import trabajador8 from './img/trabajador8.jpg'
import Fade from 'react-reveal/Fade';
export default class equipo extends PureComponent {
    render() {
        return (
            <Fade right>
                <div>
                    <h6 class="titulo">Nuestros personal</h6>
                    <h1 class="subtitulo">Conoce a quien te va a alegrar la vida</h1>
                    <p class="descripcion">Nuestros fisioterapeutas brindan orientación sobre ejercicios terapéuticos, ergonomía y hábitos saludables para empoderar a los pacientes a mantener un estilo de vida activo y evitar posibles lesiones.</p>

                    <div id="gentes">
                        <MDBCard className='gente'>
                        <MDBTooltip tag='a'  title="Fisioterapeuta Principal"> 
                            <MDBCardImage src={trabajador1} position='top' alt='...' />
                            <MDBCardBody>
                            <MDBCardTitle>      Toad Toadstool </MDBCardTitle>                            </MDBCardBody>
                            </MDBTooltip>
                        </MDBCard>
                        <MDBCard className='gente'>
                        <MDBTooltip tag='a'  title="Fisioterapeuta Clínico"> 
                            <MDBCardImage src={trabajador2} position='top' alt='...' />
                            <MDBCardBody>
                            <MDBCardTitle>      Octavios Arms </MDBCardTitle>                            </MDBCardBody>
                            </MDBTooltip>
                        </MDBCard>

                        <MDBCard className='gente'>
                        <MDBTooltip tag='a'  title="Especialista en Terapia Manual"> 
                            <MDBCardImage src={trabajador3} position='top' alt='...' />
                            <MDBCardBody>
                            <MDBCardTitle>      Dr.Yasuo Feederico </MDBCardTitle>                            </MDBCardBody>
                            </MDBTooltip>
                        </MDBCard>

                        <MDBCard className='gente'>
                        <MDBTooltip tag='a'  title="Coordinador de Programas de Ejercicio"> 
                            <MDBCardImage src={trabajador4} position='top' alt='...' />
                            <MDBCardBody>
                            <MDBCardTitle>     Esteven Cuadrado </MDBCardTitle>                            </MDBCardBody>
                            </MDBTooltip>
                        </MDBCard>
                        <MDBCard className='gente'>
                        <MDBTooltip tag='a'  title="Asistente de Fisioterapia"> 
                            <MDBCardImage src={trabajador5} position='top' alt='...' />
                            <MDBCardBody>
                            <MDBCardTitle>      Joana LaLoca </MDBCardTitle>                            </MDBCardBody>
                            </MDBTooltip>
                        </MDBCard>

                        <MDBCard className='gente'>
                        <MDBTooltip tag='a'  title="Especialista en Rehabilitación Deportiva"> 
                            <MDBCardImage src={trabajador6} position='top' alt='...' />
                            <MDBCardBody>
                            <MDBCardTitle>      Lance Vance </MDBCardTitle>                            </MDBCardBody>
                            </MDBTooltip>
                        </MDBCard>

                        <MDBCard className='gente'>
                        <MDBTooltip tag='a'  title="Coordinador de Servicio al Cliente"> 
                            <MDBCardImage src={trabajador7} position='top' alt='...' />
                            <MDBCardBody>
                            <MDBCardTitle>      Saul FortySeven </MDBCardTitle>                            </MDBCardBody>
                            </MDBTooltip>
                        </MDBCard>

                        <MDBCard className='gente'>
                        <MDBTooltip tag='a'  title="Especialista en Tecnologías de Rehabilitación"> 
                            <MDBCardImage src={trabajador8} position='top' alt='...' />
                            <MDBCardBody>
                            <MDBCardTitle>      Robert Nose </MDBCardTitle>                            </MDBCardBody>
                            </MDBTooltip>
                        </MDBCard>
                    </div>

                </div>
            </Fade>
        )
    }
}
