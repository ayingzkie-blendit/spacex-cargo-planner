import fs from "fs";
export default (req, res) => {
  // console.log(req.body, "query");
  // fs.writeFile(
  //   `../../../../shipments.json`,
  //   JSON.stringify(req.body.params.shipments),
  //   "utf8",
  //   (err) => {
  //     res.status(500).json(err);
  //   }
  // );

  // fs.writeFile(
  //   `../../../../public/static/shipments.json`,
  //   JSON.stringify(req.body.params.shipments),
  //   "utf8",
  //   function (err, data) {
  //     if (err) throw err;
  //     // Do something here
  //     res.status(200).send("Shipments saved.");
  //   }
  // );

  res.status(200).json();
};
