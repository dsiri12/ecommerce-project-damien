export function loadCart(callbackFn:()=>void) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    console.log(xhr.response);

    callbackFn();
  })


  xhr.open('GET', 'https://supersimplebackend.dev/cart')
  xhr.send();

}

// loadProducts();