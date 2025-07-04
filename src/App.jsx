import {Sidebar} from './Components/Sidebar/Sidebar';
import { ProductosL } from './Components/ProductosL/ProductosL';
// import {ListaSedes }from'./Components/ListasSedes/ListaSedes';
export default function App() {
  return (
    <div className="app">
      <Sidebar/>
      <div className="main">
     <ProductosL/>
    
      </div>
    </div>
  );
}
