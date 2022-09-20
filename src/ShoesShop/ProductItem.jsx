import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    let {shoes,showChiTiec} = this.props;
    return (
      <div className="card">
      <img className="card-img-top" src={shoes.image} alt="" />
      <div className="card-body">
          <h4 className="card-title">{shoes.name}</h4>
          <p className="card-text">{shoes.price}$</p>
          <button onClick={()=>{
              showChiTiec(shoes)
          }} data-toggle="modal" data-target="#modelId" className='btn btn-info'>xem chi tiếc</button>
      </div>
  </div>
    )
  }
}
