import React, { Component } from "react";
import { connect } from "react-redux";
import  InputSV  from "./InputSV";
import  TableSV  from "./TableSV";

class SinhVien extends Component {
   
  render() {

    return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <InputSV/>
        </div>
        <div className="col-12">
          <TableSV/>
        </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => state
  

export default connect(mapStateToProps)(SinhVien);
