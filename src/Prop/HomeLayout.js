import React, { Component } from 'react'
import CardFunction from './CardFunction'
import Footer from './Footer'
import Product from './Product'

export default class HomeLayout extends Component {
    arrProduct = [
        {id: 1, name: "iphone12", price: 1200, url: "https://picsum.photos/seed/picsum/200/300"},
        {id: 2, name: "iphone12Pro", price: 1500, url: "https://picsum.photos/seed/picsum/200/300"},
        {id: 3, name: "iphone12Mini", price: 1400, url: "https://picsum.photos/seed/picsum/200/300"},
        {id: 4, name: "iphone11", price: 1300, url: "https://picsum.photos/seed/picsum/200/300"},
    ]

    render() {
        return (
            <div className="container">
                <h3>Home Layout</h3>
                <input type="password"/>
                <hr/>
                <Footer bgColor="black" content="FrontEnd"/>
                <Footer bgColor="yellow" content="Backnd"/>
                <Footer bgColor="red" content="FullStack"/>
                <Footer bgColor="pink" content="Wordpress"/>
                <hr/>
                <h2 className="mb-4">Product</h2>
                <div className="row">
                    <div className="col-3">
                        <Product product={this.arrProduct[0]}/>
                    </div>
                    <div className="col-3">
                        <Product product={this.arrProduct[1]}/>
                    </div>
                    <div className="col-3">
                        <CardFunction product={this.arrProduct[2]}/>
                    </div>
                    
                    {/* <div className="col-3">
                        <Product name="Iphone112Pro" price="1500"/>
                    </div>
                    <div className="col-3">
                        <Product name="Iphone12Mini" price="1000"/>
                    </div>
                    <div className="col-3">
                        <Product name="Iphone11" price="1000"/>
                    </div> */}
                </div>
            </div>
        )
    }
}
