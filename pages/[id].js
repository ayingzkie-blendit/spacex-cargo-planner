import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { loadShipmentRecord, updateShipment } from "../redux/actions";
import { getLayout } from "../layouts/MainLayout";
import _ from "lodash";
const Shipment = ({ shipment, dispatch }) => {
  const router = useRouter();
  const { id } = router.query;
  const { boxes } = shipment;
  useEffect(() => {
    dispatch(loadShipmentRecord(id));
  }, [id]);

  const handleChange = (value) => {
    dispatch(updateShipment({ shipment, value }));
  };

  const bays = Math.round(
    boxes
      ?.split(",")
      .map(Number)
      .reduce((a, b) => a + b) / 10
  );
  return (
    <>
      {!_.isEmpty(shipment) ? (
        <>
          <div>
            <h1>{shipment.name}</h1>
          </div>

          <div>
            <h4>
              <a>{shipment.email}</a>
            </h4>
          </div>
          <div>
            <span>Number of cargo bays: {bays || 0}</span>
          </div>
          <div>
            <input
              value={boxes || ""}
              onChange={(val) => handleChange(val.target.value)}
            />
          </div>
        </>
      ) : (
        <div>Shipment still not loaded please save to load.</div>
      )}
    </>
  );
};

const mapStateToProps = ({ shipment, bays }) => {
  return {
    shipment,
    bays,
  };
};

Shipment.getLayout = getLayout;

export default connect(mapStateToProps)(Shipment);
