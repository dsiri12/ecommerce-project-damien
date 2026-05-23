import { useEffect, useState } from "react";
import type { ProductType } from "../types/ProductType";

export const useProductsXHR = () => {
  const [xhrProducts, setXhrProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      if (xhr.status === 200) {
        const data: ProductType[] = JSON.parse(xhr.responseText);
        setXhrProducts(data);
      }
    };

    xhr.open("GET", "http://localhost:3000/api/products");
    xhr.send();
  }, []);

  return { data: xhrProducts };
};


/*
const data: ProductType[] = JSON.parse(xhr.responseText);

JSON.parse do:
from:

'[{"id":1,"title":"Laptop"}]'

to 

[
  { "id": 1, "title": "Laptop" },
  { "id": 2, "title": "Phone" }
]
*/