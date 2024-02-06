import React, { PureComponent } from 'react'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import Imagen1 from './img/imagen1.png'
import Imagen2 from './img/imagen2.png'
import Imagen3 from './img/imagen4.png'
import Fade from 'react-reveal/Fade';
export default class testC extends PureComponent {
    render() {
        return (
            <Fade left>
            <div>
                <h6 class="titulo">Nuestros Servicios</h6>
                <h1 class="subtitulo">Los servicios mas solicitados</h1>
                <p class="descripcion">En "Cuerpo Escombro", nos enorgullece ofrecer un ambiente acogedor y moderno, donde la atención personalizada es una prioridad. Nuestro equipo se esfuerza por proporcionar tratamientos efectivos y adaptados a las necesidades individuales de cada paciente, utilizando técnicas avanzadas de fisioterapia y equipos de última generación.</p>

                <MDBCarousel showControls showIndicators id='carousel'>
                    <MDBCarouselItem itemId={1} interval={2000}>
                        <img src={Imagen1} className='d-block w-100' alt='...' />
                        <MDBCarouselCaption className="texto">
                            <h5 class="tituloC">Trabajo de destruccion de Espalda</h5>
                            <p class="descripcionC"> Este método está diseñado para abordar de manera efectiva las condiciones musculoesqueléticas en la zona lumbar y cervical. Nuestro equipo de fisioterapeutas altamente capacitados utiliza técnicas avanzadas de rehabilitación, terapia manual y ejercicios específicos para fortalecer la musculatura, mejorar la movilidad y aliviar el dolor en la espalda</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={2} interval={2000}>
                        <img src={Imagen2} className='d-block w-100' alt='...' />

                        <MDBCarouselCaption className="texto">
                            <h5 class="tituloC">Reconstrucion del craneo con Martillo Neumatico</h5>
                            <p class="descripcionC"> La reconstrucción craneal es un procedimiento delicado que implica la corrección de deformidades, lesiones traumáticas o defectos congénitos en el cráneo. Este tipo de cirugía se realiza por profesionales altamente capacitados, como neurocirujanos o cirujanos plásticos, utilizando técnicas quirúrgicas avanzadas y materiales específicos para garantizar la salud y el bienestar del paciente.</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={3} interval={2000}>
                        <img src={Imagen3} className='d-block w-100' alt='...' />
                        <MDBCarouselCaption className="texto">
                            <h5 class="tituloC">Actualizacion del sistema nervioso central</h5>
                            <p class="descripcionC"> La "Actualización del sistema nervioso central", los avances científicos y tecnológicos han permitido el desarrollo de una técnica vanguardista para optimizar y potenciar las capacidades del sistema nervioso central humano. Mediante la aplicación de nanotecnología y dispositivos neurales de última generación, los expertos pueden realizar intervenciones no invasivas para mejorar la velocidad de procesamiento cerebral, la memoria, e incluso para optimizar el equilibrio emocional.</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarousel>
            </div>
            </Fade>
        );
    }
}
