import React, { useContext, useEffect, useState } from 'react';
import { BaseUrl } from './../../BaseUrl/base';
import axios from 'axios';
import Product from '../Product/Product';
import { FetchProduct } from '../../../Context/FetchProduct';

export default function Products() {

  const { ear, eyes,
    painkiller, skinCare, haircare, head,
     depression, internalDiseases, bones, loading }=useContext(FetchProduct)
 
  // Search state
  const [searchTerm, setSearchTerm] = useState('');



 

  // Filtering products based on search term
  const filterProducts = (products) => {
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <>
      <div className="search-bar w-50 m-auto mt-4">
        <input
          type="text"
          placeholder="Search on products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control p-2"
        />
      </div>

      <Product categoryProducts={filterProducts(eyes)} categoryName={'Eyes'} loading={loading} />
      <Product categoryProducts={filterProducts(painkiller)} categoryName={'Pain Killer'} loading={loading} />
      <Product categoryProducts={filterProducts(skinCare)} categoryName={'Skin Care'} loading={loading} />
      <Product categoryProducts={filterProducts(haircare)} categoryName={'Hair Care'} loading={loading} />
      <Product categoryProducts={filterProducts(depression)} categoryName={'Depression and Mental illnesses'} loading={loading} />
      <Product categoryProducts={filterProducts(internalDiseases)} categoryName={'Internal Diseases'} loading={loading} />
      <Product categoryProducts={filterProducts(bones)} categoryName={'Bones'} loading={loading} />
      <Product categoryProducts={filterProducts(head)} categoryName={'Bones'} loading={loading} />
      <Product categoryProducts={filterProducts(ear)} categoryName={'Ear'} loading={loading} />
    </>
  );
}
