
import React, { Component } from "react";
import { connect } from "react-redux";

export class InputSV extends Component {
  handleSubmit=()=>{
   this.handleChangeInput()

  }
  handleChangeInput = (e) => {
    let { id, value } = e.target;
    const action = {
      type: "SinhVienReducer/changeInfo",
      payload: {
        id,
        value,
      },
    };
    this.props.dispatch(action);
  };

  render() {
    return (
      <div>
        <h1 className="bg-black text-white p-3"> Thông Tin Sinh Viên</h1>
        <form className="d-flex" onClick={()=>this.handleSubmit}>
          <div className="form-left w-50 p-2">
            <div className="mb-3">
              <label htmlFor="maSV" className="form-label">
                Mã SV
              </label>
              <input
                type="number"
                className="form-control"
                id="maSV"
                onInput={this.handleChangeInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Số điện thoại
              </label>
              <input
                type="number"
                className="form-control"
                id="phone"
                onInput={this.handleChangeInput}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Thêm sinh viên
            </button>
          </div>

          <div className="form-right w-50 p-2">
            <div className="mb-3">
              <label htmlFor="tenSV" className="form-label">
                Họ Tên
              </label>
              <input
                type="text"
                className="form-control"
                id="tenSV"
                onInput={this.handleChangeInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>

              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                onInput={this.handleChangeInput}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(InputSV);
