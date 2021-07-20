import React, { Component } from 'react'

export default class Product extends Component {

    render() {
        let {product} = this.props;
        return (
            <div>
                <div className="card">
                    <img src={product.url} alt="..."/>
                    <div className="card-body bg-dark text-white">
                        <h5 className="text-primarry">{product.name}</h5>
                        <p>{product.price}</p>
                        <button className="btn btn-success">Xem thêm</button>
                    </div>
                </div>
            </div>
        )
    }
}
