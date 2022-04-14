import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CardProducts from '../components/CardProducts';
import Header from '../components/Header';
import {  getProductsThunk } from '../redux/actions';

const Home = () => {

    const dispatch = useDispatch()
    

    useEffect( () => {
        dispatch( getProductsThunk() )         
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