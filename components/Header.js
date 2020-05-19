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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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
        {/*         
        <input className={"input"} onChange={handleChange} /> */}
        <div className="input-container">
          <i>
            <FontAwesomeIcon icon={faSearch} className="icon" />
          </i>
          <input className="input-field" type="text" onChange={handleChange} />
        </div>
      </div>
      <div className={"headerRight"}>
        <a className="button" type="fil" onClick={handleClickEvent}>
          Load
        </a>
        <a className="button" onClick={onSaveShipment}>
          Save
        </a>
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
