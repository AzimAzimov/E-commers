
import React from 'react'
import "./Category.scss";
import Products from '../Products/Products';

const Category = () => {
  return (
    <div className="category__cat">
      <div className="layout">
        <div className="category__cat__title">Category Title</div>
        <Products innerPage={true} />
      </div>
    </div>
  )
}

export default Category
