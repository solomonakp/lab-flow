import React from 'react';
import '../component styles/header.css';
function Header() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light py-3 fixed-top'>
      <a className='navbar-brand d-none d-lg-block' href='./'>
        LAB FLOW
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>

      <form className='form-inline search-form  ml-auto mr-4 d-none d-sm-flex '>
        <div className='input-group align-items-center '>
          <i className='material-icons mr-2'>search</i>
          <input
            type='search'
            placeholder='Search...'
            aria-label='Search'
            aria-describedby='search-patient'
          />
        </div>
      </form>

      <ul className='navbar-nav  flex-row'>
        <li className='nav-item active mr-3  '>
          <a className='nav-link text-success' href='/'>
            Sunny Asar
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link text-danger' href='/'>
            Log out
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
