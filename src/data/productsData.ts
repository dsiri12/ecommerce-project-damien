export let products = [];

export const loadProductsFetch = async () => {
  console.log('loading products with fetch');
  fetch('https://supersimplebackend.dev/products').then((response) => {
    console.log(response);
  })
}

await loadProductsFetch()


export function loadProducts(callbackFn: ()=>void) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    products = JSON.parse(xhr.response);
    console.log(products);

    callbackFn();
  })


  xhr.open('GET', 'https://supersimplebackend.dev/products')
  xhr.send();

}

// loadProducts();