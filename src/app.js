import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.routes.js";


const app = express()

app.use(morgan('dev'))
app.use(express.json()) // Middleware que nos permite entender los formatos json que nos envian los clientes

app.use("/api",authRoutes)
app.use(cookieParser)

export default app;