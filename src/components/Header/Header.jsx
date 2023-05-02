import { useState, useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { TbSearch } from 'react-icons/tb'
import { RiShoppingBagLine } from 'react-icons/ri'
import { AiOutlineHeart } from 'react-icons/ai'
import { HiOutlineMenu } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'

import Search from './Search/Search'
import Cart from '../Cart/Cart'
import { Context } from '../../utils/context';

import "./Header.scss";

const data = [
  {
    id: 1,
    path: "/",
    title: "Home"
  },
  {
    id: 2,
    path: "/about",
    title: "About"
  },
  {
    id: 3,
    path: "/categories",
    title: "Category"
  },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [toggleCart, setToggleCart] = useState(false)
  const [toggleSearch, setToggleSearch] = useState(false)

  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 200) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  })

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "unset"
    document.body.style.paddingRight = mobileMenu ? "17px" : "unset"
  }, [mobileMenu])

  useEffect(() => {
    document.body.style.overflow = toggleCart ? "hidden" : "unset"
    document.body.style.paddingRight = toggleCart ? "17px" : "unset"
  }, [toggleCart])

  useEffect(() => {
    document.body.style.overflow = toggleSearch ? "hidden" : "unset"
    document.body.style.paddingRight = toggleSearch ? "17px" : "unset"
  }, [toggleSearch])

  return (
    <>
      <header className={`header ${scrolled ? 'stiky__header' : ''}`}>
        <div className="header__content">
          <HiOutlineMenu onClick={() => setMobileMenu(true)} className='menu__mobile'/>
          <nav className='navbar'>
            <ul className={`left ${mobileMenu ? "active" : ""}`}>
              {mobileMenu && <MdOutlineClose onClick={() => setMobileMenu(false)} className='close'/>}
              {data.map(item => (
                <NavLink 
                  to={`${item.path}`} 
                  onClick={() => setMobileMenu(false)} 
                  key={item.id}
                  className={({isActive}) => isActive ? "active" : ""}
                >
                  {item.title}
                </NavLink>
                ))}
            </ul>
          </nav>
          <div className="right">
            <TbSearch onClick={() => setToggleSearch(true)}/>
            <AiOutlineHeart/>
            <span className="cart__icon" onClick={() => setToggleCart(true)}>
              <RiShoppingBagLine/>
              <span>5</span>
            </span>
          </div>
        </div>
      </header>
      <Cart toggleCart={toggleCart} setToggleCart={setToggleCart} />
      <Search toggleSearch={toggleSearch} setToggleSearch={setToggleSearch} />
    </>
  )
};

export default Header;
