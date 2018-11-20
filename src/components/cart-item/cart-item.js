import React from 'react'

const CartItem = ({ item }) => {
  let price = item.product.priceInCents + ''
  price = `$${price.substring(0, price.length - 2)}.${price.substring(price.length - 2)}`
  return (
    <div className="collection-item">
      <div className="row">
        <div className="col-md-8">{item.product.name}</div>
        <div className="col-md-2">{price}</div>
        <div className="col-md-2">{item.quantity}</div>
      </div>
    </div>
  )
  }

export default CartItem