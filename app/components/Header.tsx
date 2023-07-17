import React from 'react'
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="pt-10 pb-40 bg-cover bg-center bg-no-repeat bg-header-img-sm md:bg-header-img-md md:pb-4 lg:bg-header-img-lg" id="header">
  <div className='container'>
    <div className="flex flex-col justify-end gap-4 flex-wrap md:flex-row md:justify-between md:gap-12">
    <nav className="flex items-center justify-between grow md:gap-22">
      <Logo />
      <HeaderMenu />
    </nav>
   <Navbar />
              </div>
          </div>
      </header>

  )
}

export default Header