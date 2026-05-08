import { Header } from '../components/Header';
import './HomePage.css';
import {products} from '../../starting-code/data/products'
import { ProductsCard } from '../components/home/ProductsCard';

export const HomePage = () => {
  fetch('http://localhost:3000/api/products')
    .then((response) => {
      response.json();
    }).then((data) => {
      console.log(data);
    });

  return ( 
    <>
      <Header />

      <div className="home-page">
        <div className="products-grid">

          {products.map((product)=>{
            return <ProductsCard key={product.id} product={product} />
          })}

        </div>
      </div>
    </>
  );
}