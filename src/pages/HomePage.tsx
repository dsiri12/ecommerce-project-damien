import axios from 'axios';
import { Header } from '../components/Header';
import './HomePage.css';
import {products} from '../../starting-code/data/products'
import { ProductsCard } from '../components/home/ProductsCard';

export const HomePage = () => {
  axios.get('http://localhost:3000/api/products')
    .then((response) => {
      console.log(response.data);
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