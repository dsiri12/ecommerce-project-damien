import { Header } from "../components/Header";
import "./HomePage.css";
import { ProductsCard } from "../components/home/ProductsCard";
import { useProducts } from "../hooks/useProducts";

export const HomePage = () => {
  const { data: products = [] , isLoading, isError , error} = useProducts()

  if (isLoading) return <p>Loading products...</p>;
  
  if (isError) return <p>Error: {error?.message}</p>;

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
