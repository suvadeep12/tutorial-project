// import React from 'react'
// import { ProductSlider } from '../../container/ProductSlider'

// export default function Products({products}) {

//     return (
//         <div>
//            <ProductSlider data={products.slice(0,11)} /> 
//         </div>
//     )
// }


// export async function getServerSideProps(context) {
//     const res = await fetch(`https://fakestoreapi.com/products`);
//     const data = await res.json();
  
//     if (!data) {
//       return {
//         notFound: true,
//       };
//     }
//     return {
//       props: {
//         products: data,
//       }, // will be passed to the page component as props
//     };
//   }
