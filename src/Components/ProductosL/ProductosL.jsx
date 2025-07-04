import userImg from '../../assets/zorro.png';
import userImg2 from '../../assets/aguila.png';
import userImg3 from '../../assets/discord.png';
import './ProductosL.css';
import { ProductosCard } from '../ProductosCard/ProductosCard';

const herramientas = [
  {
    id: 1,
    name: 'Herramienta',
    description: 'Marca Zorro',
    image: userImg,
  },
  {
    id: 2,
    name: 'Herramienta 2',
    description: 'Marca Águila',
    image: userImg2,
  },
  {
    id: 3,
    name: 'Herramienta 3',
    description: 'Colombiana',
    image: userImg3,
  },
];

export const ProductosL = () => {
  return (
    <section>
      {herramientas.map((herramienta) => (
        <ProductosCard
          key={herramienta.id}
          herramient={{
            id: herramienta.id,
            name: herramienta.name,
            description: herramienta.description,
            image: herramienta.image,
          }}
        />
      ))}
    </section>
  );
};
