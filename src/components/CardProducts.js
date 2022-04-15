import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFilterThunk } from '../redux/actions';

const CardProducts = () => {

    const dispatch = useDispatch()
    const products = useSelector( state => state.products )  
   
    const [ search, setSearch ] = useState('')

    const searchProducts = e =>{
        e.preventDefault()
        dispatch(getFilterThunk(search))      
    }

    return (
        <>

              <div className='content-product'>
                <div className="input-search">
                    <form action="" className='search-form' onSubmit={searchProducts} >
                        <input
                        type="search" 
                        placeholder='What are you looking for?'
                        onChange={ e => setSearch(e.target.value) }
                        />
                        <button><i class="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div> 
              </div> 
            {
              products.length === 0 ? (
                <div className='noFound'>
                  <img src='https://peugeot.navigation.com/static/WFS/Shop-Site/-/Shop/en_US/Product%20Not%20Found.png'  alt="fgf" />
                  <h3>No products found!</h3>
                </div>
                
              ) : (                  
            
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
            
              )
            }  


       </>    
        
    );
};

export default CardProducts;