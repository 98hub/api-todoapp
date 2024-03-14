import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const getTasks = async (req, res) => {
    try {
        const response = await prisma.task.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const updateTask = async (req, res) => {
    const { title, description, dueDate, isCompleted, isImportant } = req.body;
    try {
        const task = await prisma.task.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                title: title,
                description: description,
                dueDate: dueDate,
                isCompleted: isCompleted,
                isImportant: isImportant
            }
        });
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const getTaskById = async (req, res) => {
    try {
        const response = await prisma.task.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
}

export const createTask = async (req, res) => {
    const { title, description, dueDate, isCompleted, isImportant } = req.body;
    try {
        const task = await prisma.task.create({
            data: {
                title: title,
                description: description,
                dueDate: dueDate,
                isCompleted: isCompleted,
                isImportant: isImportant
            }
        });
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const deleteTask = async (req, res) => {
    try {
        const task = await prisma.task.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}