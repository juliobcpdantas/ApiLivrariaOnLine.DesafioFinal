import express from "express";
import cors from "cors";
import winston from "winston";
import clientsRouter from "./routers/client.route.js";
import booksRouter from "./routers/book.route.js";
import authorsRouter from "./routers/author.route.js";
import salesRouter from "./routers/sale.route.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "store-api.log" })
    ],
    format: combine(
        label({ label: "store-api" }),
        timestamp(),
        myFormat
    )
});

const app = express();
app.use(express.json());
app.use(cors());
app.use("/client", clientsRouter);
app.use("/book", booksRouter);
app.use("/author", authorsRouter);
app.use("/sale", salesRouter);
app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ error: err.message });
})


app.listen(3000, () => console.log("API Started!"));

