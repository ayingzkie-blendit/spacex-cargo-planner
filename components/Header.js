import React, { useRef } from "react";
import "../styles/Header.css";
import { connect } from "react-redux";
import {
  loadShipmentFromNetwork,
  saveShipments,
  loadShipmentRecord,
  loadShipmentFiltered,
} from "../redux/actions";
import { useRouter } from "next/router";
const Header = ({ error, shipments, dispatch }) => {
  const router = useRouter();
  const inputRef = useRef(null);
  const handleChange = (filter) => {
    dispatch(loadShipmentFiltered(filter.target.value));
  };

  const handleClickEvent = () => {
    dispatch(loadShipmentFromNetwork());
  };

  const onSaveShipment = () => {
    dispatch(saveShipments(shipments));
    if (router.query?.id) {
      dispatch(loadShipmentRecord(router.query.id));
    }
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
        <a type="fil" onClick={handleClickEvent}>
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
