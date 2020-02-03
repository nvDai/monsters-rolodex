import React from 'react'
import './search-box.style.css'

const SearchBox = ({ placeholder, handleChangeInput}) => (
  <input
    type="search"
    placeholder={placeholder}
    onChange={handleChangeInput}
  />
)

export default SearchBox