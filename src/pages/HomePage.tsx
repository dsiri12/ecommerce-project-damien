import axios from "axios";
import { Header } from "../components/Header";
import "./HomePage.css";
import { ProductsCard } from "../components/home/ProductsCard";
import { useEffect, useState } from "react";
import type { ProductType } from "../types/ProductType";

export const HomePage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<ProductType[]>(
          "http://localhost:3000/api/products",
        );

        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

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
