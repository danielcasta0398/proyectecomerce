import React, { useState } from 'react';

const Counter = () => {

    const [ value, setValue ] = useState(1)

    const menos = () =>{
        if (value > 1) {
            setValue( value - 1 )
        }
    }

    return (
        <div className='counterDiv'>
            <button onClick={menos} disabled={value <= 1} ><i class="fa-solid fa-minus"></i></button>
            <div className='value'> {value} </div>
            <button onClick={ () => setValue( value + 1 ) } ><i class="fa-solid fa-plus"></i></button>
        </div>
    );
};

export default Counter;