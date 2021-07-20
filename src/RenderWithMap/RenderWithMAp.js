import React, { Component } from 'react'

export default class RenderWithMAp extends Component {
    arrProduct = [
        {id: 1, name: "iphone12", price: 1200, url: "https://picsum.photos/seed/picsum/200/300"},
        {id: 2, name: "iphone12Pro", price: 1500, url: "https://picsum.photos/seed/picsum/200/300"},
        {id: 3, name: "iphone12Mini", price: 1400, url: "https://picsum.photos/seed/picsum/200/300"},
        {id: 4, name: "iphone11", price: 1300, url: "https://picsum.photos/seed/picsum/200/300"},
    ]

    renderProduct = () => {
        let contentProduct = this.arrProduct.map((product, index) =>{
            return <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td className="btn btn-success">Edit</td>
            </tr>
        }) 
        return contentProduct
    }

    renderProductCard = () => {
        let content = this.arrProduct.map((product, index) => {
            return <div className="col-3" key={index}>
                <img src={product.url} width="100%" alt="..."/>
                <div className="card-body bg-dark text-white">
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button className="btn btn-success">Xem thêm</button>
                </div>
            </div>
        })
        return content
    }


    render() {
        return (
            <div className="container">
                <h2>Product List</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProduct()}
                    </tbody>
                </table>
                <div className="row">
                    {this.renderProductCard()}
                </div>
                
            </div>
        )
    }
}
