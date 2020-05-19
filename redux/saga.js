/* global fetch */

import {
  all,
  call,
  delay,
  put,
  take,
  takeLatest,
  takeLeading,
} from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";
import {
  actionTypes,
  loadShipmentsAllSuccess,
  loadShipmentRecordSuccess,
  updateShipment,
  onFail,
  onSuccess,
} from "./actions";
import Api from "../utils/Api";
const api = new Api();

es6promise.polyfill();

function* loadShipments() {
  try {
    const shipments = localStorage.getItem("shipments") || [];
    yield put(
      loadShipmentsAllSuccess(_.orderBy(JSON.parse(shipments), "name"))
    );
  } catch (err) {
    yield put(onFail(err));
  }
}

function* loadShipmentsFromNetwork() {
  try {
    const { data } = yield api.getAllShipments();
    yield put(loadShipmentsAllSuccess(data));
  } catch (err) {
    yield put(onFail(err));
  }
}

function* loadShipment(action) {
  const {
    payload: { id },
  } = action;

  try {
    const shipment = localStorage.getItem("shipments");
    const data = _.find(JSON.parse(shipment), (shipment) => shipment.id === id);
    yield put(loadShipmentRecordSuccess(data));
  } catch (err) {
    yield put(onFail(err));
  }
}

function* loadShipmentFiltered(action) {
  const {
    payload: { filter },
  } = action;

  try {
    const shipment = localStorage.getItem("shipments");
    let data2 = [];
    if (shipment) {
      data2 = _.filter(JSON.parse(shipment), (shipment) =>
        shipment.name.toLowerCase().includes(filter.toLowerCase())
      );
    }

    // else {
    //   const { data } = yield api.getAllShipmentsByFilter(filter);
    //   data2 = data;
    // }

    yield put(loadShipmentsAllSuccess(data2));
  } catch (err) {
    yield put(onFail(err));
  }
}

function* saveShipments(action) {
  const { data: actionData } = action;
  try {
    localStorage.setItem("shipments", JSON.stringify(actionData));
    yield put(loadShipmentsAllSuccess(actionData));
    yield put(onSuccess("Successfull updated shipments."));
  } catch (error) {
    console.log(error, "error");
    yield put(onFail(error));
  }
}

function* rootSaga() {
  yield all([
    call(loadShipments),
    takeLatest(actionTypes.LOAD_SHIPMENTS_ALL, loadShipments),
    takeLatest(actionTypes.LOAD_SHIPMENT_RECORD, loadShipment),
    takeLatest(actionTypes.LOAD_SHIPMENT_FILTERED, loadShipmentFiltered),
    takeLatest(actionTypes.SAVE_SHIPMENTS, saveShipments),
    takeLatest(
      actionTypes.LOAD_SHIPMENTS_FROM_NETWORK,
      loadShipmentsFromNetwork
    ),
    ,
  ]);
}

export default rootSaga;
