import React, { Component } from 'react'
import Cart from './Cart'
import CartList from './CartList'
import dataPhone from '../assets/DataPhone/DataPhone.json'

export default class ExerciseCard extends Component {

    state = {
        gioHang : [
            { "maSP": 1, "tenSP": "VinSmart Live", "soLuong": 0 , "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },    
        ] 
    }

    themGioHang = (spClick) => {
        console.log(spClick)
        // Khi click vào sp thêm thuộc tính giỏ hàng
        let spGioHang = {... spClick, soLuong:1};
        // Lấy sản phẩm đó cập thêm vào giỏ hàng
        let gioHangCapNhat = [... this.state.gioHang]
        // kiểm tra sản phầm vừa click có tồn tại trong giỏ hàng hya chưa
        let spGH = gioHangCapNhat.find((sp => sp.maSP === spGioHang.maSP))
        if (spGH){
            spGH.soLuong += 1;
        } else {
            gioHangCapNhat.push(spGioHang)
        }
        this.setState ({
            gioHang :gioHangCapNhat
        })
    }

    xoaGioHang = (maSPClick) => {
        console.log(maSPClick)
        let {gioHang} = this.state
        // CÁCH 1
        // let index = gioHang.findIndex( sp => sp.maSP === maSPClick)
        // if (index != -1) {
        //     console.log("test")
        //     gioHang.splice(index, 1)
        // }
        // CÁCH 2:
        gioHang = gioHang.filter(sp => sp.maSP !== maSPClick)
        this.setState({
            gioHang: gioHang
        })
    }

    tangGiamSoLuong = (maSPClick, soLuong) => {
        console.log(maSPClick,soLuong)
        let {gioHang} = this.state
        let spTangGiam = gioHang.find(sp => sp.maSP === maSPClick)
        if (spTangGiam) {
            spTangGiam.soLuong += soLuong
            if(spTangGiam.soLuong < 1){
                alert('Số lượng tối thiểu là 1')
                spTangGiam.soLuong -= soLuong
            }
        }
        this.setState ({
            gioHang: gioHang
        })
    }
    tinhTongSoLuong = () => {
        let {gioHang} = this.state
        let tongSoLuong = gioHang.reduce((soLuong, sanPham, index) => {
            return soLuong += sanPham.soLuong
        }, 0)
        return tongSoLuong.toLocaleString()
    }
    render() {
        return (
            <div className="container">
                <h3>Bài tập giỏ hàng</h3>
                <div className="text-right">
                    <span className="btn btn-success" data-toggle="modal" data-target="#modelId">Giỏ hàng ({this.tinhTongSoLuong()})</span>
                </div>
                <Cart gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong}/>
                <CartList themGioHang={this.themGioHang} dataPhone={dataPhone}/>
            </div>
        )
    }
}
