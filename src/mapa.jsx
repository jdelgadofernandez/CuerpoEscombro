import React, { PureComponent } from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet'
import { Popup } from 'react-leaflet'
import L from 'leaflet';
import Marcador from './img/logo.svg'
import Slide from 'react-reveal/Slide';
const coordenadas = [38.94088995528171, -3.242171126245705];

export default class mapa extends PureComponent {
  render() {
    return (
      <Slide bottom>
      <div>
        <h6 class="titulo">Donde encontrarnos</h6>
        <h1 class="subtitulo">Acercate a nuestra clinica</h1>
        <MapContainer
          center={[38.94088995528171, -3.242171126245705]}
          zoom={30}
          style={{
            height: '400px',
            width: '90%',
            margin: '70px auto',
            border: '7px solid #54c6e0',
            borderRadius: '15px',
            
          }} class="mapita"
         >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={coordenadas} icon={L.icon({ iconUrl: Marcador, iconSize: [33, 33], iconAnchor: [12, 41] })}>
            <Popup>
              Clinica Cuerpo escombro
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      </Slide>
    )
  }
}
