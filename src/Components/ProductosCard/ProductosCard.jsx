import { useState } from "react";
import './ProductosCard.css';
export const ProductosCard = ({ herramient }) => {
  const [isContacted, setIsContacted] = useState(false);
  const { id, name, description, image } = herramient;

  const handleClick = () => {
    setIsContacted(prev => !prev); 
  };

  console.log(`Tarjeta de ${name} fue renderizada`);

  return (
    <div className="card">
      <img className="image" src={image} alt={`Imagen de ${name}`} />
      <h2 className="name">{name}</h2>
      <p>{description}</p>
      <button id={`btn-${id}`} onClick={handleClick}>
        {isContacted ? ' Contactado' : ' Contactar'}
      </button>
    </div>
  );
};
