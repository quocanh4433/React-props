import React, { Component } from 'react'
import PhoneItem from './PhoneItem'

export default class PhoneShop extends Component {
    arrPhones = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    state = {
        prodcutDetail: { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    }

    renderPhoneList = () => {
        return this.arrPhones.map((arrPhone, index) => {
            return <div className="col-4" key={index}>
                <PhoneItem propsArrPhone={arrPhone} rebderPhoneDetail={this.rebderPhoneDetail} />
            </div>
        })
    }

    rebderPhoneDetail = (phoneClick) => {
        this.setState ({
            prodcutDetail: phoneClick
        })
    }
   

    render() {

        // Bóc tách phần tuer để viết ngắn gọn hơn
        let {prodcutDetail} = this.state


        return (
            <div className="container">
                <h3>Danh sách điện thoại</h3>
                <div className="row">
                    {this.renderPhoneList()}
                </div>
                <hr/>
                <div className="row mt-5">
                    <div className="col-6">
                        <h4>{prodcutDetail.tenSP}</h4>
                        <img src={prodcutDetail.hinhAnh} width="250px" height="350px" alt="..."/>
                    </div>
                    <div className="col-6">
                        <h4>Thông số kỹ thuật</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Mà hình</th>
                                    <th>{prodcutDetail.manHinh}</th>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <th>{prodcutDetail.heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <th>{prodcutDetail.cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <th>{prodcutDetail.cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>RAM</th>
                                    <th>{prodcutDetail.ram}</th>
                                </tr>
                                <tr>
                                    <th>ROM</th>
                                    <th>{prodcutDetail.rom}</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
