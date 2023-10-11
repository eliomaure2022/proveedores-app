const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const routerApi = require("./routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// db.authenticate()
//   .then(() => console.log("Base de datos autenticada"))
//   .catch((error) => console.log(error));

// db.sync({ force: false })
//   .then(() => console.log("Base de satos sincronizada"))
//   .catch((error) => console.log(error));

// transporter
//   .verify()
//   .then(() => console.log("transporter is ok"))
//   .catch((error) => console.log(error));

// const sendEmail = async () => {
//   await transporter.sendMail({
//     from: "elioian2014@gmail.com",
//     to: "ian.rosas@academlo.com",
//     subject: "prueba de nodemailer",
//     text: "hola nodemailer",
//     html: "<h1>hola nodemailer</h1>",
//   });
// };

// sendEmail();

routerApi(app);

module.exports = app;
