import { Header } from "../components/Header";
import "./HomePage.css";
import { ProductsCard } from "../components/home/ProductsCard";
import { useProducts } from "../hooks/useProducts";

export const HomePage = () => {
  const { data: products = [], isLoading, isError, error } = useProducts();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{(error as Error).message}</p>;
  }

  return (
    <>
      <Header />

      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            return <ProductsCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
};
