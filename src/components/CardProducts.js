import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CardProducts = () => {

    
    const products = useSelector( state => state.products )   

    return (
        <>
            {
              products.map( product => (
                <Link to={`/infoproducts/${product.id}`}> 
                  <div className="card-product">
                    <div className="img-product">
                     <img src={product.productImgs[0]} alt="" /> 
                   </div> 
                    <div className="card-title">
                      <strong className='title-product' key={product.id} > {product.title} </strong>
                    </div>                   
                    
                    <div className="price">
                        <div>
                            <p>Price</p>
                            <b> $ {product.price} </b>
                        </div>
                        <button className='card-shopping'>
                          <i class="fa-solid fa-cart-plus"></i>
                        </button>
                    </div>
                 </div>
                </Link>   
              ) ) 
              
            }
       </>    
        
    );
};

export default CardProducts;