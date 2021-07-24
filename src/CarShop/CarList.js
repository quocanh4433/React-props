import React, { Component } from 'react'
import CarItem from './CarItem'
export default class CarList extends Component {
    renderCarList = () => {
        let {carData, viewDetail} = this.props
        return carData.map((car, index) => {
            return <div className="col-3 mt-2" key={index}>
                <CarItem carDetail={car} viewDetail={viewDetail}/>
            </div>
        }) 
    }
    render() {
        return (
            <div className="row">
                {this.renderCarList()}
            </div>
        )
    }
}
