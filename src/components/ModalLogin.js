import React, { useState } from 'react';

import '../styles/modal.css'
import '../styles/modal.css'

const ModalLogin = () => {

    const loginUser = () =>{
        return(
          <>  
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
               <button onClick={ () => setLogin(!login) } >Sign up </button>
           </div>
         </>
        )
    }

    const signUser = () =>{
        return(
           <> 
            <form action="">  
            
            <div>
            <label htmlFor="email">Email</label>
            <input
              type="email" 
            />
           </div>

           <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text" 
            />
           </div>

           <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text" 
            />
           </div>
          
          <div>
              <label htmlFor="password">Password</label>
              <input type="password" />
          </div>

          <div>
            <label htmlFor="phone">Phone (10 characters)</label>
            <input
              type="number" 
            />
           </div>

          <button >Register</button>
   
       </form>

       <div className='footer-modal'>
               <p>Have an account?</p>
               <button onClick={ () => setLogin(!login) } >Log in </button>
     </div>      

      </>
        )
    }

    const [ login, setLogin ] = useState(true)
    
    return (
        <div className='modal'>
           <div className="user"><i className="fa-solid fa-circle-user"></i></div>
           { 
              login ? loginUser() : signUser()
           }
           
        </div>
    );
};

export default ModalLogin;