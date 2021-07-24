import React, { Component } from 'react'
import CarList from './CarList'
import CarModal from './CarModal'

export default class CarShop extends Component {
    arrCars = [
        { id: 1, name: 'black car', img: './img/products/black-car.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './img/products/red-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './img/products/silver-car.jpg', price: 3000 },
        { id: 3, name: 'Steel car', img: './img/products/steel-car.jpg', price: 4000 }
    ];

    state = {
        stateCarDetail : { id: 1, name: 'black car', img: './img/products/black-car.jpg', price: 1000 },
    }

    viewDetail = (stateClick) => {
        this.setState ({
            stateCarDetail: stateClick
        })
    }

    render() {
        return (
            <div className="container">
                <h2>Car Store</h2>
                <CarList carData={this.arrCars} viewDetail={this.viewDetail}/>
                <CarModal carDetail={this.state.stateCarDetail}/>
            </div>
        )
    }
}
