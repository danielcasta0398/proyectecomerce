import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CardProducts from '../components/CardProducts';
import Header from '../components/Header';
import {  getCategoriesThunk, getProductsThunk } from '../redux/actions';

const Home = () => {

    const dispatch = useDispatch()
    

    useEffect( () => {
        dispatch( getProductsThunk() );
        dispatch( getCategoriesThunk() )      
        

    }, [ dispatch ])  

       

    return (            
        <div>
            <Header />                     
            <div className='content-product'>
            
             <CardProducts />
            </div>          
            
                        
        </div>
    );
};

export default Home;