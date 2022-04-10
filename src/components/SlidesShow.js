import React, { useRef } from 'react';
import '../styles/slides.css'
import {  useSelector } from 'react-redux';

const SlidesShow = () => {   
    
    const images = useSelector( state => state.product.productImgs )

   
    const buttonLeft = () => {
        
        if(slideshow.current.children.length > 0){
            const index = slideshow.current.children.length - 1
            const lastElement = slideshow.current.children[index]
            const tamañoSlide = slideshow.current.children[0].offsetWidth;

            slideshow.current.insertBefore(lastElement, slideshow.current.firstChild)

            slideshow.current.style.transition = 'none'
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`

            setTimeout( () => {
                slideshow.current.style.transition = '1000ms ease-out all'
                slideshow.current.style.transform = `translateX(0)`
            }, 10 )

        }
    }

    const buttonRigth = () => {      

        if (slideshow.current.children.length > 0) {
            const firstElement = slideshow.current.children[0]

            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            
            slideshow.current.style.transition = '1000ms ease-out all'
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`
           
            const transition = () =>{

                slideshow.current.style.transition = 'none'
                slideshow.current.style.transform = 'translateX(0)'
                
                slideshow.current.appendChild(firstElement)

                slideshow.current.removeEventListener('transitionend', transition)

            }
          
            slideshow.current.addEventListener('transitionend', transition)


        }
     
    }
    
   const slideshow = useRef(null)

    return (
        <div className='content-slide'  >   
                                
            <div className='image-conten' ref={slideshow}>
                {
                    images?.map( image => (
                        
                        <img src={image}  alt="" />
                       
                    ) )
                }
            </div>
            
            <div className='buttons-gallery'>
                <div className="buttons">
                    <button onClick={buttonLeft}><i class="fa-solid fa-angle-left"></i></button>
                </div>   
                <div className="buttons">
                     <button onClick={ buttonRigth } ><i class="fa-solid fa-angle-right"></i></button>         
                </div>           
               
            </div>    
           
                  
        </div>
    );
};

export default SlidesShow;