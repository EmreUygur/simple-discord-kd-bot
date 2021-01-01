const { fetchData } = require("../helpers/records.helper");

exports.run = (client, msg, args) => {
  const data = fetchData();
  if (!data) {
    msg.reply("Uhhh something went wrong while reading data");
    return;
  }
  console.log(data);
  msg.reply("Successfully read");
};

exports.helper = {
  name: "read",
};
