import React from 'react'

const Searchbar = () => {
  return (
    <div className="header-searchbar">
        <input type="text" placeholder='What are you looking for today?' />
        <i class="fa fa-magnifying-glass"></i>
    </div>
  )
}

export default Searchbar