import React from 'react';

const SearchBox = ({searchchange}) => {
return( 
    <div className='tc pa2'>
        <input
        className='tc pa3 ba b--blue bg-lightest-blue'
        type='search' 
        placeholder='Search Robots'
        onChange={searchchange}
        />

    </div>
);
}

export default SearchBox;