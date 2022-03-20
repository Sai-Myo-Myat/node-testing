const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const Event = async (name, age) => {
  try {
    if (!fs.existsSync(path.join(__dirname, "facts"))) {
      await fsPromises.mkdir(path.join(__dirname, "facts"));
    }

    await fsPromises.appendFile(
      path.join(__dirname, "facts", "text.txt"),
      `My name is ${name} and ${age} years old.\n`
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = Event;
