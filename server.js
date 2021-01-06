const express = require("express");
const dotenv = require("dotenv");

//Route files
const bootcamps = require("./routes/bootcamps");

//Load config files
dotenv.config({ path: "./config/config.env" });

const app = express();

// Mount routes
app.use("/api/v1/bootcamps", bootcamps);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port} `,
  ),
);
