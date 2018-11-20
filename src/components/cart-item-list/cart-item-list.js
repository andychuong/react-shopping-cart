import React from 'react'
import CartItem from '../cart-item/cart-item'

const CartItemList = ({ items }) => (
  <ul>
    {items.map((x, y) => <CartItem id={y} key={y} item={x} />)}
  </ul>
)

export default CartItemList