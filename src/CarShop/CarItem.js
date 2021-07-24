import React, { Component } from 'react'

export default class CarItem extends Component {
    render() {
        let {carDetail,viewDetail} = this.props
        return (
            <div className="card">
                <img src={carDetail.img} alt="..."/>
                <div className="p-4">
                    <h4>{carDetail.name}</h4>
                    <p>{carDetail.price}</p>
                    <button className="btn btn-outline-danger" data-toggle="modal" data-target="#modelId" onClick={()=>{
                        viewDetail(carDetail)
                    }
                    }>Chi tiết</button>
                </div>
            </div>
        )
    }
}
