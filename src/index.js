const fs = require("fs/promises");
const fileName = "myfile.txt";
const reader = async (fileName) => {
  await fs.readFile(fileName);
};
reader(fileName);
module.exports =  reader ;
