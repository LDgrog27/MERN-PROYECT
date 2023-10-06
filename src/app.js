import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser" // midleware para manejar cookies en formato json
import cors from "cors" // midleware para manejar cors

import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";


const app = express()

app.use(cors({
    origin: "http://localhost:5173", //le permito comunicacion solo con el 5173
    credentials: true
}))
app.use(morgan('dev'))
app.use(express.json()) // Middleware que nos permite entender los formatos json que nos envian los clientes
app.use(cookieParser())
app.use("/api", authRoutes)
app.use("/api", taskRoutes)


export default app;