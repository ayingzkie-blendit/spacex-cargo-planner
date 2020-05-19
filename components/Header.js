import React, { useRef } from "react";
import "../styles/Header.css";
import { connect } from "react-redux";
import {
  loadShipmentFiltered,
  loadShipmentsAllSuccess,
  saveShipments,
} from "../redux/actions";

const Header = ({ error, shipments, dispatch }) => {
  const inputRef = useRef(null);
  const handleChange = (filter) => {
    dispatch(loadShipmentFiltered(filter.target.value));
  };

  const uploadBtnClickHandler = () => {
    inputRef.current.click();
  };

  const fileInputChange = (event) => {
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
  };

  const onReaderLoad = (event) => {
    console.log(event.target.result);
    var obj = JSON.parse(event.target.result);

    dispatch(loadShipmentsAllSuccess(obj));
  };

  const onSaveShipment = () => {
    console.log("clicked");
    dispatch(saveShipments(shipments));
  };

  return (
    <div className={"header"}>
      <div>
        <a className={"logo"}>Cargo Planner</a>
      </div>
      <div>
        <input className={"input"} onChange={handleChange} />
      </div>
      <div className={"headerRight"}>
        <input
          type={"file"}
          hidden
          ref={inputRef}
          onChange={fileInputChange}
          accept={".json"}
        />
        <a type="fil" onClick={uploadBtnClickHandler}>
          Load
        </a>
        <a onClick={onSaveShipment}>Save</a>
      </div>
    </div>
  );
};

const mapStateToProps = ({ shipments, error }) => {
  return {
    shipments,
    error,
  };
};

export default connect(mapStateToProps)(Header);
