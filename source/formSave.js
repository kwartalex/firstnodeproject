import fs from "fs";
import path from "path";

export default (req, res) => {
  const userInput = JSON.stringify(req.body);
  console.log(JSON.stringify(req.body));
  const fileFormInput = path.join(
    __dirname,
    ".",
    "savedFormData",
    new Date().toISOString() + "json"
  );

  fs.writeFileSync(fileFormInput, userInput);
  res.json({ file_path: fileFormInput });
};
