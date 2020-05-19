import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getLayout } from "../layouts/MainLayout";
import Alert from "../components/Alert";
const initialState = {
  shipments: [],
};
const Index = ({ shipments }) => {
  const [state, setState] = useState(initialState);

  useEffect(
    () =>
      setState({
        ...state,
        shipments: localStorage.getItem("shipments") || [],
      }),
    []
  );
  return (
    <>
      {shipments.length === 0 ? (
        <div>
          <Alert
            type={"error"}
            message={"No shipmests loaded. Please load shipments"}
          />
        </div>
      ) : (
        <div>
          <Alert
            type={"success"}
            message={"Shipments loaded from the network!"}
          />
        </div>
      )}
    </>
  );
};

Index.getLayout = getLayout;

const mapStateToProps = ({ shipments }) => {
  return {
    shipments,
  };
};

export default connect(mapStateToProps)(Index);
