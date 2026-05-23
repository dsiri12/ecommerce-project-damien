import { Header } from "../components/Header";
import "./HomePage.css";
import { ProductsCard } from "../components/home/ProductsCard";
import { useProductsAxiosAsyncAwait } from "../hooks/useProductsAxiosAsyncAwait";

export const HomePage = () => {
  const { data: products = [] } = useProductsAxiosAsyncAwait()

  return (
    <>
      <Header />

      <div className="home-page">
        <div className="products-grid">
          {products.length === 0 && <p>No products available.</p>}

          {products.map((product) => {
            return <ProductsCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
};
