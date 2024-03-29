import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import TaskRoute from "./routes/TaskRoute.js";

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world! Welcome to API todoapp.')
});

app.use(cors());
app.use(express.json());
app.use(TaskRoute);

app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running...')
});