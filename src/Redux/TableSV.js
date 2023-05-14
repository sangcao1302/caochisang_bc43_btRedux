import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableSV extends Component {
    
  render() {
    console.log(this.props)
    let{sinhVienReducer}=this.props
    return (
     
        <table className="table">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">Mã SV</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Tên</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{sinhVienReducer.maSV}</td>
              <td>{sinhVienReducer.phone}</td>
              <td>{sinhVienReducer.tenSV}</td>
              <td>{sinhVienReducer.email}</td>
            </tr>
          </tbody>
        </table>
     
    )
  }
}

const mapStateToProps = (state) => state



export default connect(mapStateToProps)(TableSV)