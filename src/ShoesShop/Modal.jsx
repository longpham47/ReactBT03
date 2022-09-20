import React, { Component } from 'react'

export default class Modal extends Component {
  render() {

    let {chiTiecShoes} = this.props
    return (
      <div>


      <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title py-5" >Modal title</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                      </button>
                  </div>
                  <div className="modal-body">
                      <table className="table">

                          <div>
                              <div className="row">
                                  <div className="col-6">
                                      <h3>Hình Ảnh Sản Phẩm</h3>
                                      <img className='img-fluid' src={chiTiecShoes.image} alt="" />
                                  </div>
                                  <div className="col-6">
                                      <h2>Chi Tiếc Sản Phẩm</h2>

                                      <tbody>
                                          <tr>
                                              <td>ID</td>
                                              <td>{chiTiecShoes.id}</td>

                                          </tr>
                                          <tr>
                                              <td>Tên Sản Phẩm</td>
                                              <td>{chiTiecShoes.name}</td>
                                          </tr>
                                          <tr>
                                              <td>Thương Hiệu</td>
                                              <td>{chiTiecShoes.alias}</td>

                                          </tr>
                                          <tr>
                                              <td>Giá Tiền</td>
                                              <td>{chiTiecShoes.price} $</td>

                                          </tr>
                                          <tr>
                                              <td>description</td>
                                              <td>{chiTiecShoes.description}</td>

                                          </tr>
                                          <tr>
                                              <td>shortDescription</td>
                                              <td>{chiTiecShoes.shortDescription}</td>

                                          </tr>
                                          <tr>
                                              <td>số lượng</td>
                                              <td>{chiTiecShoes.quantity}</td>

                                          </tr>


                                      </tbody>

                                  </div>
                              </div>
                          </div>
                      </table>

                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                  </div>
              </div>
          </div>
      </div>
  </div>
    )
  }
}
