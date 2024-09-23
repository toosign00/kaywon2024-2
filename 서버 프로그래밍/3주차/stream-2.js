const fs = require("fs");

const readStream = fs.createReadStream("./readMe.txt", "utf8");
const writeStream = fs.createWriteStream("./writeMe.txt");

readStream.on("data", (chunk) => {
    console.log("new data chunk received:");
    writeStream.write(chunk);
}
);