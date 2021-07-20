import React from 'react'

export default function CardFunction(props) {
    let {product} = props
    return (
        <div className="card container">
            <img src={product.url} alt="..."/>
            <div className="card-body bg-dark text-white">
                <h5 className="text-primarry">{product.name}</h5>
                <p>{product.price}</p>
                <button className="btn btn-success">Xem thêm</button>
            </div>
        </div>
    )
}
