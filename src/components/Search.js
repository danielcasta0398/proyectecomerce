import React, { useState } from 'react';

const Search = () => {

    const [ search, setSearch ] = useState('')

    console.log(search)

    return (
        <div className='content-product'>
        <div className="input-search">
            <form action="" className='search-form' >
                <input
                 type="text" 
                 placeholder='What are you looking for?'
                 onChange={ e => setSearch(e.target.value) }
                 />
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div> 
       </div>  
    );
};

export default Search;