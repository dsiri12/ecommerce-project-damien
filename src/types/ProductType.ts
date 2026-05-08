export type ProductType = {
    id: string;
    image: string;
    name: string;
    rating: {
        stars: number;
        count: number;
    };
    priceCents: number;
    keywords: string[];
}

/*

export const productData = {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090,
    keywords: ["socks", "sports", "apparel"]
  }
*/

//export type ProductType =typeof productData