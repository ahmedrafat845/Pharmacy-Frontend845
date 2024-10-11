import React, { useEffect, useState } from 'react'
import { BaseUrl } from './../../BaseUrl/base';
import axios from 'axios';
import Product from '../Product/Product';

export default function Products() {

    const [eyes, setEyes] = useState([])
    const [painkiller, setPainkiller] = useState([])
    const [skinCare, setSkinCare] = useState([])
    const [haircare, setHaircare] = useState([])
    const [head, setHead] = useState([])
    const [depression, setDepression] = useState([])
    const [internalDiseases, setInternalDiseases] = useState([])
    const [bones, setBones] = useState([])
    const [ear, setEar] = useState([])

 

    const [loading, setLoading] = useState(false)

    let getAllItems = async (category, callBack) => {
        try {
          setLoading(true);
          let { data } = await axios.post(`${BaseUrl}/products/category`, { category });  // Sending category in the body
          callBack(data.products);
        } catch (error) {
          console.error('Error fetching data:', error.response?.data || error.message);
        } finally {
          setLoading(false);
        }
      };
      
      
  useEffect(() => {
    
    getAllItems('Ear',setEar) 
    getAllItems('eyes',setEyes) 
    getAllItems('Pain killer',setPainkiller)
    getAllItems('Skin care',setSkinCare) 
    getAllItems('haircare',setHaircare) 
    getAllItems('Head',setHead) 
    getAllItems('Depression and Mental illnesses',setDepression)
    getAllItems('internal diseases',setInternalDiseases) 
    getAllItems('Bones',setBones) 
  
  
   
  }, [])
  console.log(eyes);
  

  return (
    <>
      <Product categoryProducts={eyes} categoryName={'Product Of Category Eyes'}/>
      <Product categoryProducts={painkiller} categoryName={'Product Of Category Pain Killer'}/>
      <Product categoryProducts={skinCare} categoryName={'Product Of Category Skin Care'}/>
      <Product categoryProducts={haircare} categoryName={'Product Of Category Hair Care'}/>
      <Product categoryProducts={depression} categoryName={'Product Of Category Depression and Mental illnesses'}/>
      <Product categoryProducts={internalDiseases} categoryName={'Product Of Category Internal Diseases'}/>
      <Product categoryProducts={bones} categoryName={'Product Of Category Bones'}/>
      <Product categoryProducts={ear} categoryName={'Product Of Category Ear'}/>
      
    </>
  )
}
