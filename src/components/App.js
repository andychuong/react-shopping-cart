import React, { Component } from 'react';
import './App.css';
import CartItemList from './cart-item-list/cart-item-list'
import AddItem from './add-item/add-item'
import Total from './total/total'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cart: [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ]
    }
  }

  onAddItem = ({ myEle, quantity }) => {
    let newProduct = {...myEle}
    let cartCopy = [...this.state.cart]
    for (let i = 0; i< this.state.cart.length; i++) {
      if(this.state.cart[i].product.id === newProduct.id){
        let itemClone = {...this.state.cart[i]}
        itemClone.quantity = itemClone.quantity + parseInt(quantity)
        cartCopy[i] = itemClone
        this.setState({
          ...this.state,
          cart: cartCopy
        })
        return true
      }
    }
    const maxId = this.state.cart.reduce((acc, el) => Math.max(acc, el.id), 0)
    let newItem = {
      id: maxId + 1,
      product: newProduct,
      quantity: quantity
    }
    cartCopy.push(newItem)
    this.setState({
      ...this.state,
      cart:cartCopy
    })
    return true
  }

  render() {
    return (
      <div className="App">
      
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand" href="./index.html">Shopping Cart</a>
        </nav>

        <div className="container">
          <h1>Cart Items</h1>
          <div className="list-group">
            <div className="list-group-item">
              <div className="row">
                <div className="col-md-8">Product</div>
                <div className="col-md-2">Price</div>
                <div className="col-md-2">Quantity</div>
              </div>
            </div>
            {/* Items go here */}
            <CartItemList items={this.state.cart} />
          </div>
          <Total items={this.state.cart} />
          <AddItem onAddItem={this.onAddItem} />
        </div>

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="./index.html">&copy; 2018</a>
        </nav>
      </div>
    );
  }
}

export default App;
