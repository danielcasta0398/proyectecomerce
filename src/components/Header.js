import React from 'react';
import { Link } from 'react-router-dom';
import ModalLogin from './ModalLogin';

const Header = () => {
    return (
        <div>
            <nav>
                <Link to='/'> <h2 className='tittle'>e-commerce</h2> </Link> 
                <div className='buttons-nav'>
                  <button><i class="fa-solid fa-user"></i></button>
                  <button><i class="fa-solid fa-box-open"></i></button> 
                  <button><i class="fa-solid fa-cart-shopping"></i></button>     
                </div>                
            </nav>
            <div className='modal-card'>
                    <ModalLogin/>
            </div>
        </div>
    );
};

export default Header;