import React from 'react'
import './search-box.style.css'

export const SearchBox = ({ placeholder, handleChangeInput}) => (
  <input
    type="search"
    placeholder={placeholder}
    onChange={handleChangeInput}
  />
)