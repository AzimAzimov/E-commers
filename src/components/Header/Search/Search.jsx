import { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'

import img from '../../../assets/products/earbuds-prod-1.webp'

import "./Search.scss";

const Search = ({ toggleSearch, setToggleSearch }) => {
  const [inputValue, setInputValue] = useState("")
  return (
    <div className={`search ${toggleSearch ? 'active' : ''}`}>
      <div className="layout">
        <div className="search__head">
          <h2>Search by name</h2>
          <div onClick={() => setToggleSearch(false)} className="close__modal">
            <MdOutlineClose />
            <span>close</span>
          </div>
        </div>
        <div className="form__field">
          <FiSearch className='search__icon' />
          <input 
            value={inputValue}
            type="text" 
            autoFocus
            placeholder='Search for products'
            onChange={(e) => setInputValue(e.target.value)}
          />
          {inputValue && (
            <MdOutlineClose className='clear__input' onClick={() => setInputValue('')}/>
          )}
        </div>
        <div className="search__result__content">
          <div className="search__result__items">
            <div className="search__result__item">
              <div className="search__item__img">
                <img src={img} alt="img" />
              </div>
              <div className="search__item__info">
                <div className="search__title__block">
                  <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sapiente recusandae necessitatibus distinctio similique voluptatibus odit aspernatur pariatur. Ea repudiandae, ad eaque dolor quos optio voluptatibus voluptas similique tempora sint!</p>
                </div>
              </div>
            </div>
            <div className="search__result__item">
              <div className="search__item__img">
                <img src={img} alt="img" />
              </div>
              <div className="search__item__info">
                <div className="search__title__block">
                  <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sapiente recusandae necessitatibus distinctio similique voluptatibus odit aspernatur pariatur. Ea repudiandae, ad eaque dolor quos optio voluptatibus voluptas similique tempora sint!</p>
                </div>
              </div>
            </div>
            <div className="search__result__item">
              <div className="search__item__img">
                <img src={img} alt="img" />
              </div>
              <div className="search__item__info">
                <div className="search__title__block">
                  <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sapiente recusandae necessitatibus distinctio similique voluptatibus odit aspernatur pariatur. Ea repudiandae, ad eaque dolor quos optio voluptatibus voluptas similique tempora sint!</p>
                </div>
              </div>
            </div>
            <div className="search__result__item">
              <div className="search__item__img">
                <img src={img} alt="img" />
              </div>
              <div className="search__item__info">
                <div className="search__title__block">
                  <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sapiente recusandae necessitatibus distinctio similique voluptatibus odit aspernatur pariatur. Ea repudiandae, ad eaque dolor quos optio voluptatibus voluptas similique tempora sint!</p>
                </div>
              </div>
            </div>
            <div className="search__result__item">
              <div className="search__item__img">
                <img src={img} alt="img" />
              </div>
              <div className="search__item__info">
                <div className="search__title__block">
                  <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sapiente recusandae necessitatibus distinctio similique voluptatibus odit aspernatur pariatur. Ea repudiandae, ad eaque dolor quos optio voluptatibus voluptas similique tempora sint!</p>
                </div>
              </div>
            </div>
            <div className="search__result__item">
              <div className="search__item__img">
                <img src={img} alt="img" />
              </div>
              <div className="search__item__info">
                <div className="search__title__block">
                  <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sapiente recusandae necessitatibus distinctio similique voluptatibus odit aspernatur pariatur. Ea repudiandae, ad eaque dolor quos optio voluptatibus voluptas similique tempora sint!</p>
                </div>
              </div>
            </div>
            <div className="search__result__item">
              <div className="search__item__img">
                <img src={img} alt="img" />
              </div>
              <div className="search__item__info">
                <div className="search__title__block">
                  <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sapiente recusandae necessitatibus distinctio similique voluptatibus odit aspernatur pariatur. Ea repudiandae, ad eaque dolor quos optio voluptatibus voluptas similique tempora sint!</p>
                </div>
              </div>
            </div>
            <div className="search__result__item">
              <div className="search__item__img">
                <img src={img} alt="img" />
              </div>
              <div className="search__item__info">
                <div className="search__title__block">
                  <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sapiente recusandae necessitatibus distinctio similique voluptatibus odit aspernatur pariatur. Ea repudiandae, ad eaque dolor quos optio voluptatibus voluptas similique tempora sint!</p>
                </div>
              </div>
            </div>
            <div className="search__result__item">
              <div className="search__item__img">
                <img src={img} alt="img" />
              </div>
              <div className="search__item__info">
                <div className="search__title__block">
                  <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sapiente recusandae necessitatibus distinctio similique voluptatibus odit aspernatur pariatur. Ea repudiandae, ad eaque dolor quos optio voluptatibus voluptas similique tempora sint!</p>
                </div>
              </div>
            </div>
            <div className="search__result__item">
              <div className="search__item__img">
                <img src={img} alt="img" />
              </div>
              <div className="search__item__info">
                <div className="search__title__block">
                  <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sapiente recusandae necessitatibus distinctio similique voluptatibus odit aspernatur pariatur. Ea repudiandae, ad eaque dolor quos optio voluptatibus voluptas similique tempora sint!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Search;
