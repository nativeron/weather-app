import React from 'react';
import Logo from '../logo.png'
import SearchBar from './SearchBar.jsx';

function Nav({onSearch}) {
  return (
      <nav style={{display:'flex', 'flexDirection':'column', 'alignItems': 'center'}}>
     <img className='logoimg' alt="logo" src={Logo}/>
    <SearchBar onSearch={onSearch}/>
</nav>
    
  );
};

export default Nav;
