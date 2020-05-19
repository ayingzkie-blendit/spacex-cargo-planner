import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLayout } from "../layouts/MainLayout";
const Index = ({ shipments }) => {
  return (
    <>
      {shipmentsLocal ? (
        <div>
          No shipments available please load shipments. Please save loaded
          shipments
        </div>
      ) : (
        <div>Welcome to Package Planner App</div>
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
