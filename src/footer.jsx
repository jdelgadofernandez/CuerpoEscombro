import React, { PureComponent } from 'react';
import Card from 'react-bootstrap/Card';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';

export default class footer extends PureComponent {
  render() {
    return (
        <MDBFooter className='footerEntero'>
        <MDBContainer className='p-4'>
          <section className='mb-4'>
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='facebook-f' className='redes'/>
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='twitter' className='redes'/>
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='google' className='redes'/>
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='instagram' className='redes'/>
            </MDBBtn>
          </section>
  
  
          <section className='mb-4'>
            <p>
            La Clínica de Fisioterapia "Cuerpo Escombro" se reserva el derecho de desaparecer en caso de que algun paciente o persona salga
            herida debido a algun problema con cualquiera de los cuidados que se realizan en dicha clinica. Para mas informacion por favor
            acudan en persona a quejarse.
            </p>
          </section>
        </MDBContainer>
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2024 Copyright:
          <a className='copy' href='https://www.linkedin.com/in/moowette/'>
         Moowette Designs
          </a>
        </div>
      </MDBFooter>
    );
  }
}
