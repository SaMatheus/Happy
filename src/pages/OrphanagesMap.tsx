import React from 'react';

// MAP
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

//ICONS
import { FiPlus } from 'react-icons/fi';

// ROUTES
import { Link } from 'react-router-dom';

// STYLES
import '../styles/pages/orphanages-map.css';

import mapMarkerImg from '../images/map-marker.svg';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Osasco</strong>
          <span>São Paulo</span>
        </footer>
      </aside>
      <MapContainer
        center={[-23.5629637, -46.8243536]} // Longetude e Latitude da região
        zoom={15} // Zoom encontrado na url do google maps, por default deixa 15
        style={{ width: '100%', height: '100%' }} // Estilo
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </MapContainer>
      <Link to="" className="create-orphanate">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
