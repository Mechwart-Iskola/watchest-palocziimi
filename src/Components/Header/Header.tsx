import 'boxicons/css/boxicons.min.css';

import Cart from '../Cart/Cart';
import './header.css'
import { useState } from 'react';

const Header = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [showCart, setShowCart] = useState<boolean>(false);

  {/*Adj a theme ikonhoz egy olyan funkciót amivel váltogatni lehet a light és dark mode között*/}
  const toggleDarkmode = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    document.body.classList.toggle("dark-theme");
    (e.target as HTMLElement).classList.toggle("bx-moon");
    (e.target as HTMLElement).classList.toggle("bx-sun");
  }
  
  {/*Adj egy funkciót a toggle ikonhoz amivel mobilnézetben le lehet nyitni a navigációs menüt a close ikonnal meg bezárni*/}
  const openMobileMenu = () => {
    setOpenMenu(true)
  }

  const closeMobileMenu = () => {
    setOpenMenu(false)
  }

  {/*
    Adj egy funkciót a cart-shop ikonhoz amivel le lehet nyitni a vásárlási listát
    A vásárlási lista egy külön komponens.
    */}


  {/* Állítsd be az App.css-ben az ul osztályszelektornak, hogy a listaelemek pontok nélkül jelenjenek meg */}


  

  return (
    <>
    <header className="header" id="header">
    <nav >
        <a href="#" className="nav__logo">
            <i className='bx bxs-watch nav__logo-icon'></i> Rolex
        </a>
        <div className={`nav__menu ${openMenu && "show-menu"}`}  id="nav-menu">      
            <ul className="nav__list">
                {/*
                Készítsd el a Header-eket: Home, Featured, Products, New
                Mindegyik egy listaelem, és azon belül egy hivatkozás
                a listaelem ostrálya nav__item, a hivatkozás osztálya nav__link
                */}
                <li className="nav__item"><a href="" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="" className="nav__link">Featured</a></li>
                <li className="nav__item"><a href="" className="nav__link">Products</a></li>
                <li className="nav__item"><a href="" className="nav__link">New</a></li>
            </ul>
            <div className="nav__close" id="nav-close" onClick={closeMobileMenu}>
                <i className='bx bx-x' ></i>
            </div>
        </div>
        <div className="nav__btns">           
            <i className='bx bx-moon change-theme' id="theme-button" onClick={toggleDarkmode}></i>
            <div className="nav__shop" id="cart-shop" onClick={() => setShowCart(!showCart)}>
                <i className='bx bx-shopping-bag'></i>
            </div>
            <div className="nav__toggle" id="nav-toggle" onClick={openMobileMenu}>
                <i className='bx bx-grid-alt' ></i>
            </div>
        </div>
    </nav>
</header>
{/*Itt jelenjen meg a Cart ha az ikonra kattintottunk */}
<Cart open={showCart}/>
 </>
  )
}

export default Header