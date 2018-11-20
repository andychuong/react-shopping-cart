import React, { Component } from 'react'
import Product from '../product/product'

class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: 'Mediocre Iron Watch',
      quantity: 1,
      product: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ]
    }
  }

  
  onSubmit = (e) => {
    e.preventDefault()
    // console.log(item, quantity)
    let myEle = {}
    // console.log(this.state.item)
    for(let i = 0; i < this.state.product.length; i++){
      if(this.state.item === this.state.product[i].name){
        myEle = this.state.product[i]
      }
    }
    // console.log(myEle);
    
    const { quantity } = this.state
    const { onAddItem } = this.props
    onAddItem({ myEle, quantity })
  }

  onQuantityChange = (e) => {
    // console.log(e.target.value)
    e.preventDefault()
    this.setState({
      ...this.state,
      quantity: e.target.value
    })
  }

  onItemChange = (e) => {
    // console.log(e.target.value)
    e.preventDefault()
    this.setState({
      ...this.state,
      item: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Add an item!</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Item: </label><br></br>
            <select id="product" onChange={this.onItemChange}>
              {this.state.product.map((x, y) => <Product id={y} key={y} item={x} />)}
            </select>
          </div>
          <div>
            <label>Quantity: </label><br></br>
            <input type="number" value={this.state.quantity} onChange={this.onQuantityChange} />
          </div>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default AddItem