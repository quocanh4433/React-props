import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        let {phoneDetail, themGioHang} = this.props
        return (
            <div className="card">
                <img height="350px" width="100%" src={phoneDetail.hinhAnh} alt="..." />
                <div className="card-body">
                    <h4>{phoneDetail.tenSP}</h4>
                    <p>{phoneDetail.giaBan}</p>
                    <button className="btn btn-danger" onClick={() => {
                        themGioHang(phoneDetail)
                    }}>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
