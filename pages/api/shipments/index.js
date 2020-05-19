import shipments from "../../../shipments.json";
import _ from "lodash";

export default (req, res) => {
  if (req.query.hasOwnProperty("id")) {
    const json = _.find(shipments, (shipment) => shipment.id === req.query.id);
    res.status(200).json(json);
  } else if (req.query.hasOwnProperty("filter")) {
    const json = _.filter(shipments, (shipment) =>
      shipment.name.toLowerCase().includes(req.query.filter.toLowerCase())
    );
    res.status(200).json(_.orderBy(json, "name", "asc"));
  } else {
    res.status(200).json(_.orderBy(shipments, "name", "asc"));
  }
};
