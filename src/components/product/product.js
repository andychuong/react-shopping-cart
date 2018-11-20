import React from 'react';

const Product = ({ item }) => (

  <option value={item.name}>
    {item.name}
  </option>
)

export default Product