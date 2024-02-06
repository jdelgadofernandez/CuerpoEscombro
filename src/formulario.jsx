import React, { memo,useRef } from 'react'

import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBTextArea
} from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
import emailjs from '@emailjs/browser';


const formulario = memo(() => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bzwzl1g', 'template_tpbbea7', form.current, 'Sb1QrbgA29NMvYq_8')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div id="formulario">
            <h6 class="titulo">Contacta con nosotros</h6>
            <h1 class="subtitulo">Pide cita con nuestros profesionales</h1>
            <p class="descripcion">La Clínica de Fisioterapia "Cuerpo Escombro" se destaca como un espacio dedicado a la recuperación y bienestar físico integral. Con un enfoque especializado en la rehabilitación musculoesquelética, nuestro equipo de fisioterapeutas altamente capacitados trabaja de la mano con los pacientes para superar lesiones, mejorar la movilidad y promover la salud general.</p>
            <form ref={form} onSubmit={sendEmail}>
            <MDBRow className='mb-4'>
                    <MDBCol>
                        <MDBInput id='form6Example1' label='Nombre' name='name' contrast/>
                    </MDBCol>
                    <MDBCol>
                        <MDBInput id='form6Example2' label='Apellidos' name='surname' contrast/>
                    </MDBCol>
                </MDBRow>
                <MDBInput wrapperClass='mb-4' id='form6Example4' label='Direccion' name='address' contrast/>
                <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Correo Electronico' name='mail' contrast/>
                <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Telefono de contacto' name='number' contrast/>

                <MDBTextArea wrapperClass='mb-4' id='form6Example7' rows={5} label='Dinos que te ocurre' name='message' contrast />

                <MDBBtn id="botonForm" className='mb-4' type='submit' block>
                    Concretar cita
                </MDBBtn>
            </form>
        </div>
    );
})

export default formulario