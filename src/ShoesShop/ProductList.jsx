import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

  
  renderDSSP = () => {
    return this.props.arrayShoes.map((shoes) => {
        return <div className="col-4 mb-2" key={`shoes-${shoes.id}`}>
           <ProductItem showChiTiec={this.props.showChiTiec} shoes={shoes}/>

        </div>

    })
}
  
  render() {
    return (
      <div className="row py-5">
        {this.renderDSSP()}
      </div>
    )
  }
}
