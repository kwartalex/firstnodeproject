import path from "path";

export default function (req, res) {
  res.json([
    {
      position: "Gardener",
      employer: "Garden Center 1",
    },
    {
      position: "Gardener",
      employer: "Garden Center 2",
    },
  ]);
}
