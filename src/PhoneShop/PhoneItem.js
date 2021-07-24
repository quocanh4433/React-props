import React, { Component } from 'react'

export default class PhoneItem extends Component {
    render() {
        let {propsArrPhone, rebderPhoneDetail} = this.props
        return (
            <div className="card">
                <img src={propsArrPhone.hinhAnh} width="100%" height="400px" alt="..." />
                <div className="bg-dark text-white p-4">
                    <h5>{propsArrPhone.tenSP}</h5>
                    <p>{propsArrPhone.giaBan.toLocaleString()}</p>
                    <button className="btn btn-success" onClick={() => {
                        rebderPhoneDetail(propsArrPhone)
                    }}>Chi tiết</button>
                </div>
            </div>
        )
    }
}
