import React, { Component } from 'react'
import CartItem from './CartItem'

export default class CartList extends Component {
    renderTable = () => {
        let {dataPhone, themGioHang} = this.props
        return dataPhone.map((phone,index) => {
            return  <div className="col-4" key={index}>
                <CartItem themGioHang={themGioHang} phoneDetail={phone}/>
            </div>

        })
    }

    render() {
        return (
            <div className="row">
                {/* <div className="col-4">
                    <CartItem/>
                </div> */}
                {this.renderTable()}
            </div>
        )
    }
}
