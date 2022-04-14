import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getProductsInfoThunk} from '../redux/actions';
import Header from './Header';
import SlidesShow from './SlidesShow';

const InfoProducts = () => {

    const dispatch = useDispatch()   
    const {id} = useParams()

    useEffect( () => {    
        dispatch( getProductsInfoThunk(id) )        

    }, [ dispatch, id ])

    const product = useSelector( state => state.product )
   

    return (
        <div className='data-product'>
            <Header />
            <div className='title-section-product'>
                    <p>Home</p>
                    <div className="separator"></div>
                    <b> {product.title} </b>                             
                    
                </div>
                <SlidesShow />
                <h2 className='title-description'> {product.title} </h2>
                <div className='infoproduct-price' >
                    <div>
                        <p>Price:</p>
                        <b>$ {product.price} </b>
                    </div>
                    <div>
                        <p>Quantity</p>
                    </div>               

                </div>

                <div className='button-cart'>
                <button className='add-cart'>
                    Add to cart 
                </button> 
                </div>

                <div className='description'>
                    <p>
                        {
                            product.description
                        }
                    </p>
                </div>
             
        </div>
    );
};

export default InfoProducts;