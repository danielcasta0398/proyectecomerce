import React from 'react';
import '../styles/modal.css'
import '../styles/modal.css'

const ModalLogin = () => {

    
    return (
        <div className='modal'>
           <div className="user"><i className="fa-solid fa-circle-user"></i></div>
           <form action="">
               <div>
                 <label htmlFor="email">Email</label>
                 <input
                   type="email" 
                 />
               </div>
               
               <div>
                   <label htmlFor="password">Password</label>
                   <input type="password" />
               </div>

               <button >Login</button>
           </form>
           <div className='footer-modal'>
               <p>Don't have an account?</p>
           </div>
        </div>
    );
};

export default ModalLogin;