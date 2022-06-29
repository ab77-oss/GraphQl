import React from 'react'  // not necessary to import React since it is already imported in index.js
import logo from './assets/logo.png';

export default function Header() {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
        <div className='container'>
            <a className='navbar-brand' href='/'>
                <div className='d-flex'>
                    <img src={logo} alt='logo' className='mr-2'/>
                    <div>Project GraphQl</div>
                </div>
            </a>
        </div>
    </nav>
  )
}
