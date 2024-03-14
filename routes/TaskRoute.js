import express from "express";
import {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} from "../controllers/TaskController.js";

const router = express.Router();

router.get('/tasks', getTasks);
router.get('/task/:id', getTaskById);
router.post('/task', createTask);
router.patch('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);

export default router;