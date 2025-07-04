import React from 'react';

export const SedeCard = ({ nombre, imagen }) => {
  return (
    <div className="card">
      <img src={imagen} alt={`Sede ${nombre}`} className="image" />
      <h3>{nombre}</h3>
    </div>
  );
};
