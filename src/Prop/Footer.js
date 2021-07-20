import React, { Component } from 'react'

export default class Footer extends Component {
    // this.props: là 1 thuộc tính có sẵn của react class component dùng để nhận biết giá trị mà component cha truyền vào

    /*
    Phân biệt giữa State và Prop

    GIỐNG:
    + Thuộc tính có sẵn của react class component để binding dữ liệu lên giao diện

    KHÁC:

    + this.state: dùng để chứa các giá trị thay đổi trên giao diện và có thể gán lại qua phương thức séttate
    + this.props: dùng để nhận giá trị component cha (nơi chwuas thẻ đó) truyền vào, lưu ý không thể gán lại giá trị đó
     */

    render() {
        return (
            <div style={{backgroundColor:this.props.bgColor}} className="text-white text-center container">
                {this.props.content}
            </div>
        )
    }
}
