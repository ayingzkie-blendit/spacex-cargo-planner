import axios from "axios";
import _ from "lodash";
import shipments from "../pages/api/shipments";
class Api {
  static BASE_URL = "http://localhost:3000";
  static GET_SHIPMENT = "/api/shipments";
  static SET_SHIPMENT = "/api/shipments/post";

  static defaultConfig = {
    headers: { "Access-Control-Allow-Origin": "*" },
  };

  getShipment = (id) => this._get(`${Api.GET_SHIPMENT}?id=${id}`);
  getAllShipments = () => this._get(`${Api.GET_SHIPMENT}`);
  getAllShipmentsByFilter = (filter) =>
    this._get(`${Api.GET_SHIPMENT}?filter=${filter}`);
  saveShipments = (shipments) =>
    this.post(`${Api.SET_SHIPMENT}`, {
      params: {
        shipments,
      },
    }).then((resp) => {
      console.log(resp, "response");
    });

  _get = (path, config) => {
    if (!config) {
      config = {};
    }
    config = _.assign({}, this.defaultConfig, config);
    return axios.get(Api.BASE_URL + path, config);
  };

  post = (path, config) => {
    if (!config) {
      config = {};
    }
    config = _.assign({}, this.defaultConfig, config);
    return axios.post(Api.BASE_URL + path, config);
  };
}

export default Api;
