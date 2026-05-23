/* eslint-disable @typescript-eslint/no-explicit-any */
import { loadProductsFetch } from "./productsData"

// async = makes a function return a promise
const loadPage = async () => {  // () => Promise<void>
  console.log('page loaded');

  await loadProductsFetch(); //  await can only be used in async functions

  return 'value2';
}

loadPage().then((value: string) => {
  console.log('next step');
  console.log(value); 
})

await loadProductsFetch();  
// top level await, only works in modules, and only if the module system is set to ESNext


