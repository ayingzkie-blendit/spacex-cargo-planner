export const actionTypes = {
  LOAD_SHIPMENTS_ALL: "LOAD_SHIPMENT_ALL",
  LOAD_SHIPMENT_FILTERED: "LOAD_SHIPMENT_FILTERED",
  LOAD_SHIPMENTS_ALL_SUCCESS: "LOAD_SHIPMENTS_ALL_SUCCESS",
  LOAD_SHIPMENTS_ALL_ERROR: "LOAD_SHIPMENTS_ALL_ERROR",
  LOAD_SHIPMENT_RECORD: "LOAD_SHIPMENT_RECORD",
  LOAD_SHIPMENT_RECORD_SUCCESS: "LOAD_SHIPMENT_RECORD_SUCCESS",
  LOAD_SHIPMENT_RECORD_ERROR: "LOAD_SHIPMENT_RECORD_ERROR",
  UPDATE_SHIPMENT: "UPDATE_SHIPMENT",
  SAVE_SHIPMENTS: "SAVE_SHIPMENTS",
  FAIL: "FAIL",
  SUCCESS: "SUCCESS",
  LOAD_SHIPMENTS_FROM_NETWORK: "LOAD_SHIPMENTS_FROM_NETWORK",
};

export function loadShipmentsAll() {
  return { type: actionTypes.LOAD_SHIPMENTS_ALL };
}

export function loadShipmentFromNetwork() {
  return {
    type: actionTypes.LOAD_SHIPMENTS_FROM_NETWORK,
  };
}

export function loadShipmentFiltered(filter) {
  return {
    type: actionTypes.LOAD_SHIPMENT_FILTERED,
    payload: {
      filter,
    },
  };
}

export function loadShipmentsAllSuccess(data) {
  return {
    type: actionTypes.LOAD_SHIPMENTS_ALL_SUCCESS,
    data,
  };
}

export function loadShipmentRecord(id) {
  return {
    type: actionTypes.LOAD_SHIPMENT_RECORD,
    payload: {
      id,
    },
  };
}

export function loadShipmentRecordSuccess(data) {
  return {
    type: actionTypes.LOAD_SHIPMENT_RECORD_SUCCESS,
    data,
  };
}

export function updateShipment({ shipment, value }) {
  return {
    type: actionTypes.UPDATE_SHIPMENT,
    payload: {
      shipment,
      value,
    },
  };
}

export function saveShipments(data) {
  return {
    type: actionTypes.SAVE_SHIPMENTS,
    data,
  };
}

export function onFail(message) {
  return {
    type: actionTypes.FAIL,
    message,
  };
}

export function onSuccess(message) {
  return {
    type: actionTypes.SUCCESS,
    message,
  };
}
