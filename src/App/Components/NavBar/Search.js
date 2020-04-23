import React from 'react'

const Search = () => {
    return (
        <div className='search-box'>
            <input
                className='search-txt'
                type='text'
                name='search'
                placeholder='Type to search'
            />
            <a className='search-btn' href='#'>
                <i className='fas fa-search'></i>
            </a>
        </div>
    );
}

export default Search;