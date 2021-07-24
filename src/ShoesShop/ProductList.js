import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    renderProductItem = () => {
        return this.props.arrProduct.map((product,index) => {
            return  <div className="col-4" key={index}>
                <ProductItem prd={product}/>
            </div>
        })


        //Cách viết khác
        // return  this.props.arrProduct.map((product,index) => {
        //     return  <div className="col-4">
        //         <ProductItem/>
        //     </div>
        // })
    }



    render() {

        // Từ mảng này tạo ra giao diện và sử dụng thẻ <productItem/> để hiển thị thông tin sản phẩm
        return (
            <div className="row">
                {this.renderProductItem()}
            </div>
        )
    }
}
