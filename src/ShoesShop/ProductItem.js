import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let {prd} = this.props
        return (
            <div className="card mb-4">
                <img src={prd.image} alt="..."/>
                <div className="card-body">
                    <h4 style={{height: "50px"}}>{prd.name}</h4>
                    <p>{prd.price}</p>
                    <button className="btn btn-success">Add to card</button>
                </div>
            </div>
        )
    }
}
