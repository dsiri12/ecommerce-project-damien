/* eslint-disable @typescript-eslint/no-explicit-any */
import { loadProducts } from "./productsData"
import { loadCart } from "./cartData";  

// async = makes a function return a promise
const loadPage = async () => {  // () => Promise<void>
  console.log('page loaded');
}

loadPage().then(() => {
  console.log('page load promise resolved');
})

// ==
const loadPage1 =  () => { // () => Promise<unknown>
  return new Promise((resolve: any) => {
      console.log('page loaded1');
      resolve();
    })
}

loadPage1().then(() => {
  console.log('page1 load promise resolved');
})
  

Promise.all([
  new Promise((resolve: any) => {
    loadProducts(()=> {
      resolve('value1')
    })
  }),

  new Promise((resolve: any) => {
    loadCart(()=> {
      resolve()
    })
  }),


]).then((values: any[]) => {
  console.log(values);
})

/*
// eslint-disable-next-line @typescript-eslint/no-explicit-any
new Promise((resolve: any) => {
  console.log('start promise')
  loadProducts(()=> {
    console.log('finished loading');
    resolve()
  })
}).then(() => {
  console.log('promise resolved- next step');
})
  */