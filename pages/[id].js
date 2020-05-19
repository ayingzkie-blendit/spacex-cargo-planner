import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { loadShipmentRecord, updateShipment } from "../redux/actions";
import { getLayout } from "../layouts/MainLayout";
import _ from "lodash";
import Alert from "../components/Alert";
const Shipment = ({ shipment, dispatch }) => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    dispatch(loadShipmentRecord(id));
  }, [id]);

  const handleChange = (value) => {
    dispatch(updateShipment({ shipment, value }));
  };

  const bays = Math.round(
    shipment?.boxes
      ?.split(",")
      .map(Number)
      .reduce((a, b) => a + b) / 10
  );
  return (
    <>
      {!_.isEmpty(shipment) ? (
        <>
          <div style={{ margin: "20px" }}>
            <h1>{shipment.name}</h1>
          </div>

          <div style={{ margin: "20px" }}>
            <h4>
              <a href={`mailto:${shipment.email}`}>{shipment.email}</a>
            </h4>
          </div>
          <div style={{ margin: "20px" }}>
            <span>
              Number of cargo bays: <b>{bays || 0}</b>
            </span>
          </div>
          <div style={{ margin: "20px" }}>
            <label>Cargo boxes</label>
            <br />
            <input
              value={shipment?.boxes || ""}
              onChange={(val) => handleChange(val.target.value)}
              style={{
                width: "50%",
              }}
            />
          </div>
        </>
      ) : (
        <div>
          <Alert
            type={"error"}
            message={
              " Cargo not found! Shipment still not saved. Please click save"
            }
          />
        </div>
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
