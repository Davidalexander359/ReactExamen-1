import React from 'react';
import Img1 from '../../assets/zorro.png';
import Img2 from '../../assets/aguila.png';
import Img3 from '../../assets/pato.png';
import { SedeCard } from './SedeCard'; 

const sedes = [
  { id: 1, nombre: 'Norte', imagen: Img1 },
  { id: 2, nombre: 'Sur', imagen: Img2 },
  { id: 3, nombre: 'Oriente', imagen: Img3 },
];

const ListaSedes = () => {
  return (
    <div>
      <h2>Lista de Sedes</h2>
      <div className="sede-list">
        {sedes.map((sede) => (
          <SedeCard key={sede.id} nombre={sede.nombre} imagen={sede.imagen} />
        ))}
      </div>
    </div>
  );
};

export default ListaSedes;
