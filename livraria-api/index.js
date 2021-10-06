import express from "express";
import cors from "cors";
import winston from "winston";
import clientesRouter from "./routers/cliente.route.js";
import livrosRouter from "./routers/livro.route.js";
import autorsRouter from "./routers/autor.route.js";
import vendasRouter from "./routers/venda.route.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "livraria-api.log" })
    ],
    format: combine(
        label({ label: "livraria-api" }),
        timestamp(),
        myFormat
    )
});

const app = express();
app.use(express.json());
app.use(cors());
app.use("/cliente", clientesRouter);
app.use("/livro", livrosRouter);
app.use("/autor", autorsRouter);
app.use("/venda", vendasRouter);
app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ error: err.message });
})


app.listen(3000, () => console.log("API Started!"));

