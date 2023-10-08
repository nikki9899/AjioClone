import React from 'react';
import  Navbar from '../../components/headerfooter/header.jsx'; 
import Products from '@/pages/productpage/product.jsx';
import PopularProducts from "@/components/organisms/productGrid.jsx";
export default function PPage() {
    return (
      <main>
       <Products/>
       <PopularProducts />
      
       
      </main>
    );
  }
  